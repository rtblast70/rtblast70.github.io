import React from 'react';
import { Button } from './Button';
import { Link } from 'react-router-dom';
import './Footer.css';

function Footer () {
    const copy = () => navigator.clipboard.writeText(this.state.textToCopy);
  return (
    <div className='footer-container'>
        <div className="footer-links">
            <div className="footer-link-wrapper">
                <div className="footer-link-items">
                    <h2>Navigation</h2>
                    <Link to="/">Home</Link>
                    <Link to="/about">About</Link>
                    <Link to="/projects">Projects</Link>
                    <Link to="/gallery">Gallery</Link>
                </div>
                <div className="footer-link-items">
                    <h2>Contact</h2>
                    <p onClick={copy}>(510) 378-7955</p>
                    <p >ryanj.tsai@gmail.com</p>
                </div>
            </div>
        </div>
        <section className='social-media'>
            <div className='social-media-wrap'>
                <small className='website-rights'>Created by Ryan Tsai :)</small>
                <small className='website-rights'>Built with React.js and deployed with AWS</small>
                <div className='social-icons'>
                    <a className='social-icon-link facebook' href='https://www.facebook.com/ryan.tsai.792' target='_blank' aria-label='Facebook'>
                        <i className="fa-brands fa-facebook">   </i>
                    </a>
                    <a className='social-icon-link instagram' href='https://www.instagram.com/ryantsaii/' target='_blank' aria-label='Instagram'>
                        <i className="fa-brands fa-instagram" />
                    </a>
                    <a className='social-icon-link linkedin' href='https://www.linkedin.com/in/ryanj-tsai/' target='_blank' aria-label='LinkedIn'>
                        <i className="fa-brands fa-linkedin" />
                    </a>
                    <a className='social-icon-link github' href='https://github.com/rtblast70' target='_blank' aria-label='Github'>
                        <i className="fa-brands fa-github" />
                    </a>
                </div>
            </div>
        </section>
    </div>
  )
}

export default Footer;
