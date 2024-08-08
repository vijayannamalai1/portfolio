import React from 'react'
import { Element } from 'react-scroll'
import skillimg from '../../assets/skill.jpg'
import LinearProgress from '@mui/material/LinearProgress';
import './SkillContainer.css'

const SkillContainer = () => {
  return (
    <Element className='skillContainer' name='skills'>
   <div className='skillContainer__image'>
    <img src={skillimg} alt='skills'/>
   </div>
   <div className='skillContainer__text'>
    <h2>SKILLSET</h2>
    <div className='skillContainer__skillSet'>
      <h5>React</h5>
      <div className='skillContainer__slider skillContainer__slider1'>
       
      <LinearProgress variant="determinate" value={85} />
      
      </div>
    </div>
    <div className='skillContainer__skillSet'>
      <h5>NodeJS</h5>
      <div className='skillContainer__slider skillContainer__slider2'>
       
      <LinearProgress variant="determinate" value={77} />
      
      </div>
    </div>
    <div className='skillContainer__skillSet'>
      <h5>MangoDB</h5>
      <div className='skillContainer__slider skillContainer__slider3'>
       
      <LinearProgress variant="determinate" value={80} />
      
      </div>
    </div>
    <div className='skillContainer__skillSet'>
      <h5>React Native</h5>
      <div className='skillContainer__slider skillContainer__slider4'>
       
      <LinearProgress variant="determinate" value={65} />
      
      </div>
    </div>
    <div className='skillContainer__skillSet'>
      <h5>Wordpress</h5>
      <div className='skillContainer__slider skillContainer__slider5'>
       
      <LinearProgress variant="determinate" value={76} />
      
      </div>
    </div>
    <div className='skillContainer__skillSet'>
      <h5>Photoshop</h5>
      <div className='skillContainer__slider skillContainer__slider6'>
       
      <LinearProgress variant="determinate" value={70} />
      
      </div>
    </div>
   </div>
    </Element>
  )
}

export default SkillContainer