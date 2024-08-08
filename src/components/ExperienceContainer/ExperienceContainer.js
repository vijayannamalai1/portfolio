import React from 'react'
import { Element } from 'react-scroll'
import Experience from '../ExperienceBox/Experience'
import './ExperienceContainer.css'

const ExperienceContainer = () => {
  return (
  <Element className='experienceContainer' name='exp'>
    <h1>Experience</h1>
    <div className='experienceContainer__info'>
        <Experience number={'+10'} title={'Clients'} style={{}}/>
        <Experience number={'35+'} title={'Projects'} style={{backgroundColor:"#f64c08"}}/>
        <Experience number={'2+'} title={'Years Experience'}/>
        <Experience number={'45+'} title={'Skills acquired'}/>
    </div>
  </Element>
  )
}

export default ExperienceContainer