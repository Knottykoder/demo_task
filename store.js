import { configureStore } from '@reduxjs/toolkit'
import todoReducer from "./src/slice/todo"

export const store = configureStore({
  reducer: {
    todo: todoReducer
  },
})