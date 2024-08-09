import React from 'react';
import './Project.css';

const Project = ({ img, title, desc, link, isActive, onMouseEnter, onMouseLeave }) => {
    return (
        <a href={link} target='_blank'  rel="noopener noreferrer">
            <div 
                className="project"
                onMouseEnter={onMouseEnter} 
                onMouseLeave={onMouseLeave}
            >
                {isActive ? (
                    <div className="project__content">
                        <h4>{title}</h4>
                        <p>{desc}</p>
                    </div>
                ) : (
                    <img src={img} alt={title} />
                )}
            </div>
        </a>
    );
};

export default Project;
