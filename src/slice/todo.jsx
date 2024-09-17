import { createSlice } from '@reduxjs/toolkit'

const initialState = {
  todo: [],
}

export const counterSlice = createSlice({
  name: 'todo',
  initialState,
  reducers: {
  setTodos: (state,action) => {
    state.todo = action.payload
  }
  },
})

// Action creators are generated for each case reducer function
export const { setTodos } = counterSlice.actions

export default counterSlice.reducer