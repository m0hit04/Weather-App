import { configureStore } from '@reduxjs/toolkit'
import globalReducer from './reducers/globalSlice';
import sidebarReducer from './reducers/sidebarSlice';
import weatherReducer from './reducers/weatherSlice';
import temperatureReducer from './reducers/temperatureSlice';
export const store = configureStore({
  reducer: {
    global: globalReducer,
    sidebar: sidebarReducer,
    weather: weatherReducer,
    temperature: temperatureReducer,
  },
});