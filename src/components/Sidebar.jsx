import { Link } from 'react-router-dom';
import { useNavigate } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';
import { toggleSidebar } from '../store/reducers/sidebarSlice';
import { useEffect } from 'react';
import { MdDashboard, MdPerson } from 'react-icons/md';

export const Sidebar = () => {
    const navigate = useNavigate();
    const dispatch = useDispatch();
    const { isCollapsed, width } = useSelector(state => state.sidebar);

    useEffect(() => {
        const handleResize = () => {
            if (window.innerWidth < 1024 && !isCollapsed) {
                dispatch(toggleSidebar());
            } else if (window.innerWidth >= 1024 && isCollapsed) {
                dispatch(toggleSidebar());
            }
        };

        window.addEventListener('resize', handleResize);
        
        return () => window.removeEventListener('resize', handleResize);
    }, [dispatch, isCollapsed]);

    return (
        <div className={`fixed bg-slate-800 dark:bg-slate-900 text-white h-screen ${width} transition-all duration-300 flex flex-col z-10`}>
            <div className="flex justify-between p-4">
                {!isCollapsed && (
                    <>
                        <button onClick={() => navigate("/")} className="text-xl font-mono font-medium text-white dark:text-slate-200">
                            Breeze
                        </button>
                        <button 
                            onClick={() => dispatch(toggleSidebar())} 
                            className="text-white dark:text-slate-200 hover:bg-slate-700 dark:hover:bg-slate-800 p-2 rounded"
                        >
                            ←
                        </button>
                    </>
                )}
                {isCollapsed && (
                    <button 
                        onClick={() => dispatch(toggleSidebar())} 
                        className="w-full flex justify-center text-white dark:text-slate-200 hover:bg-slate-700 dark:hover:bg-slate-800 p-2 rounded"
                    >
                        →
                    </button>
                )}
            </div>
            <ul className="space-y-4">
                <li>
                    <Link to="/dashboard" className="flex items-center px-4 py-2 hover:bg-slate-700 dark:hover:bg-slate-800">
                        <MdDashboard className="text-xl text-white dark:text-slate-200" />
                        {!isCollapsed && <span className="ml-3 text-white dark:text-slate-200">Dashboard</span>}
                    </Link>
                </li>
                <li>
                    <Link to="/profile" className="flex items-center px-4 py-2 hover:bg-slate-700 dark:hover:bg-slate-800">
                        <MdPerson className="text-xl text-white dark:text-slate-200" />
                        {!isCollapsed && <span className="ml-3 text-white dark:text-slate-200">Profile</span>}
                    </Link>
                </li>
            </ul>
        </div>
    );
};
