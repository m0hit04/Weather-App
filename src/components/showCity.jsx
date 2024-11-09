import { FaMapMarkerAlt } from 'react-icons/fa';
import { useSelector } from 'react-redux';

export const WeatherHeader = () => {
  const weatherData = useSelector((state) => state.weather);
  return (
    <div className="flex items-center space-x-2 text-sm text-gray-500 ml-8">
      <FaMapMarkerAlt className="text-lg" />
      <span>Weather in</span>
      <span className="font-bold text-black">{weatherData.cityName}</span>
      <span>/</span>
      <span>{weatherData.description}</span>
    </div>
  );
};
