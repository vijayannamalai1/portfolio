import React, { useState } from 'react';
import { Link } from 'react-scroll';
import "./Header.css";

const Header = ({ selected, setSelected, setOpen }) => {
  const [menuOpen, setMenuOpen] = useState(false);

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  return (
    <div className='header'>
      <div className='header__left'>
        <h1>Develop<span>er</span></h1>
      </div>
      <div className={`header__menuIcon ${menuOpen ? 'open' : ''}`} onClick={toggleMenu}>
        <span className={`header__menuIcon--bar`}></span>
        <span className={`header__menuIcon--bar`}></span>
        <span className={`header__menuIcon--bar`}></span>
      </div>
      <div className={`header__right ${menuOpen ? 'header__right--open' : ''}`}>
        <Link to='about' smooth={true} duration={500} offset={-150}>
          <h4
            className={selected === 'about' ? 'header__right--active' : undefined}
            onClick={() => setSelected('about')}
          >
            About Me
          </h4>
        </Link>
        <Link to='skills' smooth={true} duration={500} offset={-150}>
          <h4 className={selected === 'skills' ? 'header__right--active' : undefined} onClick={() => setSelected('skills')}>
            Skills
          </h4>
        </Link>
        <Link to='projects' smooth={true} duration={500} offset={-130}>
          <h4 className={selected === 'projects' ? 'header__right--active' : undefined} onClick={() => setSelected('projects')}>
            Projects
          </h4>
        </Link>
        <Link to='exp' smooth={true} duration={500} offset={-140}>
          <h4 className={selected === 'exp' ? 'header__right--active' : undefined} onClick={() => setSelected('exp')}>
            Experience
          </h4>
        </Link>
        <Link to='gallery' smooth={true} duration={500}>
          <h4 className={selected === 'gallery' ? 'header__right--active' : undefined} onClick={() => setSelected('gallery')}>
            Gallery
          </h4>
        </Link>
        <Link to='contact' smooth={true} duration={500}>
          <h4 className={selected === 'contact' ? 'header__right--active' : undefined} onClick={() => setSelected('contact')}>
            Contact
          </h4>
        </Link>
        <h4 className='header__rightButton' onClick={() =>{ setMenuOpen(false); setOpen(true); }}>Join with Me</h4>
      </div>
    </div>
  );
}

export default Header;
