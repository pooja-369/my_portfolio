
import './App.css'
import Navbar from './components/Navbar'
import HeroSection from './components/HeroSection'
import EducationSection from './components/EducationSection'
import Particle from './components/ParticleBackground'
import { BrowserRouter } from 'react-router-dom'
function App() {
  

  return (
    <div className=" bg-slate-950 w-full text-white">
    <BrowserRouter><Navbar/>
  <HeroSection/>
  <EducationSection/>
  </BrowserRouter>
    <Particle/>

    </div>

  
  )
}

export default App
