import axios from "axios";

export const fetchWeatherData = async (cityName) => {
    const apiKey = import.meta.env.VITE_API_KEY;
    const apiUrl = import.meta.env.VITE_API_URL;
    
    try {
        const response = await axios.get(`${apiUrl}?q=${cityName}&appid=${apiKey}&units=metric`);
        return response.data;
    } catch (err) {
        console.log(`Error fetching data from the API: ${err}`);
        throw err;
    }
};

