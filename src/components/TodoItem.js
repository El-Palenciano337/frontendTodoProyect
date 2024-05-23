import "../styles/todoItem.css";

function TodoItem({ nombreTodo, descripcionTodo, dueDate, onRemoveTodo }) {
    const handleDelete = () => {
        onRemoveTodo();
    };

    return (
        <li className="todoItem">
            <span>Name</span>
            <p>{nombreTodo}</p>

            <span>Description</span>
            <p>{descripcionTodo}</p>

            <p>Due date: {dueDate}</p>

            <button onClick={handleDelete}>Remove</button>
        </li>
    );
}

export { TodoItem };
