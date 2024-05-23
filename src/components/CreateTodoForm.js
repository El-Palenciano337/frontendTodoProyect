import React, { useState } from "react";
import "../styles/createTodoForm.css";

const CreateTodoForm = ({ onNewTodo }) => {
    const [formData, setFormData] = useState({
        nombreNuevoTodo: "",
        descripcionNuevoTodo: "",
        dueDateNuevoTodo: "",
    });

    const handleChange = (event) => {
        const { name, value } = event.target;
        setFormData({ ...formData, [name]: value });
    };

    const handleSubmit = (event) => {
        event.preventDefault();
        onNewTodo(formData);
        setFormData({
            nombreNuevoTodo: "",
            descripcionNuevoTodo: "",
            dueDateNuevoTodo: "",
        });
    };

    return (
        <form className="addTodoForm" onSubmit={handleSubmit}>
            <label htmlFor="nombreNuevoTodo">Name:</label>
            <input
                type="text"
                id="nombreNuevoTodo"
                name="nombreNuevoTodo"
                value={formData.nombreNuevoTodo}
                onChange={handleChange}
                required
            />

            <label htmlFor="descripcionNuevoTodo">Description:</label>
            <input
                type="text"
                id="descripcionNuevoTodo"
                name="descripcionNuevoTodo"
                value={formData.descripcionNuevoTodo}
                onChange={handleChange}
                required
            />

            <label htmlFor="dueDateNuevoTodo">Due Date:</label>
            <input
                type="date"
                id="dueDateNuevoTodo"
                name="dueDateNuevoTodo"
                value={formData.dueDateNuevoTodo}
                onChange={handleChange}
                required
            />

            <button type="submit">ADD</button>
        </form>
    );
};

export { CreateTodoForm };
