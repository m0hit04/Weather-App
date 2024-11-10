import { useState, useEffect } from 'react';

export const SettingsModal = ({ isOpen, onClose }) => {
    const [isDarkMode, setIsDarkMode] = useState(
        document.documentElement.classList.contains('dark')
    );

    const toggleDarkMode = () => {
        const newDarkMode = !isDarkMode;
        setIsDarkMode(newDarkMode);
        
        if (newDarkMode) {
            document.documentElement.classList.add('dark');
            localStorage.setItem('theme', 'dark');
        } else {
            document.documentElement.classList.remove('dark');
            localStorage.setItem('theme', 'light');
        }
    };

    useEffect(() => {
        const savedTheme = localStorage.getItem('theme');
        if (savedTheme === 'dark') {
            setIsDarkMode(true);
            document.documentElement.classList.add('dark');
        }
    }, []);

    if (!isOpen) return null;

    return (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
            <div className="bg-white dark:bg-slate-800 rounded-lg p-6 w-96 relative shadow-lg">
                <button 
                    onClick={onClose}
                    className="absolute top-2 right-2 text-slate-500 dark:text-slate-400 hover:text-slate-700 dark:hover:text-slate-300"
                >
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                    </svg>
                </button>

                <h2 className="text-xl font-mono text-slate-700 dark:text-slate-200 mb-4 hover:text-slate-800 dark:hover:text-white">
                    Settings
                </h2>
                
                <div className="flex items-center justify-between">
                    <span className="text-slate-700 dark:text-slate-200">Dark Mode</span>
                    <button
                        onClick={toggleDarkMode}
                        className={`w-12 h-6 rounded-full p-1 transition-colors duration-300 ${
                            isDarkMode ? 'bg-cyan-600' : 'bg-slate-300'
                        }`}
                    >
                        <div className={`w-4 h-4 rounded-full bg-white transform transition-transform duration-300 ${
                            isDarkMode ? 'translate-x-6' : 'translate-x-0'
                        }`} />
                    </button>
                </div>
            </div>
        </div>
    );
}; 