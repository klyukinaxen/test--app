import React, { useRef } from "react";
import { Input } from '@mui/material';
import { Button } from '@mui/material'

interface TodoFormProps {
    onAdd: (title: string) => void,
    onRemove: () => void
}

export const TodoForm: React.FC<TodoFormProps> = ({ onAdd, onRemove }) => {

    const ref = useRef<HTMLInputElement>(null)


    const onKeyDown = (event: React.KeyboardEvent) => {
        if (event.key === "Enter") {
            console.log('enter was pressed', ref);
            onAdd(ref.current!.value);
            ref.current!.value = ""
        }
    }
    //TODO: использовать форму и событие onSubmit
    return (
        <>
            <div className="container__input-field">
                <Button variant="outlined"> Добавить </Button>
                <Input
                    id="title"
                    className="input"
                    placeholder="Введите дело"
                    inputRef={ref}
                    onKeyDown={onKeyDown}
                />
                <Button variant="outlined" color="error" onClick={onRemove}> Очистить  </Button>
            </div>
        </>
    )
}