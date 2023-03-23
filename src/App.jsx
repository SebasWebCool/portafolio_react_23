import { useState } from 'react'
import AboutMe from './components/AboutMe'
import Contacts from './components/Contacts'
import Footer from './components/Footer'
import Home from './components/Home/Home'
import Navbar from './components/Home/Navbar'
import Sidebar from './components/Home/Sidebar'
import Projects from './components/projects/projects'
import Skills from './components/Skills/skills'
import './style/hover/hover.css'
import'./style/icons/icons.css'
function App() {
  const [count, setCount] = useState(0)

  return (
    <div className="App">
    <Navbar/>
    <Sidebar/>
    <Home/>

    <AboutMe/>
    <Skills/>
    <Projects/>

    <Contacts/>
    <Footer/>
    </div>
  )
}

export default App
