import React from 'react';

function Header() {
    const name = "Raj Yadav";
    const profession = "Full Stack Developer";
    return (
        <header className="header">
            <h2>{name}</h2>
            <p>{profession}</p>
            <nav>
                <a href="#about">About</a>
                <a href="#projects">Project</a>
                <a href="#contact">Contact</a>
            </nav>
        </header>
    );
}

export default Header;