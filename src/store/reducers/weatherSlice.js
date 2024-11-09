import { createSlice } from '@reduxjs/toolkit';

const initialState = {
    cityName: "New Delhi",
    sunset: "",
    sunrise: "",
    temp: "",
    minTemp: "",
    maxTemp: "", 
    feelsLike: "",
    date: "",
    description: "",
    windSpeed: "",
    humidity: "",
    pressure: "",
    weatherIcon: ""
};

const weatherSlice = createSlice({
    name: 'weather',
    initialState,
    reducers: {
        setWeatherData: (state, action) => {
            return { ...state, ...action.payload };
        }
    }
});

export const { setWeatherData } = weatherSlice.actions;
export default weatherSlice.reducer; 