import { createSlice, nanoid } from '@reduxjs/toolkit'

const initialState = {
    todos: []
}

export const todoSlice = createSlice({
    name: "todo",
    initialState,
    reducers: {
        addTodo: (state, action) => {
            const todo = {
                id: nanoid(),
                text: action.payload
            }
            state.todos.push(todo)
        },

        removeTodo: (state, action) => {
            state.todos = state.todos.filter((val) => val.id !== action.payload)
        },

        clearAll: (state, action) => {
            state.todos = []
        }
    }
})

export const { addTodo, removeTodo, clearAll } = todoSlice.actions
export default todoSlice.reducer