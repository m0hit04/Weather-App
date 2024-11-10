import { useState } from 'react';
import {Sidebar} from '../components/Sidebar';
import { useSelector } from 'react-redux';

function Profile() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
  });
  const [message, setMessage] = useState('');
  const { isCollapsed, marginLeft } = useSelector((state) => state.sidebar);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prevData => ({
      ...prevData,
      [name]: value
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setMessage('Profile updated successfully!');
    setTimeout(() => {
      setMessage('');
    }, 3000);
  };

  return (
    <div className="flex">
      <Sidebar />
      <main className={`${marginLeft} grow relative bg-transparent dark:bg-slate-900/30`}>
        <div className="absolute inset-0 bg-[url('/bg.png')] dark:bg-[url('/bg.png')] bg-cover bg-center bg-no-repeat opacity-40 -z-10 dark:opacity-80"></div>
        <div className="relative z-0">
          <div className="flex justify-center items-center min-h-screen p-4 sm:p-6 lg:p-8">
            <div className={`
              w-full transition-all duration-300
              ${isCollapsed 
                ? 'sm:w-10/12 md:w-9/12 lg:w-8/12 xl:w-7/12'
                : 'sm:w-9/12 md:w-8/12 lg:w-7/12 xl:w-6/12' 
              }
              bg-white dark:bg-slate-800 rounded-lg shadow-sm p-4 sm:p-6 md:p-8
            `}>
              <h1 className="text-xl sm:text-2xl font-bold mb-4 sm:mb-6 text-center dark:text-white">Profile Settings</h1>
              
              {message && (
                <div className="bg-green-100 dark:bg-green-900 border border-green-400 text-green-700 dark:text-green-100 px-3 py-2 sm:px-4 sm:py-3 rounded mb-4 text-center">
                  {message}
                </div>
              )}

              <form onSubmit={handleSubmit} className="space-y-4 sm:space-y-5">
                <div>
                  <label htmlFor="name" className="block text-sm font-medium text-gray-700 dark:text-gray-200 mb-1">
                    Name
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    className="mt-1 block w-full px-3 py-2 sm:px-4 sm:py-2.5 rounded-md border border-gray-300 
                    shadow-sm focus:border-cyan-500 focus:ring-1 focus:ring-cyan-500 focus:outline-none
                    text-sm sm:text-base dark:bg-slate-700 dark:border-slate-600 dark:text-white"
                    required
                  />
                </div>

                <div>
                  <label htmlFor="email" className="block text-sm font-medium text-gray-700 dark:text-gray-200 mb-1">
                    Email
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    className="mt-1 block w-full px-3 py-2 sm:px-4 sm:py-2.5 rounded-md border border-gray-300 
                    shadow-sm focus:border-cyan-500 focus:ring-1 focus:ring-cyan-500 focus:outline-none
                    text-sm sm:text-base dark:bg-slate-700 dark:border-slate-600 dark:text-white"
                    required
                  />
                </div>

                <div>
                  <label htmlFor="phone" className="block text-sm font-medium text-gray-700 dark:text-gray-200 mb-1">
                    Phone Number
                  </label>
                  <input
                    type="tel"
                    id="phone"
                    name="phone"
                    value={formData.phone}
                    onChange={handleChange}
                    className="mt-1 block w-full px-3 py-2 sm:px-4 sm:py-2.5 rounded-md border border-gray-300 
                    shadow-sm focus:border-cyan-500 focus:ring-1 focus:ring-cyan-500 focus:outline-none
                    text-sm sm:text-base dark:bg-slate-700 dark:border-slate-600 dark:text-white"
                  />
                </div>

                <button
                  type="submit"
                  className="w-full mt-6 bg-cyan-600 text-white py-2 sm:py-2.5 px-4 rounded-md 
                  hover:bg-cyan-700 focus:outline-none focus:ring-2 focus:ring-cyan-500 focus:ring-offset-2
                  text-sm sm:text-base font-medium transition-colors duration-200 dark:ring-offset-slate-800"
                >
                  Update Profile
                </button>
              </form>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
}

export default Profile;
