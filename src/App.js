import { Item } from "./components/Item";
import { FormTodo } from "./components/FormTodo";
import { Menu } from "./components/Menu";
import React, { useState } from "react";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import { MobileButton } from "./components/MobileButton";
import { useSelector, useDispatch } from "react-redux";
import { useEffect } from "react";
import { initAddTodo } from "./reducers/todosSlice";
import "./App.scss";

function App() {
    const todos = useSelector((state) => state.goals.value);
    const option = useSelector((state) => state.goals.value);
    const goals = useSelector((state) => state.goals.value);
    const dispatch = useDispatch();

    function initFetch() {
        fetch("http://localhost:3001/tasks/getTasks", {
            method: "GET",
            headers: {
                "Content-Type": "application/json",
                Authorization: "todoproyect",
            },
        })
            .then((response) => {
                return response.json();
            })
            .then((response) => {
                response.map((task) => {
                    dispatch(initAddTodo(task));
                });
            })
            .catch((err) => {
                console.log(err);
            });
    }
    useEffect(() => {
        initFetch();
    }, []);

    /* const [list, setList] = useState([]);
    const [selectedCategory, setSelectedCategory] = useState("Tasks"); */

    return (
        <>
            <Menu></Menu>

            <div className="App">
                <Container>
                    <Row>
                        <Col
                            xs={0}
                            md={0}
                            className="d-none d-sm-block d-sm-none d-md-block"
                        >
                            <FormTodo></FormTodo>
                        </Col>

                        <Col xs={0} md={0}>
                            <Row className="d-md-none">
                                <div className="bg-transparent overlapping-div">
                                    <MobileButton className="float-left" />
                                </div>
                            </Row>
                            <div className="scrolling">
                                {option === "tasks" &&
                                    todos.map((todo, index) => (
                                        <Item
                                            id={todo.id}
                                            key={index}
                                            name={todo.name}
                                            description={todo.description}
                                            dueDate={todo.dueDate}
                                        ></Item>
                                    ))}
                                {option === "goals" &&
                                    goals.map((goal, index) => (
                                        <Item>
                                            id={goal.id}
                                            key={index}
                                            name={goal.name}
                                            description={goal.description}
                                            dueDate={goal.dueDate}
                                        </Item>
                                    ))}
                            </div>
                        </Col>
                    </Row>
                </Container>
            </div>
        </>
    );
}

export default App;
