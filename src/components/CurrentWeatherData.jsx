import { useState, useEffect } from "react";
import axios from "axios";

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

export const CurrentWeatherData = ({ data }) => {
    const iconUrl = import.meta.env.VITE_WEATHER_ICON_URL;
    const weatherIconUrl = `${iconUrl}${data.weatherIcon}@2x.png`;
    const [sunriseHour, sunriseMinute] = extractTime(data.sunrise);
    const [sunsetHour, sunsetMinute] = extractTime(data.sunset);
    const [day, date, month] = extractDate(data.date);
    const [timeInHour, timeInMinutes] = extractTime(data.date);

    return (
        <div className="flex justify-between">
            <div>
                <img src={weatherIconUrl} alt="Weather Icon" />
                <p>Sunrise: {sunriseHour}:{sunriseMinute}</p>
                <p>Sunset: {sunsetHour}:{sunsetMinute}</p>
            </div>
            <div>
                <p>{getDayOfWeek(day)} {date} {month} {timeInHour}:{timeInMinutes}</p>
                <p>{data.temp}</p>
                <p>Feels like {data.feelsLike}°C</p>
                <p>{data.description}</p>
            </div>
            <div>
                <p>More Details</p>
                <p>Min Temp: {data.minTemp} </p>
                <p>Max Temp: {data.maxTemp} </p>
                <p>Wind Speed: {data.windSpeed}</p>
                <p>Air humidity: {data.humidity} </p>
                <p>Pressure: {data.pressure} </p>
            </div>
        </div>
    )
}
