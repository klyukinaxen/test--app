import React, { useRef } from "react";
import { Input } from '@mui/material';
import { Button } from '@mui/material'
import { useAppDispatch } from "../hook";
import { addTodo, removeAll } from '../store/todoSlice'

export const TodoForm: React.FC = () => {
    const dispatch = useAppDispatch();
    const ref = useRef<HTMLInputElement>(null)

    const onSubmit = () => {
        dispatch(addTodo(ref.current!.value));
        ref.current!.value = ""
    }

    return (
        <>
            <form className="container__input-field" onSubmit={onSubmit}>
                <Button variant="outlined" type="submit"> Добавить </Button>
                <Input
                    id="title"
                    className="input"
                    placeholder="Введите дело"
                    inputRef={ref}
                    required
                />
                <Button variant="outlined" color="error" onClick={() => dispatch(removeAll())}> Очистить </Button>
            </form>
        </>
    )
}