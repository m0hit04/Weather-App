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
                    <svg className="w-4 h-4 text-gray-500" aria-hidden="true" fill="none" viewBox="0 0 20 20">
                        <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="m19 19-4-4m0-7A7 7 0 1 1 1 8a7 7 0 0 1 14 0Z" />
                    </svg>
                </div> 
                <input 
                    onChange={(e) => setCity(e.target.value)}
                    value={city}
                    type="search"
                    id="search"
                    className="block w-full p-2 md:p-4 ps-10 text-sm text-gray-900 rounded-lg bg-gray-50"
                    placeholder="Search city..."
                    onKeyPress={(e) => e.key === 'Enter' && handleSearch()}
                />
                <button 
                    onClick={handleSearch}
                    type="submit" 
                    className="text-white absolute end-2.5 bottom-1 md:bottom-2.5 bg-cyan-300 hover:bg-blue-800 font-medium rounded-lg text-sm px-4 py-1 md:py-2 dark:bg-cyan-500 dark:hover:bg-cyan-700"
                >
                    Search
                </button>
            </div>
        </div>
    )
}