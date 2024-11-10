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

function getMonth(index) {
    const months = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];
    return months[index % 12] || "Invalid index";
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
        <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0 md:space-x-4 md:px-8">
            <div className="text-center md:text-left">
                <img src={weatherIconUrl} alt="Weather Icon" className="hover:bg-slate-200 dark:hover:bg-slate-700 rounded-full transition-colors duration-1000 mx-auto md:mx-0" />
                <p className="text-slate-500 dark:text-slate-200 text-sm font-mono hover:text-slate-700 dark:hover:text-white transition-colors duration-300">Sunrise: {sunriseHour}:{sunriseMinute}</p>
                <p className="text-slate-500 dark:text-slate-200 text-sm font-mono hover:text-slate-700 dark:hover:text-white transition-colors duration-300">Sunset: {sunsetHour}:{sunsetMinute}</p>
            </div>
            <div className="text-center md:text-left">
                <p className="text-xl font-semibold pt-2 text-slate-700 dark:text-slate-100 hover:text-slate-800 dark:hover:text-white transition-colors duration-300">{getDayOfWeek(day)} {date} {getMonth(month)} {timeInHour}:{timeInMinutes}</p>
                <p className="text-4xl font-semibold text-yellow-300 dark:text-yellow-400 pt-3 hover:text-yellow-400 dark:hover:text-yellow-300 transition-colors duration-300">{weatherData.temp} °</p>
                <p className="text-slate-500 dark:text-slate-200 text-sm font-mono pt-3 hover:text-slate-700 dark:hover:text-white transition-colors duration-300">Feels like {weatherData.feelsLike} °C</p>
                <p className="text-slate-500 dark:text-slate-200 text-sm font-mono hover:text-slate-700 dark:hover:text-white transition-colors duration-300">{weatherData.description}</p>
            </div>
            <div className="text-center md:text-left">
                <p className="text-slate-700 dark:text-slate-100 text-xl font-mono hover:text-slate-800 dark:hover:text-white transition-colors duration-300 pt-1">More Details</p>
                <p className="pt-4 text-slate-500 dark:text-slate-200 text-sm font-mono hover:text-slate-700 dark:hover:text-white transition-colors duration-300 mb-2">Min Temp: {weatherData.minTemp} °C</p>
                <p className="text-slate-500 dark:text-slate-200 text-sm font-mono hover:text-slate-700 dark:hover:text-white transition-colors duration-300 mb-2">Max Temp: {weatherData.maxTemp} °C</p>
                <p className="text-slate-500 dark:text-slate-200 text-sm font-mono hover:text-slate-700 dark:hover:text-white transition-colors duration-300 mb-2">Wind Speed: {weatherData.windSpeed} m/s</p>
                <p className="text-slate-500 dark:text-slate-200 text-sm font-mono hover:text-slate-700 dark:hover:text-white transition-colors duration-300 mb-2">Air humidity: {weatherData.humidity} %</p>
                <p className="text-slate-500 dark:text-slate-200 text-sm font-mono hover:text-slate-700 dark:hover:text-white transition-colors duration-300">Pressure: {weatherData.pressure} hPa</p>
            </div>
        </div>

    )
}
