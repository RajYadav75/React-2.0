import React from 'react';
import {useNavigate} from "react-router-dom";

function Dashboard() {
    const navigate = useNavigate();
    const handleLogout = () => {
        navigate('/');
    }
    return (
        <div className='flex flex-col items-center justify-center min-h-screen bg-gray-200' >
            <h2 className='text-3xl font-bold text-blue-600 '>Welcome! Component</h2>
            <button className='text-white mt-4 text-lg bg-gray-800 p-4 rounded-3xl' onClick={handleLogout}>Logout</button>
        </div>
    );
}

export default Dashboard;