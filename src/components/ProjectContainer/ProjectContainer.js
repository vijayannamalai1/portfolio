import React from 'react'
import { Element } from 'react-scroll'
import Project from '../Project/Project'
import './ProjectContainer.css'
const ProjectContainer = () => {

    const projects =[
        {img:'https://i.pinimg.com/originals/bf/82/f6/bf82f6956a32819af48c2572243e8286.jpg',
            title:'Facebook',
            desc:'Facebook is the good social media plateform',
            link:'www.facebook.com'
        },
        {img:'https://i.pinimg.com/originals/bf/82/f6/bf82f6956a32819af48c2572243e8286.jpg',
            title:'Facebook',
            desc:'Facebook is the good social media plateform',
            link:'www.facebook.com'
        },
        {img:'https://i.pinimg.com/originals/bf/82/f6/bf82f6956a32819af48c2572243e8286.jpg',
            title:'Facebook',
            desc:'Facebook is the good social media plateform',
            link:'www.facebook.com'
        },
        {img:'https://i.pinimg.com/originals/bf/82/f6/bf82f6956a32819af48c2572243e8286.jpg',
            title:'Facebook',
            desc:'Facebook is the good social media plateform',
            link:'www.facebook.com'
        },
        {img:'https://i.pinimg.com/originals/bf/82/f6/bf82f6956a32819af48c2572243e8286.jpg',
            title:'Facebook',
            desc:'Facebook is the good social media plateform',
            link:'www.facebook.com'
        },
        {img:'https://i.pinimg.com/originals/bf/82/f6/bf82f6956a32819af48c2572243e8286.jpg',
            title:'Facebook',
            desc:'Facebook is the good social media plateform',
            link:'www.facebook.com'
        }
    ]
  return (
    <Element className='projectContainer' name='projects'>
     <h1>Projects</h1>
     <p>Here are some projects which I done for making lives of people easy</p>
     <div className='projectContainer__projects'>
     {
        projects.map((project,index)=>{
            return (
                <Project key={index} img={project.img} title={project.title} desc={project.desc} link={project.link}/>
            )
        })
     }
     </div>
    </Element>
  )
}

export default ProjectContainer