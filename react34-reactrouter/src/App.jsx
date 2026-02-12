import './App.css'
import {BrowserRouter as Router, Route, Routes,Link} from 'react-router-dom'
import Home from "./component/Home.jsx";
import About from "./component/About.jsx";
import Contact from "./component/Contact.jsx";
import Team from "./component/Team.jsx";
import NotFound from "./component/NotFound.jsx";
import CurrentLocation from "./component/CurrentLocation.jsx";
import Dashboard from "./component/Dashboard.jsx";


/*
 Routing Enables navigation between different pages or components
 without reloading the entire pages

User Experience
Component Separation
Url Management
*/

/*
* / -> Home
* /about -> About
* /contact -> Contact
* */


function App() {
    return (
        <Router>
            <div className='min-h-screen bg-gray-100'>
                <nav className='bg-blue-600 p-4'>
                    <ul className='flex justify-center space-x-6'>
                        <li> <Link to="/" className='text-white hover:text-red-600 font-medium transition duration-300'>Home</Link> </li>
                        <li><Link to="/about"  className='text-white hover:text-red-600 font-medium transition duration-300'>About</Link></li>
                        <li><Link to="/contact" className='text-white hover:text-red-600 font-medium transition duration-300'>Contact</Link></li>
                        {/*<li><Link to="/team" className='text-white hover:text-red-600 font-medium transition duration-300'>Team</Link></li>*/}
                    </ul>
                </nav>
                <CurrentLocation />
                <div className="container mx-auto py-8">
                    <Routes>
                        <Route path="/" element={<Home />} />
                        <Route path="/about" element={<About />} >
                            {/*  /about/team  */}
                            <Route path="team" element={<Team />} />
                        </Route>
                        <Route path="/contact" element={<Contact />} />
                        <Route path="/dashboard" element={<Dashboard />} />
                        <Route path="*" element={<NotFound />} />
                    </Routes>
                </div>
            </div>
        </Router>
    )
}

export default App
