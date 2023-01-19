import React, { useState, useEffect } from 'react'
import { useNavigate } from 'react-router-dom'
import { TodoList } from "../components/TodoList";
import { TodoForm } from "../components/TodoForm";
import { ITodo } from "../interfaces";
import { ToggleButtonGroup, ToggleButton } from '@mui/material';

type ShowType = 'all' | 'new' | 'solved'

export const TodosPage: React.FC = () => {

    const navigate = useNavigate();

    const [todos, setTodos] = useState<ITodo[]>([]);
    const [showType, setShowType] = useState<ShowType>('all');

    useEffect(() => {
        const saved_todos = JSON.parse(localStorage.getItem('todos') || '[]')
        setTodos(saved_todos)
    }, [])

    useEffect(() => {
        console.log(todos, 'todos');
        localStorage.setItem('todos', JSON.stringify(todos))
    }, [todos])

    const toggleChange = (event: React.MouseEvent<HTMLElement>, value: ShowType) => {
        setShowType(value);
    }

    const addHandler = (title: string) => {
        const newTodo: ITodo = {
            id: Date.now(),
            title: title,
            completed: false
        }
        console.log(newTodo, 'newTodo');

        setTodos(prev => {
            return ([newTodo, ...prev])
        })
    }

    const removeHandler = (id: number) => {
        const remove = window.confirm('Вы уверены, что хотите удалить дело?')
        if (remove) { setTodos(prev => prev.filter(todo => todo.id !== id)) }
    }

    const removeAll = () => {
        setTodos([])
    }

    const toggleHandler = (id: number) => {
        setTodos(prev => prev.map(todo => {
            if (todo.id === id) {
                todo.completed = !todo.completed;
            }
            return todo
        }))
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
            <button onClick={() => navigate('/')}>log out</button>

            <div className="container__add-task">
                <TodoForm onAdd={addHandler} onRemove={removeAll} />
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
                    <TodoList todos={resultTodos} onRemove={removeHandler} onToggle={toggleHandler} />
                </div>

            </div>
        </>
    )
}