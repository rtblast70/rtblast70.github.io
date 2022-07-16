import React from 'react'
import '../../App.css'
import Section from '../Section';
import Info from '../Info';

function About() {
  return (
      <>
        <Section media='video' type="about" title="About" subtitle="Welcome to my site! Here's a little about me"/>
        <Info />
      </>
  )
}

export default About;