import React from 'react';
import {Outlet} from "react-router-dom";

function About() {
    return (
        <div className='flex flex-col items-center justify-center min-h-screen bg-gray-200' >
            <h2 className='text-3xl font-bold text-blue-600 '>About Component</h2>
            <p className='text-gray-700 mt-4 text-lg'>Welcome to the About Page! This page provides information about us. Learn more about out mission,value.</p>
            <div className='mt-8 w-full max-w-4xl'>
                <Outlet/>
            </div>
        </div>
    );
}

export default About;