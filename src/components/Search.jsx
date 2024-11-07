export function Search() {
    return (
        <>
            <div className="flex-grow px-28 mx-10">
                <label htmlFor="search" className="mb-2 text-sm font-medium text-gray-900 sr-only dark:text-white">Search</label>
                <div className="relative">
                    <div className="absolute inset-y-0 start-0 flex items-center ps-3 pointer-events-none">
                        <svg className="w-4 h-4 text-gray-500 dark:text-gray-400" aria-hidden="true" fill="none" viewBox="0 0 20 20">
                            <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="m19 19-4-4m0-7A7 7 0 1 1 1 8a7 7 0 0 1 14 0Z" />
                        </svg>
                    </div> 
                    <input type="search" id="search" className="block w-full p-4 ps-10 text-sm text-gray-900  rounded-lg bg-gray-50 dark:bg-gray-200 dark:placeholder-gray-400" placeholder="Search" required />
                    <button type="submit" className="text-white absolute end-2.5 bottom-2.5 bg-cyan-300 hover:bg-blue-800  focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-4 py-2 dark:bg-cyan-500 dark:hover:bg-cyan-700 ">Search</button>
                </div>
            </div>
        </>
    )
}