import React from 'react';
import { Button } from './Button';
import '../App.css'
import './Section.css';

const displayVideo = (media) => {
  if (media === 'video') {
    return <video src='/videos/video-2.mp4' autoPlay loop muted />
  }
}

function Section(props) {
  return (
    <div className={`section-container ${props.media} ${props.type}`} >
      {displayVideo(props.media)}
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