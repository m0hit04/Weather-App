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
  
    // Loop through the list to extract the first 8 timestamps with temperature
    for (let i = 0; i < Math.min(8, fiveDay3hourData.list.length); i++) {
      const entry = fiveDay3hourData.list[i];
      
      // Extract time in [hours, minutes] format
      const [hours, minutes] = extractTime(entry.dt);
      const time = `${hours}:${minutes < 10 ? '0' + minutes : minutes}`; // Format time as "HH:MM"
  
      // Get the temperature
      const temp = entry.main.temp;
  
      // Push the data in the desired format
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