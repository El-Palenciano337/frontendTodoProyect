import React, { useRef } from "react";
import { useDispatch } from "react-redux";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import "../styles/FormTodo.scss";
import { addGoal } from "../reducers/goalsSlice";
import { addTodo } from "../reducers/todosSlice";

function FormTodo({ option }) {
    const inputRefName = useRef();
    const inputRefDescription = useRef();
    const inputRefDueDate = useRef();

    const dispatch = useDispatch();

    const addItem = (e) => {
        e.preventDefault();
        const newItem = {
            name: inputRefName.current.value,
            description: inputRefDescription.current.value,
            dueDate: inputRefDueDate.current.value,
        };

        if (option === "tasks") {
            dispatch(addTodo(newItem));
        } else if (option === "goals") {
            dispatch(addGoal(newItem));
        }

        inputRefName.current.value = "";
        inputRefDescription.current.value = "";
        inputRefDueDate.current.value = "";
    };

    return (
        <Form>
            <Form.Group className="mb-3">
                <Form.Label>Name:</Form.Label>
                <Form.Control
                    type="text"
                    placeholder="Ingresa el nuevo Todo"
                    ref={inputRefName}
                />
            </Form.Group>

            <Form.Group className="mb-3">
                <Form.Label>Description:</Form.Label>
                <Form.Control
                    as="textarea"
                    rows={3}
                    placeholder="Ingresa Descripcion"
                    ref={inputRefDescription}
                />
            </Form.Group>

            <Form.Group className="mb-3">
                <Form.Label>Due Date:</Form.Label>
                <Form.Control type="date" ref={inputRefDueDate} />
            </Form.Group>

            <Button variant="primary" onClick={addItem}>
                Add {option === "tasks" ? "Task" : "Goal"}
            </Button>
        </Form>
    );
}

export { FormTodo };
