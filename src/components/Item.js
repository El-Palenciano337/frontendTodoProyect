import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";
import { removeTodo } from "../reducers/todosSlice";
import { useDispatch } from "react-redux";
import "../styles/Item.scss";

function Item(props) {
    const dispatch = useDispatch();

    const removeItem = (e) => {
        e.preventDefault();
        dispatch(removeTodo(props.id));
    };

    return (
        <Card style={{ width: "25rem" }}>
            <Card.Body>
                <Card.Title>{props.name}</Card.Title>

                <Card.Text className="fw-bold">Description</Card.Text>
                <Card.Text>{props.description}</Card.Text>

                <Card.Text className="fw-bold">Due Date</Card.Text>
                <Card.Text>{props.dueDate}</Card.Text>
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
