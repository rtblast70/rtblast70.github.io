import React from 'react';
import '../App.css'
import './Section.css';

function Section(props) {
  return (
    <div className={`section-container ${props.type}`} >
        <h1>{props.title}</h1>
        <p>{props.subtitle}</p>
        
        {/*
        <div className='section-btns'>
            <Button className='btns' buttonStyle='btn--outline' buttonSize='btn--large'>
                yo
            </Button>
            <Button className='btns' buttonStyle='btn--primary' buttonSize='btn--large'>
                ayo
            </Button>
        </div>
        */}
    </div>
  )
}

export default Section;