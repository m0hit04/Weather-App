import { useState } from 'react';

export const SettingsModal = ({ isOpen, onClose }) => {
    const [isDarkMode, setIsDarkMode] = useState(false);

    if (!isOpen) return null;

    return (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
            <div className="bg-white rounded-lg p-6 w-96 relative shadow-lg">
                {/* Close button */}
                <button 
                    onClick={onClose}
                    className="absolute top-2 right-2 text-gray-500 hover:text-gray-700"
                >
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                    </svg>
                </button>

                {/* Modal content */}
                <h2 className="text-xl font-mono text-slate-500 mb-4 hover:text-slate-700">Settings</h2>
                
                {/* Theme toggle */}
                <div className="flex items-center justify-between">
                    <span>Dark Mode</span>
                    <button
                        onClick={() => setIsDarkMode(!isDarkMode)}
                        className={`w-12 h-6 rounded-full p-1 transition-colors duration-300 ${
                            isDarkMode ? 'bg-blue-600' : 'bg-gray-300'
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