import { useState, useEffect } from "react";
import axios from "axios";
import { CurrentWeatherData } from "./CurrentWeatherData";

export const WeatherInfo = () => {

    const [weatherData, setWeatherData] = useState({
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
    });


    useEffect(() => {
        const apiKey = import.meta.env.VITE_API_KEY;
        const apiUrl = import.meta.env.VITE_API_URL;
        axios.get(`${apiUrl}?q=${weatherData.cityName}&appid=${apiKey}&units=metric`)
            .then((res) => {
                const obj = res.data;
                setWeatherData({
                    cityName: obj.name,
                    temp: obj.main.temp,
                    feelsLike: obj.main.feels_like,
                    minTemp: obj.main.temp_min,
                    maxTemp: obj.main.temp_max,
                    pressure: obj.main.pressure,
                    humidity: obj.main.humidity,
                    sunrise: obj.sys.sunrise,
                    sunset: obj.sys.sunset,
                    windSpeed: obj.wind.speed,
                    description: obj.weather[0].description,
                    weatherIcon: obj.weather[0].icon,
                    date: obj.dt
                })
            }).catch((err) => {
                console.log(`Error fetching data from the API: ${err}`);
            })
    }, [weatherData.cityName])

    return (
        (weatherData.weatherIcon && <div>
            <CurrentWeatherData data={weatherData} />
        </div>)
    )
}
