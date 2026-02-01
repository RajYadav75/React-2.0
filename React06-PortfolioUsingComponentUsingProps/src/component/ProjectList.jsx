import React from 'react';

function ProjectList() {
    const project = [
        {
            title: "Project One",
            description: "A web application built using React and node",
            link: "#"
        },
        {
            title: "Project Two",
            description: "A web application built using React and Spring",
            link: "#"
        },
        {
            title: "Project Three",
            description: "A web application built using React and Java",
            link: "#"
        },
    ]
    return (
        <section className="project-section" id='projects'>
            <h2>Projects</h2>
            <div className='project-list'>
                {project.map((project, index) => (
                    <div className="project-item" key={index}>
                        <h3>{project.title}</h3>
                        <h3>{project.description}</h3>
                        <a href={project.link} target='_blank' rel='noopener noreferrer'>View Project</a>
                    </div>
                ))}
            </div>
        </section>
    );
}

export default ProjectList;