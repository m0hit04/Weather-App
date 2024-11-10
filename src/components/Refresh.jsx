import { useDispatch, useSelector } from 'react-redux';
import { setCityName } from '../store/reducers/weatherSlice';

export function Refresh() {
    const dispatch = useDispatch();
    const currentCity = useSelector(state => state.weather.cityName);

    const handleRefresh = () => {
        if (currentCity) {
            dispatch(setCityName(currentCity));
        }
    };

    return (
        <>
            <button 
                onClick={handleRefresh}
                className="mr-5 text-xl font-mono text-slate-500 dark:text-slate-200 hover:text-slate-700 dark:hover:text-white transition-colors duration-300"
            >
                Refresh
            </button>
        </>
    )
};