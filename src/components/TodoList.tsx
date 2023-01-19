import React from "react";
import { ITodo } from "../interfaces";
import Checkbox from "@mui/material/Checkbox"
import DeleteIcon from '@mui/icons-material/Delete';

interface ITodoListProps {
    todos: ITodo[],
    onToggle: (id: number) => void,
    onRemove: (id: number) => void
}

export const TodoList: React.FC<ITodoListProps> = ({ todos, onToggle, onRemove }) => {
    if (todos.length === 0) {
        return (<p>Список дел пуст</p>)
    }

    const removeHandler = (event: React.MouseEvent, id: number) => {
        event.preventDefault()
        onRemove(id)
    }

    return <>
        <div className="container__todo-list">
            <h3>Список дел: </h3>
            <div>
                {todos.map(todo => {
                    const classes = ['todo']
                    if (todo.completed) { classes.push('completed') }
                    return (
                        <li className={classes.join(' ')} key={todo.id}>
                            <label>
                                <Checkbox
                                    defaultChecked={todo.completed}
                                    onClick={() => onToggle(todo.id)}
                                />
                                <span>{todo.title}</span>
                                <DeleteIcon className="delete-icon" onClick={event => removeHandler(event, todo.id)} />
                            </label>
                        </li>
                    )
                })}
            </div>
        </div>
    </>
}