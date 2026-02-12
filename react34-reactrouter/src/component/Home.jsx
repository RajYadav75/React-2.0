import React from 'react';
import {useNavigate} from "react-router-dom";

function Home() {
    const navigate = useNavigate();
    const handleLogin = () => {
        //Login Logic
        navigate('/dashboard');
    }
    return (
        <div className='flex flex-col items-center justify-center min-h-screen bg-gray-200' >
            <h2 className='text-3xl font-bold text-blue-600 '>Home Component</h2>
            <p className='text-gray-700 mt-4 text-lg'>Welcome to the Home Page! Explore this site to learn more.</p>
            <button className='text-white mt-4 text-lg bg-gray-800 p-4 rounded-3xl' onClick={handleLogin}>Login</button>
        </div>
    );
}

export default Home;