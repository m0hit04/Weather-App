import { createSlice } from '@reduxjs/toolkit'

const initialState = []

export const temperatureSlice = createSlice({
  name: 'temperature',
  initialState,
  reducers: {
    setTemperatureData: (state, action) => {
      return action.payload; 
    },
    addTemperatureData: (state, action) => {
      state.push(action.payload); 
    },
  },
})

export const { setTemperatureData } = temperatureSlice.actions;

export default temperatureSlice.reducer;