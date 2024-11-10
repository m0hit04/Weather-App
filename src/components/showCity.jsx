import { FaMapMarkerAlt } from 'react-icons/fa';
import { useSelector } from 'react-redux';

export const WeatherHeader = () => {
  const weatherData = useSelector((state) => state.weather);
  return (
    <div className="flex items-center space-x-2 text-sm text-slate-500 dark:text-slate-400 ml-8">
      <FaMapMarkerAlt className="text-lg text-slate-500 dark:text-orange-500 hover:text-orange-500 dark:hover:text-orange-400 transition-colors duration-300" />
      <span className="hover:text-slate-700 dark:hover:text-slate-300 transition-colors duration-300">Weather in</span>
      <span className="font-bold text-slate-700 dark:text-slate-300 hover:text-slate-800 dark:hover:text-slate-100 transition-colors duration-300">
        {weatherData.cityName}
      </span>
      <span className="text-slate-500 dark:text-slate-400 hover:text-slate-700 dark:hover:text-slate-300 transition-colors duration-300">/</span>
      <span className="text-slate-500 dark:text-slate-400 hover:text-slate-700 dark:hover:text-slate-300 transition-colors duration-300">
        {weatherData.description}
      </span>
    </div>
  );
};
