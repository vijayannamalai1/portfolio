import React from 'react'
import { Element } from 'react-scroll'
import './Gallery.css'
import Slider from "react-slick";
import img1 from '../../assets/Jbsoftsystems.jpg'
import img2 from '../../assets/Jbsoftsystems1.jpg'
import img3 from '../../assets/reovolutiongames.jpg'
import img4 from '../../assets/revolutiongames1.jpg'
import img5 from '../../assets/revolutiongames2.jpg'
import img6 from '../../assets/revolutiongamesaward.jpg'
const Gallery = () => {

    const settings = {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 2000,
      };
   
  return (
    <Element className='gallery' name='gallery'>
     <h1>Gallery</h1>
     <div className='gallery__container'>
     <Slider {...settings}>
      <div>
       
          <img src={img1} alt="Slide 1" />
   
      </div>
      <div>
      
          <img src={img2} alt="Slide 2" />
    
      </div>
      <div>
        
          <img src={img3} alt="Slide 3" />
       
      </div>
      <div>
       
          <img src={img4} alt="Slide 4" />
        
      </div>
      <div>
       
          <img src={img5} alt="Slide 5" />
        
      </div>
      <div>
       
       <img src={img6} alt="Slide 5" />
     
   </div>
    </Slider>
     </div>

    </Element>
  )
}

export default Gallery