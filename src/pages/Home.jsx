import {useNavigate} from "react-router-dom"

export default function Home() {
    const navigate = useNavigate();

    return (
        <>
            <div className="flex bg-slate-700">
                <img className="h-screen" src="/umbrella2.jpg" alt="Umbrella Image" />
                <div className="m-auto">
                    <h2 className="text-white text-5xl font-bold" >Breeze</h2>
                    <p className=" text-slate-400 text-lg p-2 pl-5">Weather App</p>
                    <button onClick={() => navigate("/dashboard")} type="button" className="ml-4 mt-2 text-white bg-gradient-to-r from-teal-400 via-teal-500 to-teal-600 hover:bg-gradient-to-br focus:ring-4 focus:outline-none focus:ring-teal-300 dark:focus:ring-teal-800 font-medium rounded-lg text-sm px-5 py-2.5 text-center me-2 mb-2">Get Started</button>
                </div>
            </div>
        </>
    )
}