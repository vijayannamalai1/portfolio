import React, { useState } from 'react';
import { Element } from 'react-scroll';
import Project from '../Project/Project';
import './ProjectContainer.css';
import cartapp from '../../assets/cartapp.png';
import responsivesite from  '../../assets/responsivesite.png';
import quizapp from '../../assets/quizapp.png';
import productapp from '../../assets/productapp.png';
import searchapp from '../../assets/searchapp.png';
import tributeapp from '../../assets/tributeapp.png';

const ProjectContainer = () => {
    const [activeIndex, setActiveIndex] = useState(null);

    const projects = [
        { img: cartapp, title: 'Shopping Cart App', 
            desc: 'This app is used to calculate the total amount for ordered products. Developed using a dummy API.', 
            link: 'https://www.vijayannamalai.com/cartapp' },
        { img: productapp, title: 'Product App', 
            desc: 'An app for CRUD operations on products. It is a full-stack MERN app with image uploading functionalities.', 
            link: 'https://www.vijayannamalai.com/product_app' },
        { img: searchapp, title: 'Employee App', 
            desc: 'An app to display employee details, including search functionalities. Built using React.', 
            link: 'https://www.vijayannamalai.com/searching_app' },
        { img: tributeapp, title: 'Tribute Page', 
            desc: 'A tribute webpage dedicated to the Late A.P.J. Abdul Kalam Sir. A simple responsive site built with Bootstrap.', 
            link: 'https://www.vijayannamalai.com/web' },
        { img: quizapp, title: 'Simple Quiz App', 
            desc: 'An app where users answer questions and receive their scores. Built using HTML, CSS, and JavaScript.', 
            link: 'https://www.vijayannamalai.com/quizapp' },
        { img: responsivesite, title: 'Food Website', 
            desc: 'A static food website with a responsive design, created without using Bootstrap. Built with HTML, CSS, and JavaScript.', 
            link: 'https://www.vijayannamalai.com/responsivewebsite' }
    ];

    return (
        <Element className="projectContainer" name="projects">
            <h1>Projects</h1>
            <p>Here are some projects which I have done</p>
            <div className="projectContainer__projects">
                {projects.map((project, index) => (
                    <Project
                        key={index}
                        img={project.img}
                        title={project.title}
                        desc={project.desc}
                        link={project.link}
                        isActive={activeIndex === index}
                        onMouseEnter={() => setActiveIndex(index)}
                        onMouseLeave={() => setActiveIndex(null)}
                    />
                ))}
            </div>
        </Element>
    );
};

export default ProjectContainer;
