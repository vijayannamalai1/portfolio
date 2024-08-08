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
                <a href="linkedin.com">
                    <IconButton>
                        <LinkedIn/>
                    </IconButton>
                </a>
                <a href="facebook.com">
                    <IconButton>
                        <Facebook/>
                    </IconButton>
                </a>
                <a href="instagram.com">
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