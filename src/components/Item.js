import React from "react";
import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";
import { useDispatch } from "react-redux";
import { removeTodo } from "../reducers/todosSlice";
import "../styles/Item.scss";
import { removeGoal } from "../reducers/goalsSlice";

function Item({ id, name, description, dueDate, option }) {
    const dispatch = useDispatch();

    const removeItem = (e) => {
        e.preventDefault();
        if (option == "tasks") {
            dispatch(removeTodo(id));
        } else {
            dispatch(removeGoal(id));
        }
    };

    return (
        <Card style={{ width: "25rem" }}>
            <Card.Body>
                <Card.Title>{name}</Card.Title>
                <Card.Text className="fw-bold">Description</Card.Text>
                <Card.Text>{description}</Card.Text>
                <Card.Text className="fw-bold">Due Date</Card.Text>
                <Card.Text>{dueDate}</Card.Text>
            </Card.Body>
            <Card.Body>
                <Button
                    variant="primary"
                    className="btn btn-dark"
                    onClick={removeItem}
                >
                    Remove
                </Button>
            </Card.Body>
        </Card>
    );
}

export { Item };
