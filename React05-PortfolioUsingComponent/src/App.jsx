import './App.css'
import Header from "./component/Header.jsx";
import About from "./component/About.jsx";
import Contact from "./component/Contact.jsx";
import ProjectList from "./component/ProjectList.jsx";
import Footer from "./component/Footer.jsx";

function App() {


    return (
        <div className='app'>
            <Header />
            <About />
            <ProjectList/>
            <Contact />
            <Footer />
        </div>
    )
}

export default App
