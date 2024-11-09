import { CurrentWeatherData } from "./CurrentWeatherData";
import { useFetchWeather } from "../hooks/useFetchWeather";

export const WeatherInfo = () => {
    const weatherData = useFetchWeather();

    return (
        (weatherData.weatherIcon && <div>
            <CurrentWeatherData />
        </div>)
    )
}
