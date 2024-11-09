import { useState } from 'react'
import { useDispatch } from 'react-redux'
import { setCityName } from '../store/reducers/weatherSlice'

export function Search() {
    const [city, setCity] = useState("");
    const dispatch = useDispatch();
    return (
        <>
            <div className="flex-grow px-14">
                <label htmlFor="search" className="mb-2 text-sm font-medium text-gray-900 sr-only dark:text-white">Search</label>
                <div className="relative">
                    <div className="absolute inset-y-0 start-0 flex items-center ps-3 pointer-events-none">
                        <svg className="w-4 h-4 text-gray-500 dark:text-gray-400" aria-hidden="true" fill="none" viewBox="0 0 20 20">
                            <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="m19 19-4-4m0-7A7 7 0 1 1 1 8a7 7 0 0 1 14 0Z" />
                        </svg>
                    </div> 
                    <input onChange={(e) => setCity(e.target.value)} value={city} type="search" id="search" className="block w-full p-4 ps-10 text-sm text-gray-900  rounded-lg bg-gray-50 dark:bg-gray-200 dark:placeholder-gray-400" placeholder="Search" required />
                    <button onClick={() => {
                        setCity("");
                        dispatch(setCityName(city))
                    }} type="submit" className="text-white absolute end-2.5 bottom-2.5 bg-cyan-300 hover:bg-blue-800  focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-4 py-2 dark:bg-cyan-500 dark:hover:bg-cyan-700 ">Search</button>
                </div>
            </div>
        </>
    )
}