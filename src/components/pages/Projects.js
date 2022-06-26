import React from 'react';
import '../../App.css';
import Section from '../Section';
import Cards from '../Cards';

function Projects() {
  return (
    <>
        <Section media="video" type='projects' title="Projects" subtitle="some projects I've worked on" />
        <Cards />
    </>
  )
}

export default Projects;