import { useState } from 'react'
import { useDispatch } from 'react-redux'
import { setCityName } from '../store/reducers/weatherSlice'

export function Search({ onSearchComplete }) {
    const [city, setCity] = useState("");
    const dispatch = useDispatch();

    const handleSearch = () => {
        if (city.trim()) {
            dispatch(setCityName(city));
            setCity("");
            onSearchComplete();
        }
    };

    return (
        <div className="w-full">
            <label htmlFor="search" className="sr-only">Search</label>
            <div className="relative">
                <div className="absolute inset-y-0 start-0 flex items-center ps-3 pointer-events-none">
                    <svg className="w-5 h-5 text-slate-500 dark:text-slate-400" aria-hidden="true" fill="none" viewBox="0 0 20 20">
                        <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="m19 19-4-4m0-7A7 7 0 1 1 1 8a7 7 0 0 1 14 0Z" />
                    </svg>
                </div> 
                <input 
                    onChange={(e) => setCity(e.target.value)}
                    value={city}
                    type="search"
                    id="search"
                    className="block w-full p-2 md:p-4 ps-12 md:ps-14 text-sm text-slate-900 dark:text-slate-100 rounded-lg 
                    bg-slate-50 dark:bg-slate-700 focus:outline-none focus:ring-2 focus:ring-cyan-300 dark:focus:ring-cyan-500 
                    focus:border-transparent"
                    placeholder="Search city..."
                    onKeyPress={(e) => e.key === 'Enter' && handleSearch()}
                />
                <button 
                    onClick={handleSearch}
                    type="submit" 
                    className="text-white absolute end-2.5 bottom-1 md:bottom-2.5 bg-cyan-500 hover:bg-cyan-600 
                    dark:bg-cyan-600 dark:hover:bg-cyan-700 font-medium rounded-lg text-sm px-4 py-1 md:py-2 
                    transition-colors duration-300"
                >
                    Search
                </button>
            </div>
        </div>
    )
}