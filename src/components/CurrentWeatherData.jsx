import { useSelector } from "react-redux";
import { useState, useEffect } from "react";
function extractTime(unixTimeStamp) {
    const milliseconds = unixTimeStamp * 1000;
    const dateObj = new Date(milliseconds);
    const hours = dateObj.getHours();
    const minutes = dateObj.getMinutes();
    return [hours, minutes];
}

function extractDate(unixTimeStamp) {
    const milliseconds = unixTimeStamp * 1000;
    const dateObj = new Date(milliseconds);
    const month = dateObj.getMonth();
    const day = dateObj.getDay();
    const date = dateObj.getDate();
    return [day, date, month];
}

function getDayOfWeek(index) {
    const daysOfWeek = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];
    return daysOfWeek[index % 7] || "Invalid index";
  }

export const CurrentWeatherData = () => {

    const weatherData = useSelector((state) => state.weather);
    const iconUrl = import.meta.env.VITE_WEATHER_ICON_URL;
    const [weatherIconUrl, setWeatherIconUrl] = useState(`${iconUrl}${weatherData.weatherIcon}@2x.png`);

    useEffect(() => {
        setWeatherIconUrl(`${iconUrl}${weatherData.weatherIcon}@2x.png`);
    }, [weatherData.cityName]);

    const [sunriseHour, sunriseMinute] = extractTime(weatherData.sunrise);
    const [sunsetHour, sunsetMinute] = extractTime(weatherData.sunset);
    const [day, date, month] = extractDate(weatherData.date);
    const [timeInHour, timeInMinutes] = extractTime(weatherData.date);

    return (
        <div className="flex justify-between">
            <div>
                <img src={weatherIconUrl} alt="Weather Icon" />
                <p>Sunrise: {sunriseHour}:{sunriseMinute}</p>
                <p>Sunset: {sunsetHour}:{sunsetMinute}</p>
            </div>
            <div>
                <p>{getDayOfWeek(day)} {date} {month} {timeInHour}:{timeInMinutes}</p>
                <p>{weatherData.temp}</p>
                <p>Feels like {weatherData.feelsLike}°C</p>
                <p>{weatherData.description}</p>
            </div>
            <div>
                <p>More Details</p>
                <p>Min Temp: {weatherData.minTemp} </p>
                <p>Max Temp: {weatherData.maxTemp} </p>
                <p>Wind Speed: {weatherData.windSpeed}</p>
                <p>Air humidity: {weatherData.humidity} </p>
                <p>Pressure: {weatherData.pressure} </p>
            </div>
        </div>
    )
}
