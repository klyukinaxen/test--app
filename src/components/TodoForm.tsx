import React, { useRef } from "react";
import { Input } from '@mui/material';
import { Button } from '@mui/material'

interface TodoFormProps {
    onAdd: (title: string) => void,
    onRemove: () => void
}

export const TodoForm: React.FC<TodoFormProps> = ({ onAdd, onRemove }) => {

    const ref = useRef<HTMLInputElement>(null)

    const onSubmit = () => {
        onAdd(ref.current!.value);
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
                <Button variant="outlined" color="error" onClick={onRemove}> Очистить </Button>
            </form>
        </>
    )
}