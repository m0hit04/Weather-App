import { useEffect } from "react";
import { fetchTemperatureData } from "../api/apis";
import { useDispatch, useSelector } from "react-redux";
import { setTemperatureData } from "../store/reducers/temperatureSlice";

function extractTime(unixTimeStamp) {
    const milliseconds = unixTimeStamp * 1000;
    const dateObj = new Date(milliseconds);
    const hours = dateObj.getHours();
    const minutes = dateObj.getMinutes();
    return [hours, minutes];
}

function extractTemperatureData(fiveDay3hourData) {
    const result = [];
  
    for (let i = 0; i < Math.min(8, fiveDay3hourData.list.length); i++) {
      const entry = fiveDay3hourData.list[i];

      const [hours, minutes] = extractTime(entry.dt);
      const time = `${hours}:${minutes < 10 ? '0' + minutes : minutes}`; 
      const temp = entry.main.temp;
  
      result.push({ time, temp });
    }
  
    return result;
  }

export const useFetchTemperature = () => {
    const dispatch = useDispatch();
    const weatherData = useSelector((state) => state.weather);

    useEffect(() => {
        fetchTemperatureData(weatherData.cityName)
            .then((res) => {
                const temperatureData = extractTemperatureData(res);
                dispatch(setTemperatureData(temperatureData));
            });
    }, [weatherData.cityName, dispatch]);
};