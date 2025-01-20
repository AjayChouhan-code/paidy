import { createSlice, PayloadAction } from "@reduxjs/toolkit";

import { generateId, getCurrentDate } from "@utils";
import { TASK } from "@types";
import { TodoState } from "./types";

const initialState: TodoState = { todos: [] };

const todoSlice = createSlice({
  name: "todos",
  initialState,
  reducers: {
    addTask: (
      state,
      action: PayloadAction<{ title: string; description: string }>
    ) => {
      const newTodo: TASK = {
        id: generateId(),
        title: action.payload.title,
        description: action.payload.description,
        createdDate: getCurrentDate(),
        status: "Pending",
      };
      state.todos.push(newTodo);
    },

    updateTodo: (state, action: PayloadAction<TASK>) => {
      const updatedTodo = action.payload;

      const index = state.todos.findIndex((todo) => todo.id === updatedTodo.id);

      if (index !== -1) {
        state.todos[index] = updatedTodo;
      }
    },

    deleteTodo: (state, action: PayloadAction<number>) => {
      state.todos = state.todos.filter((todo) => todo.id !== action.payload);
    },
  },
});

export const { addTask, updateTodo, deleteTodo } = todoSlice.actions;
export default todoSlice.reducer;
