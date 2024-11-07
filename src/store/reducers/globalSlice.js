import { createSlice } from '@reduxjs/toolkit'

const initialState = {
  isDarkTheme: false,
}

export const globalSlice = createSlice({
  name: 'global',
  initialState,
  reducers: {
    toggleTheme: (state) => {
      state.isDarkTheme = !state.isDarkTheme;
    },
  },
})

// Action creators are generated for each case reducer function
export const { toggleTheme } = globalSlice.actions

export default globalSlice.reducer