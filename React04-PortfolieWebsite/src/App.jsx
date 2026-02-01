import './App.css'

function App() {

  const name = "Raj Yadav";
  const profession = "Full Stack Developer";
  const project = [
    {
      title:"Project One",
      description: "A web application built using React and node",
      link:"#"
    },
    {
      title:"Project Two",
      description: "A web application built using React and Spring",
      link:"#"
    },
    {
      title:"Project Three",
      description: "A web application built using React and Java",
      link:"#"
    },
  ]
  return(
    <div className='app'>
      <header className="header">
        <h2>{name}</h2>
        <p>{profession}</p>
        <nav>
          <a href="#about">About</a>
          <a href="#project">Project</a>
          <a href="#contact">Contact</a>
        </nav>
      </header>

      {/* About Section */}
      <section id='about' className='about-section'>
        <h2>About Me</h2>
        <p>Hello! I am {name}, a passionate {profession}. I love to build real world web app</p>
      </section>

      {/* Project Section */}

      <section className="project-section" id='projects'>
        <h2>Projects</h2>
        <div className='project-list'>
          {project.map((project,index)=>(
            <div className="project-item" key={index}>
              <h3>{project.title}</h3>
              <h3>{project.description}</h3>
              <a href={project.link} target='_blank' rel='noopener noreferrer'>View Project</a>
            </div>
          ))}
        </div>
      </section>

      {/* Contact Section */}
      <section className="contact-section" id='contact'>
        <h2>Contact Me</h2>
        <p>if hyou would like to get in touch, feel free to email</p>
      </section>

      {/* Footer Section */}
      <footer className='footer'>
        <p>2026. All Right Reserverd</p>
      </footer>
    </div>
  )
}

export default App
