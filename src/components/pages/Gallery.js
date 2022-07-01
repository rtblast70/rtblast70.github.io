import React from 'react';
import Section from '../Section';
import PhotoGallery from '../PhotoGallery';

function Gallery() {
  return (
    <>
        <Section media="video" type="gallery" title="Gallery" subtitle="Some stuff from my camera roll"/>
        <PhotoGallery />
    </>
  )
}

export default Gallery