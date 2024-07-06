
import './App.css'
import NavbarSection from './components/Navbar'
import HeroSection from './components/HeroSection'
import EducationSection from './components/EducationSection'
// import Particle from './components/ParticleBackground'
import SkillSection from './components/SkillsSection'
import ExperienceSection from './components/ExperienceSection'
import Projects from './components/Projects'
import Footer from './components/Footer'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

function App() {


  return (
    <div className=" bg-slate-950 w-full text-white">
   
   
    <Router>
       <NavbarSection/>
           <Routes>
             <Route path="#HeroSection" element={<HeroSection/>} />
             <Route path="#EducationSection" element={<EducationSection />} />
             <Route path="#ExperienceSection" element={<ExperienceSection />} />
             <Route path="#SkillsSection" element={<SkillSection />} />
             <Route path="#Projects" element={<Projects/>} />
           </Routes>
       </Router>


  <HeroSection id="HeroSection"/>
  <SkillSection id="SkillsSection" />
  <EducationSection id="ExperienceSection"/>
  <Projects id="Projects"/>
  <ExperienceSection id="ExperienceSection"/>
  <Footer className="bg-black"/>
    {/* <Particle/> */}

    </div>

  
  )
}

export default App
