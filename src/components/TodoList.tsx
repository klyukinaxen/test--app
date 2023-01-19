import React from "react";
import { ITodo } from "../interfaces";
import Checkbox from "@mui/material/Checkbox"
import DeleteIcon from '@mui/icons-material/Delete';
import { useAppDispatch } from "../hook";
import { toggleComplete, removeTodo } from "../store/todoSlice";

interface ITodoListProps {
    todos: ITodo[]
}

export const TodoList: React.FC<ITodoListProps> = ({ todos }) => {
    const dispatch = useAppDispatch();

    if (todos.length === 0) {
        return (<p>Список дел пуст</p>)
    }

    const removeHandler = (event: React.MouseEvent, id: number) => {
        event.preventDefault()
        dispatch(removeTodo(id))
    }

    return <>
        <div className="container__todos">
            <h3>Список дел: </h3>
            <div className="container__todos_list">
                <div>
                    {/* TODO: вынести в TodoItem */}
                    {todos.map(todo => {
                        const classes = ['todo']
                        if (todo.completed) { classes.push('completed') }
                        return (
                            // TODO: переделать join на https://www.npmjs.com/package/classnames
                            <li className={classes.join(' ')} key={todo.id}>
                                <label>
                                    <div className="todo-item">
                                        <Checkbox
                                            checked={todo.completed}
                                            onClick={() => dispatch(toggleComplete(todo.id))}
                                        />
                                        <span>{todo.title}</span>
                                        <DeleteIcon className="delete-icon" onClick={event => removeHandler(event, todo.id)} />
                                    </div>
                                </label>
                            </li>
                        )
                    })}
                </div>
            </div>
        </div>
    </>
}