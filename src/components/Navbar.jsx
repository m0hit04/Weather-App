import {useNavigate} from "react-router-dom"
import { Search } from "./Search";
import { Refresh } from "./Refresh";
import { Settings } from "./Settings";
import { WeatherHeader } from "./showCity";
import { useState } from 'react';
import { SettingsModal } from './SettingsModal';
import { BiSearch } from 'react-icons/bi';

export const Navbar = () => {
    const navigate = useNavigate();
    const [isSettingsOpen, setIsSettingsOpen] = useState(false);
    const [isSearchOpen, setIsSearchOpen] = useState(false);

    return (
        <>
            <div className="flex justify-between items-center h-18 pb-2 border-b border-neutral-300">
                <button onClick={() => navigate("/")} className="hidden lg:block text-xl font-mono text-slate-500 hover:text-slate-700">
                    Home
                </button>
                <WeatherHeader />
                
                <div className="flex-grow flex items-center justify-end">
                    <button 
                        className="px-4 flex items-center lg:hidden"
                        onClick={() => setIsSearchOpen(!isSearchOpen)}
                    >
                        <BiSearch className="w-6 h-6 text-gray-600" />
                    </button>
                    <div className="hidden xl:block">
                        <Search />
                    </div>
                </div>

                <div className="hidden lg:flex mr-5 justify-center items-center">
                    <Refresh />
                    <Settings onClick={() => setIsSettingsOpen(true)} />
                </div>
            </div>
            
            {isSearchOpen && (
                <div className="lg:hidden absolute top-0 left-0 w-full bg-white z-10 p-4">
                    <div className="flex items-center">
                        <button 
                            className="mr-4"
                            onClick={() => setIsSearchOpen(false)}
                        >
                            ✕
                        </button>
                        <Search onSearchComplete={() => setIsSearchOpen(false)} />
                    </div>
                </div>
            )}
            
            <SettingsModal 
                isOpen={isSettingsOpen}
                onClose={() => setIsSettingsOpen(false)}
            />
        </>
    )
}
