import React, { useState, useEffect } from 'react'
import { useNavigate } from 'react-router-dom'
import { TodoList } from "../components/TodoList";
import { TodoForm } from "../components/TodoForm";
// import { ITodo } from "../interfaces";
import { useAppSelector, useAppDispatch } from "../hook";
import { ToggleButtonGroup, ToggleButton, Button } from '@mui/material';
import { setTodos } from '../store/todoSlice';

type ShowType = 'all' | 'new' | 'solved'

export const TodosPage: React.FC = () => {
    const todos = useAppSelector(state => state.todos.list);
    const dispatch = useAppDispatch();
    const navigate = useNavigate();

    const [showType, setShowType] = useState<ShowType>('all');

    useEffect(() => {
        const saved_todos = JSON.parse(localStorage.getItem('todos') || '[]')
        dispatch(setTodos(saved_todos))
    }, [dispatch])

    useEffect(() => {
        console.log(todos, 'todos');
        localStorage.setItem('todos', JSON.stringify(todos))
    }, [todos])

    const toggleChange = (event: React.MouseEvent<HTMLElement>, value: ShowType) => {
        setShowType(value);
    }

    const resultTodos = todos.filter(todo => {
        if (showType === 'solved') {
            return !!todo.completed;
        }
        if (showType === 'new') {
            return !todo.completed;
        }
        return true;
    });

    return (
        <>
            <Button variant='outlined' className='log-out' color="info" onClick={() => navigate('/')}>log out</Button>
            <div className="container__add-task">
                <TodoForm />
            </div>
            <div className="container__toggle">
                <ToggleButtonGroup
                    color="primary"
                    value={showType}
                    exclusive
                    onChange={toggleChange}
                >
                    <ToggleButton value="solved">Выполнено</ToggleButton>
                    <ToggleButton value="all">Все задачи</ToggleButton>
                    <ToggleButton value="new">Не выполнено</ToggleButton>
                </ToggleButtonGroup>
                <div className="container__todos">
                    <TodoList todos={resultTodos} />
                </div>
            </div>
        </>
    )
}