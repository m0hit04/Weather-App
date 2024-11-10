import { Link } from 'react-router-dom';
import { useNavigate } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';
import { toggleSidebar } from '../store/reducers/sidebarSlice';
import { toggleTheme } from '../store/reducers/globalSlice';
import { useEffect } from 'react';
import { MdDashboard, MdPerson } from 'react-icons/md';

export const Sidebar = () => {
    const navigate = useNavigate();
    const dispatch = useDispatch();
    const { isCollapsed, width } = useSelector(state => state.sidebar);
    const isDarkTheme = useSelector(state => state.global.isDarkTheme);

    useEffect(() => {
        const handleResize = () => {
            if (window.innerWidth < 1024 && !isCollapsed) {
                dispatch(toggleSidebar());
            } else if (window.innerWidth >= 1024 && isCollapsed) {
                dispatch(toggleSidebar());
            }
        };

        window.addEventListener('resize', handleResize);
        // handleResize();
        
        return () => window.removeEventListener('resize', handleResize);
    }, [dispatch, isCollapsed]);

    return (
        <div className={`fixed bg-gray-800 text-white h-screen ${width} transition-all duration-300 flex flex-col z-10`}>
            <div className="flex justify-between p-4">
                {!isCollapsed && (
                    <>
                        <button onClick={() => navigate("/")} className="text-xl font-mono font-medium">
                            Breeze
                        </button>
                        <button 
                            onClick={() => dispatch(toggleSidebar())} 
                            className="text-white hover:bg-gray-700 p-2 rounded"
                        >
                            ←
                        </button>
                    </>
                )}
                {isCollapsed && (
                    <button 
                        onClick={() => dispatch(toggleSidebar())} 
                        className="w-full flex justify-center text-white hover:bg-gray-700 p-2 rounded"
                    >
                        →
                    </button>
                )}
            </div>
            <ul className="space-y-4">
                <li>
                    <Link to="/dashboard" className="flex items-center px-4 py-2 hover:bg-gray-700">
                        <MdDashboard className="text-xl" />
                        {!isCollapsed && <span className="ml-3">Dashboard</span>}
                    </Link>
                </li>
                <li>
                    <Link to="/profile" className="flex items-center px-4 py-2 hover:bg-gray-700">
                        <MdPerson className="text-xl" />
                        {!isCollapsed && <span className="ml-3">Profile</span>}
                    </Link>
                </li>
            </ul>
            {!isCollapsed && (
            <div className="mt-auto p-4">
                <button 
                    onClick={() => dispatch(toggleTheme())} 
                    className="w-full flex items-center justify-between px-4 py-2 hover:bg-gray-700 rounded"
                >
                    <span>Dark Theme</span>
                    <div className={`w-12 h-6 rounded-full p-1 transition-colors duration-300 ${
                        isDarkTheme ? 'bg-blue-600' : 'bg-gray-400'
                    }`}>
                        <div 
                            className={`w-4 h-4 rounded-full bg-white transform transition-transform duration-300 ${
                                isDarkTheme ? 'translate-x-6' : 'translate-x-0'
                            }`}
                            ></div>
                        </div>
                    </button>
                </div>
            )}
        </div>
    );
};
