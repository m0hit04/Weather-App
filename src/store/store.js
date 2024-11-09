import { configureStore } from '@reduxjs/toolkit'
import globalReducer from './reducers/globalSlice';
import sidebarReducer from './reducers/sidebarSlice';
import weatherReducer from './reducers/weatherSlice';

export const store = configureStore({
  reducer: {
    global: globalReducer,
    sidebar: sidebarReducer,
    weather: weatherReducer,
  },
});