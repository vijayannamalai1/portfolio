import React, { useState } from 'react'
import Header from './components/Header/Header';
import TopContainer from './components/TopContainer/TopContainer'
import SkillContainer from './components/SkillContainer/SkillContainer';
import ProjectContainer from './components/ProjectContainer/ProjectContainer';
import './App.css'
import ExperienceContainer from './components/ExperienceContainer/ExperienceContainer';
import Contact from './components/Contact/Contact';
import TransitionsModal from './components/Modal/Modal';
import Gallery from './components/Gallery/Gallery';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const App=()=>{
  const [selected, setSelected] = useState("about");
  const [open, setOpen] = useState(false);

  return (
    <div>
      <Header selected={selected} setSelected={setSelected} setOpen={setOpen} />
      <TransitionsModal open={open} setOpen={setOpen} />
      <TopContainer/>
      <SkillContainer/>
      <ProjectContainer/>
      <ExperienceContainer/>
      <Gallery/>
      <Contact/>   
    </div>
  )
}

export default App;