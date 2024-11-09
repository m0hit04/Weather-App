import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchWeatherData } from "../api/apis";
import { setWeatherData } from "../store/reducers/weatherSlice";

export const useFetchWeather = () => {
  const dispatch = useDispatch();
  const weatherData = useSelector((state) => state.weather);

  useEffect(() => {
      fetchWeatherData(weatherData.cityName)
          .then((obj) => {
              dispatch(setWeatherData({
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
              }));
          }).catch((err) => {
              console.log(`Error fetching data from the API: ${err}`);
          });
  }, [weatherData.cityName, dispatch]);

  return weatherData;
};