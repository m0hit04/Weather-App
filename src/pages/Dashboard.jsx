import { useSelector } from 'react-redux';
import { Sidebar } from '../components/Sidebar';
import Content from '../components/Content';

const Dashboard = () => {
    const { marginLeft } = useSelector(state => state.sidebar);

    return (
        <div className="flex">
            <Sidebar />
            <main className={`${marginLeft} grow px-6 py-3 min-h-screen relative dark:bg-slate-700`}>
                <div className="absolute inset-0 bg-[url('/bg.png')] bg-cover bg-center bg-no-repeat opacity-40 dark:opacity-20 -z-10"></div>
                <div className="relative z-0">
                    <Content />
                </div>
            </main>
        </div>
    );
};

export default Dashboard;