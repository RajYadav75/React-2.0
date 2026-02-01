import React from 'react';
import ProfileCard from './ProfileCard';

function Header(props) {
    return (
        <header className="header">
            <ProfileCard image={props.imageUrl}/>
            <h2>{props.name}</h2>
            <p>{props.profession}</p>
            <nav>
                <a href="#about">About</a>
                <a href="#projects">Project</a>
                <a href="#contact">Contact</a>
            </nav>
        </header>
    );
}

export default Header;