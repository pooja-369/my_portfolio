
import './App.css'
import Navbar from './components/Navbar'
import HeroSection from './components/HeroSection'
import EducationSection from './components/EducationSection'
import Particle from './components/ParticleBackground'
import { BrowserRouter } from 'react-router-dom'
import SkillSection from './components/SkillsSection'
import ExperienceSection from './components/ExperienceSection'
import Projects from './components/Projects'
import Footer from './components/Footer'
function App() {
  

  return (
    <div className=" bg-slate-950 w-full text-white">
    <BrowserRouter><Navbar/>
  <HeroSection/>
  <SkillSection/>
  <EducationSection/>
  <Projects/>
  <ExperienceSection/>
  <Footer/>
  </BrowserRouter>
    <Particle/>

    </div>

  
  )
}

export default App
