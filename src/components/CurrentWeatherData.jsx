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

export const CurrentWeatherData = ({ weatherIcon, sunrise, sunset, temp, minTemp, maxTemp, feelsLike, description,
    windSpeed, humidity, pressure, dateInUnix}) => {

    const iconUrl = import.meta.env.VITE_WEATHER_ICON_URL;
    const weatherIconUrl = `${iconUrl}${weatherIcon}@2x.png`;
    const [sunriseHour, sunriseMinute] = extractTime(sunrise);
    const [sunsetHour, sunsetMinute] = extractTime(sunset);
    const [day, date, month] = extractDate(dateInUnix);
    const [timeInHour, timeInMinutes] = extractTime(dateInUnix);

    return (
        <div className="flex justify-between">
            <div>
                <img src={weatherIconUrl} alt="Weather Icon" />
                <p>Sunrise: {sunriseHour}:{sunriseMinute}</p>
                <p>Sunset: {sunsetHour}:{sunsetMinute}</p>
            </div>
            <div>
                <p>{getDayOfWeek(day)} {date} {month} {timeInHour}:{timeInMinutes}</p>
                <p>{temp}</p>
                <p>Feels like {feelsLike}°C</p>
                <p>{description}</p>
            </div>
            <div>
                <p>More Details</p>
                <p>Min Temp: {minTemp} </p>
                <p>Max Temp: {maxTemp} </p>
                <p>Wind Speed: {windSpeed}</p>
                <p>Air humidity: {humidity} </p>
                <p>Pressure: {pressure} </p>
            </div>
        </div>
    )
}
