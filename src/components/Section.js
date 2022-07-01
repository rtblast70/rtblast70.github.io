import React from 'react';
import { Button } from './Button';
import '../App.css'
import './Section.css';

const displayVideo = (media, src) => {
  if (media === 'video') {
    return <video src='/videos/cars.mp4' autoPlay loop muted />
  }
}

function Section(props) {
  return (
    <div className={`section-container ${props.type} ${props.media}`} >
      {displayVideo(props.media, props.src)}
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