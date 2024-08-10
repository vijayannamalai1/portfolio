import { IconButton } from '@mui/material'
import React from 'react'
import { Element } from 'react-scroll'
import { Facebook, Instagram, LinkedIn } from '@mui/icons-material';
import './Contact.css'

const Contact = () => {
  return (
    <Element className='contact' name='contact'>
        <h1>Contact</h1>
        <div className='contact__container'>
            <p>
            Email : <span>vijayannamalai55@gmail.com</span>
            </p>
            <p>
                Github Username: <span>@vijayannamalai1</span>
            </p>
            <div className='contact__icons'>
                <a href="https://www.linkedin.com/in/annamalai-elumalai/" target='_blank'  rel="noopener noreferrer">
                    <IconButton>
                        <LinkedIn/>
                    </IconButton>
                </a>
                <a href="https://www.facebook.com/vijay.annamalai.750/"  target='_blank'  rel="noopener noreferrer">
                    <IconButton>
                        <Facebook/>
                    </IconButton>
                </a>
                <a href="https://www.instagram.com/vijayannamalai1/"  target='_blank'  rel="noopener noreferrer">
                    <IconButton>
                        <Instagram/>
                    </IconButton>
                </a>
            </div>
            <div>
            </div>
        </div>
    </Element>
  )
}

export default Contact