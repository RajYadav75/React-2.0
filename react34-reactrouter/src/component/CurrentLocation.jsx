import React from 'react';
import {useLocation} from "react-router-dom";

const CurrentLocation = ()  => {
    const location = useLocation();
    return (
        <div className='flex flex-col items-center justify-center  bg-gray-200'>
            <h1 className='text-3xl font-bold text-blue-600 '>Current Path: {location.pathname}</h1>
        </div>
    );
}

export default CurrentLocation;