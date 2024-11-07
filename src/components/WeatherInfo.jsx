import { useState, useEffect } from "react";
import axios from "axios";
import { CurrentWeatherData } from "./CurrentWeatherData";

export const WeatherInfo = () => {

    const [cityName, setCityName] = useState("New Delhi");
    const [sunset ,setSunset] = useState("");
    const [sunrise ,setSunrise] = useState("");
    const [temp, setTemp] = useState("");
    const [minTemp, setMinTemp] = useState("")
    const [maxTemp, setMaxTemp] = useState("")
    const [feelsLike, setFeelsLike] = useState("")
    const [date, setDate] = useState("")
    const [description, setDescription] = useState("")
    const [windSpeed, setWindSpeed] = useState("")
    const [humidity, setHumidity] = useState("")
    const [pressure, setPressure] = useState("")
    const [weatherIcon, setWeatherIcon] = useState("");


    useEffect(() => {
        const apiKey = import.meta.env.VITE_API_KEY;
        const apiUrl = import.meta.env.VITE_API_URL;
        axios.get(`${apiUrl}?q=${cityName}&appid=${apiKey}&units=metric`)
            .then((res) => {
                const obj = res.data;
                setTemp(obj.main.temp);
                setFeelsLike(obj.main.feels_like);
                setMinTemp(obj.main.temp_min);
                setMaxTemp(obj.main.temp_max);
                setPressure(obj.main.pressure)
                setHumidity(obj.main.humidity)
                setSunrise(obj.sys.sunrise)
                setSunset(obj.sys.sunset)
                setWindSpeed(obj.wind.speed)
                setDescription(obj.weather[0].description)
                setWeatherIcon(obj.weather[0].icon);
                setDate(obj.dt);
            }).catch((err) => {
                console.log(`Error fetching data from the API: ${err}`);
            })
    }, [cityName])

    return (
        (weatherIcon && <div>
            <CurrentWeatherData weatherIcon={weatherIcon} sunrise={sunrise} sunset={sunset} dateInUnix={date} temp={temp} windSpeed={windSpeed} humidity={humidity} pressure={pressure} feelsLike={feelsLike} description={description} minTemp={minTemp} maxTemp={maxTemp} />
        </div>)
    )
}
