import React from 'react';
import Section from '../Section';
import PhotoGallery from '../PhotoGallery';
import Video from '../../videos/cars.mp4';
import './Gallery.css';

function Gallery() {
  return (
    <>
        <video src={Video} autoPlay loop muted />
        <Section type="gallery" title="Gallery" subtitle="Some stuff from my camera roll"/>
        <PhotoGallery />
    </>
  )
}

export default Gallery