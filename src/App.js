import { GeneralNav } from "./components/GeneralNav";
import { CreateTodoForm } from "./components/CreateTodoForm";
import { TodoList } from "./components/TodoList";
import { TodoItem } from "./components/TodoItem";
import React, { useState } from "react";
import "./App.css";

function App() {
    const [list, setList] = useState([]);
    const [selectedCategory, setSelectedCategory] = useState("Tasks");

    let onNewTodo = (todo) => {
        let newTodo = {
            nombreTodo: todo.nombreNuevoTodo,
            descripcionTodo: todo.descripcionNuevoTodo,
            dueDate: todo.dueDateNuevoTodo,
            category: selectedCategory,
            completed: false,
        };
        setList([...list, newTodo]);
    };

    let onRemoveTodo = (todoToRemove) => {
        const updatedList = list.filter((todo) => todo !== todoToRemove);
        setList(updatedList);
    };

    return (
        <>
            <GeneralNav
                selectedCategory={selectedCategory}
                setSelectedCategory={setSelectedCategory}
            />

            <div className="main-container">
                <CreateTodoForm onNewTodo={onNewTodo} />

                <TodoList>
                    {list
                        .filter((todo) => todo.category === selectedCategory)
                        .map((todo) => (
                            <TodoItem
                                key={todo.nombreTodo}
                                nombreTodo={todo.nombreTodo}
                                descripcionTodo={todo.descripcionTodo}
                                dueDate={todo.dueDate}
                                completed={todo.completed}
                                onRemoveTodo={() => onRemoveTodo(todo)}
                            />
                        ))}
                </TodoList>
            </div>
        </>
    );
}

export default App;
