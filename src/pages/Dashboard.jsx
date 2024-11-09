import { useSelector } from 'react-redux';
import { Sidebar } from '../components/Sidebar';
import Content from '../components/Content';

const Dashboard = () => {
    const { marginLeft } = useSelector(state => state.sidebar);

    return (
        <div className="flex">
            <Sidebar />
            <main className={`${marginLeft} grow px-6 py-3 bg-gray-100 min-h-screen`}>
                <Content />
            </main>
        </div>
    );
};

export default Dashboard;