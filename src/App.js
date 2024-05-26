import React, { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import { Item } from "./components/Item";
import { FormTodo } from "./components/FormTodo";
import { Menu } from "./components/Menu";
import { MobileButton } from "./components/MobileButton";
import { initAddTodo, clearTodos } from "./reducers/todosSlice";
import { initAddGoal, clearGoals } from "./reducers/goalsSlice";
import "./App.scss";

function App() {
    const todos = useSelector((state) => state.todos.value);
    const option = useSelector((state) => state.option.value);
    const goals = useSelector((state) => state.goals.value);
    const dispatch = useDispatch();

    function initFetch() {
        if (option === "tasks") {
            dispatch(clearTodos());
            fetch("http://localhost:3001/tasks/getTasks", {
                method: "GET",
                headers: {
                    "Content-Type": "application/json",
                    Authorization: "todoproyect",
                },
            })
                .then((response) => response.json())
                .then((response) => {
                    response.forEach((task) => {
                        dispatch(initAddTodo(task));
                    });
                })
                .catch((err) => {
                    console.log(err);
                });
        } else {
            dispatch(clearGoals());
            fetch("http://localhost:3001/goals/getGoals", {
                method: "GET",
                headers: {
                    "Content-Type": "application/json",
                    Authorization: "todoproyect",
                },
            })
                .then((response) => response.json())
                .then((response) => {
                    response.forEach((goal) => {
                        dispatch(initAddGoal(goal));
                    });
                })
                .catch((err) => {
                    console.log(err);
                });
        }
    }

    useEffect(() => {
        initFetch();
    }, [dispatch, option]);

    return (
        <>
            <Menu />

            <div className="App">
                <Container>
                    <Row>
                        <Col
                            xs={0}
                            md={0}
                            className="d-none d-sm-block d-sm-none d-md-block"
                        >
                            <FormTodo option={option} />
                        </Col>

                        <Col xs={0} md={0}>
                            <Row className="d-md-none">
                                <div className="bg-transparent overlapping-div">
                                    <MobileButton className="loat-left" />
                                </div>
                            </Row>
                            <div className="scrolling">
                                {option === "tasks" &&
                                    todos.map((todo) => (
                                        <Item
                                            id={todo._id}
                                            key={todo._id}
                                            name={todo.name}
                                            description={todo.description}
                                            dueDate={todo.dueDate}
                                            option={option}
                                        />
                                    ))}
                                {option === "goals" &&
                                    goals.map((goal) => (
                                        <Item
                                            id={goal._id}
                                            key={goal._id}
                                            name={goal.name}
                                            description={goal.description}
                                            dueDate={goal.dueDate}
                                            option={option}
                                        />
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
