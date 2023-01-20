import React from "react";
import { ITodo } from "../interfaces";
import { TodoItem } from "./TodoItem";

interface ITodoListProps {
    todos: ITodo[]
}

export const TodoList: React.FC<ITodoListProps> = ({ todos }) => {
    if (todos.length === 0) {
        return (<p>Список дел пуст</p>)
    }

    return <>
        <div className="container__todos">
            <h3>Список дел: </h3>
            <div className="container__todos_list">
                <div>
                    {todos.map(todo =>
                        <TodoItem todo={todo}></TodoItem>
                    )}
                </div>
            </div>
        </div>
    </>
}