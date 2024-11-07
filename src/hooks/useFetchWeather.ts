import { useState, useEffect } from "react";
import { fetchWeatherData } from "../api/apis";

export const useFetchWeather = () => {
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
      fetchWeatherData(weatherData.cityName)
          .then((obj) => {
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
          console.log("useEffect",   weatherData);
  }, [weatherData.cityName])

  return weatherData;
}