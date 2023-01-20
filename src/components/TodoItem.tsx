import React from "react";
import { ITodo } from "../interfaces";
import classNames from 'classnames'
import Checkbox from "@mui/material/Checkbox"
import DeleteIcon from '@mui/icons-material/Delete';
import { useAppDispatch } from "../hook";
import { toggleComplete, removeTodo } from "../store/todoSlice";

interface ITodoListProps {
    todo: ITodo,
}

export const TodoItem: React.FC<ITodoListProps> = ({ todo }) => {
    const dispatch = useAppDispatch();

    const removeHandler = (event: React.MouseEvent, id: number) => {
        event.preventDefault()
        dispatch(removeTodo(id))
    }
    const classes = classNames('todo', { completed: todo.completed })
    return (<>
        <li className={classes} key={todo.id}>
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
    </>)
}