import React from 'react';
import { Button } from './Button';
import { Link } from 'react-router-dom';
import './Footer.css';

function Footer () {
  return (
    <div className='footer-container'>
        <section className='footer-subscription'>
            <p className='footer-subscription-heading'>
                Send me a message! 
            </p>
            <p className='footer-subscription-text'>
                Still testing this
            </p>
            <div className='input-areas'>
                <form>
                    <input type="text" name="text" placeholder="some text" className='footer-input' />
                    <Button buttonStyle='btn--outline'>Send</Button>
                </form>
            </div>
        </section>
        <div className="footer-links">
            <div className="footer-link-wrapper">
                <div className="footer-link-items">
                    <h2>hio there</h2>
                    <Link to="/about">about link</Link>
                    <Link to="/projects">projects link</Link>
                </div>
                <div className="footer-link-items">
                    <h2>hio there</h2>
                    <Link to="/about">about link</Link>
                    <Link to="/projects">projects link</Link>
                </div>
            </div>
            <div className="footer-link-wrapper">
                <div className="footer-link-items">
                    <h2>Navigation</h2>
                    <Link to="/about">About</Link>
                    <Link to="/projects">Projects</Link>
                    <Link to="/gallery">Gallery</Link>
                </div>
                <div className="footer-link-items">
                    <h2>Contact</h2>
                    <Link to="/about">Cell: (510) 378-7955</Link>
                    <Link to="/projects">Email: ryanj.tsai@gmail.com</Link>
                </div>
            </div>
        </div>
        <section className='social-media'>
            <div className='social-media-wrap'>
                <div className='footer-logo'>
                    <Link to='/' className='social-logo'>
                        logo + icon
                    </Link>
                </div>
                <small className='website-rights'>ryantsai copyright!</small>
                <div className='social-icons'>
                    <Link className='social-icon-link facebook' to='/' target='_blank' aria-label='Facebook'>
                        <i class="fa-brands fa-facebook">   </i>
                    </Link>
                    <Link className='social-icon-link instagram' to='https://www.instagram.com/ryantsaii/' target='_blank' aria-label='Instagram'>
                        <i class="fa-brands fa-instagram" />
                    </Link>
                    <Link className='social-icon-link linkedin' to='/' target='_blank' aria-label='LinkedIn'>
                        <i class="fa-brands fa-linkedin" />
                    </Link>
                    <Link className='social-icon-link github' to='/' target='_blank' aria-label='Github'>
                        <i class="fa-brands fa-github" />
                    </Link>
                </div>
            </div>
        </section>
    </div>
  )
}

export default Footer;
