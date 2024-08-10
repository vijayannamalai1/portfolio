import React from 'react'
import {Element} from 'react-scroll'
import TopContent from '../TopContent/TopContent'
import './TopContainer.css'
const TopContainer = ({setSelected}) => {
  return (
    <Element name='about' className='topContainer'>
    <TopContent setSelected={setSelected}/>
    </Element>
  )
}

export default TopContainer