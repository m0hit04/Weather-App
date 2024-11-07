import Content from "../components/Content";
import { Sidebar } from "../components/Sidebar";

const Dashboard = () => {
    return (
        <>
            <div className="flex">
                <Sidebar />
                <main className="flex-grow px-6 py-3 bg-gray-100 min-h-screen">
                    <Content />
                </main>
            </div>
        </>
    )
}

export default Dashboard;