import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { ITodo } from "../interfaces";

type TodosState = {
    list: ITodo[];
};

const initialState: TodosState = {
    list: [],
};

const todoSlice = createSlice({
    name: "todos",
    initialState,
    reducers: {
        setTodos(state, action: PayloadAction<ITodo[]>) {
            state.list = action.payload;
        },
        addTodo(state, action: PayloadAction<ITodo["title"]>) {
            state.list.unshift({
                id: Date.now(),
                title: action.payload,
                completed: false,
            });
        },
        toggleComplete(state, action: PayloadAction<ITodo["id"]>) {
            state.list.map((todo) => {
                if (todo.id === action.payload) {
                    todo.completed = !todo.completed;
                }
                return todo;
            });
        },
        removeTodo(state, action: PayloadAction<ITodo["id"]>) {
            state.list = state.list.filter(
                (todo) => todo.id !== action.payload
            );
        },
        removeAll(state, action) {
            state.list = [];
        },
    },
});

export const { setTodos, addTodo, toggleComplete, removeTodo, removeAll } =
    todoSlice.actions;

export default todoSlice.reducer;
