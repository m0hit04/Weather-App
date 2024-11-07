import { configureStore } from '@reduxjs/toolkit'
import globalReducer from './reducers/globalSlice';

export const store = configureStore({
  reducer: {
    global: globalReducer,
  },
})