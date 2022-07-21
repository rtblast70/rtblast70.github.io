import React, {useState, useEffect} from 'react';
import { Link } from 'react-router-dom';
import {Button} from './Button';
import './Navbar.css';

function Navbar() {
  const [click, setClick] = useState(0);
  const [button, setButton] = useState(true);

  const handleClick = () => setClick(!click);
  const closeMobileMenu = () => setClick(false);

  const showButton = () => {
    if(window.innerWidth <= 960) {
      setButton(false);
    } else {
      setButton(true);
    }
  };

  useEffect(() => {
    showButton();
  }, []);

  window.addEventListener('resize', showButton);

  return (
    <>
        <nav className="navbar">
                <div className="navbar-container">
                    <Link to="/" className="navbar-logo" onClick={closeMobileMenu}>
                        <h2>Ryan Tsai</h2>
                    </Link>
                    <div className='menu-icon' onClick={handleClick} key='unique'>
                      <i className={click ? 'fa-solid fa-xmark' : 'fa-solid fa-bars'} />
                    </div>
                    <ul className={click ? 'nav-menu active' : 'nav-menu'}>
                      <li className='nav-item'>
                        <Link to="/" className='nav-links' onClick={closeMobileMenu}>
                          Home
                        </Link>
                      </li>
                      <li className='nav-item'>
                        <Link to="/about" className='nav-links' onClick={closeMobileMenu}>
                          About
                        </Link>
                      </li>
                      <li className='nav-item'>
                        <Link to="/projects" className='nav-links' onClick={closeMobileMenu}>
                          Projects
                        </Link>
                      </li>
                      <li className='nav-item'>
                        <Link to="/gallery" className='nav-links' onClick={closeMobileMenu}>
                          Gallery
                        </Link>
                      </li>
                      {/*<li className='nav-item'>
                        <Link to="/signup" className='nav-links-mobile' onClick={closeMobileMenu}>
                          A BUTTON
                        </Link>
                      li>*/}
                    </ul>
                    {/*button && <Button buttonStyle='btn--outline'>A BUTTON</Button>*/}
                </div>
        </nav>
    </>
  )
}

export default Navbar