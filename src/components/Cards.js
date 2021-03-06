import React, { useState } from 'react';
import CardItem from './CardItem';
import './Cards.css';

function Cards(props) {
    

    return (
        
        <div className='cards'>
            <h1>{props.title}</h1>
            <div className="cards__container">
                <div className="cards__wrapper">
                    <ul className="cards__items">
                        <CardItem id="0" src="images/codeworkout.jpg" text="CodeWorkout" label="Ruby on Rails, Docker" />
                        <CardItem id="1" src="images/shport.jpg" text="ESPN Scraper" label="React.js, Cheerio" path="/"/>
                    </ul>
                    <ul className="cards__items">
                        <CardItem id="2" src="images/tt.jpg" text="Theta Tau Website" label="React.Js" path="/"/>
                        <CardItem id="3" src="images/compression.jpg" text="File Compression" label="Python" path="/"/>
                        <CardItem id="4" src="images/machine_learning_project.jpg" text="Machine Learning Report" label="Report" path="/"/>
                    </ul>
                </div>
            </div>
        </div>
    )
}

export default Cards;