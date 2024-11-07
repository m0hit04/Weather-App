// Sidebar.js
import { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';

export const Sidebar = () => {
    const navigate = useNavigate();
    const [isCollapsed, setIsCollapsed] = useState(false);

    return (
        <div className={`bg-gray-800 text-white h-screen ${isCollapsed ? 'w-36' : 'w-56'} transition-width duration-300`}>
            <div className="flex justify-between p-4">
                <button onClick={() => navigate("/")} className="text-xl font-mono font-medium" >Breeze</button>
                <button onClick={() => setIsCollapsed(!isCollapsed)} className="text-white">
                    {isCollapsed ? '→' : '←'}
                </button>
            </div>
            <ul className="space-y-4">
                <li>
                    <Link to="/dashboard" className="flex items-center px-4 py-2 hover:bg-gray-700">
                        {/* <span className={`${isCollapsed ? 'hidden' : 'inline'}`}>Dashboard</span> */}
                        <span className="">Dashboard</span>
                    </Link>
                </li>
                <li>
                    <Link to="/settings" className="flex items-center px-4 py-2 hover:bg-gray-700">
                        {/* <span className={`${isCollapsed ? 'hidden' : 'inline'}`}>Settings</span> */}
                        <span className="">Settings</span>
                    </Link>
                </li>
                <li>
                    <Link to="/profile" className="flex items-center px-4 py-2 hover:bg-gray-700">
                        {/* <span className={`${isCollapsed ? 'hidden' : 'inline'}`}>Profile</span> */}
                        <span className="">Profile</span>
                    </Link>
                </li>
            </ul>
        </div>
    );
};
