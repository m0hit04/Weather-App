import { Link } from 'react-router-dom';
import { useNavigate } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';
import { toggleSidebar } from '../store/reducers/sidebarSlice';
import { toggleTheme } from '../store/reducers/globalSlice';

export const Sidebar = () => {
    const navigate = useNavigate();
    const dispatch = useDispatch();
    const { isCollapsed, width } = useSelector(state => state.sidebar);
    const isDarkTheme = useSelector(state => state.global.isDarkTheme);

    return (
        <div className={`fixed bg-gray-800 text-white h-screen ${width} transition-width duration-300 flex flex-col z-10`}>
            <div className="flex justify-between p-4">
                <button onClick={() => navigate("/")} className="text-xl font-mono font-medium">Breeze</button>
                <button 
                    onClick={() => dispatch(toggleSidebar())} 
                    className="text-white"
                >
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
            <div className="mt-auto p-4">
                <button 
                    onClick={() => dispatch(toggleTheme())} 
                    className="w-full flex items-center justify-between px-4 py-2 hover:bg-gray-700 rounded"
                >
                    <span>Dark Theme</span>
                    <div className={`w-12 h-6 flex items-center bg-gray-600 rounded-full p-1 ${isDarkTheme ? 'bg-white' : 'bg-black'}`}>
                        <div 
                            className={`w-4 h-4 rounded-full shadow-md transform duration-300 ease-in-out ${isDarkTheme ? 'translate-x-6 bg-black' : 'bg-white'}`}
                        ></div>
                    </div>
                </button>
            </div>
        </div>
    );
};
