import {useNavigate} from "react-router-dom"
import { Search } from "./Search";
import { Refresh } from "./Refresh";
import { Settings } from "./Settings";
import { WeatherHeader } from "./showCity";
export const Navbar = () => {
    const navigate = useNavigate();
    return (
        <>
            <div className="flex justify-between h-18 pb-2 border-b border-neutral-300">
                <button onClick={() => navigate("/")} className="text-xl font-mono text-slate-500">Home</button>
                <WeatherHeader />
                <Search />
                <div className="flex mr-5 justify-center items-center">
                    <Refresh />
                    <Settings />
                </div>
            </div>
        </>
    )
}
