import React from 'react';

function About() {
    const name = "Raj Yadav";
    const profession = "Full Stack Developer";
    return (
        <section id='about' className='about-section'>
            <h2>About Me</h2>
            <p>Hello! I am {name}, a passionate {profession}. I love to build real world web app</p>
        </section>
    );
}

export default About;