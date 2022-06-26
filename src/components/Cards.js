import React from 'react';
import CardItem from './CardItem';
import './Cards.css';

function Cards() {
  return (
    <div className='cards'>
        <h1>check this out</h1>
        <div className="cards__container">
            <div className="cards__wrapper">
                <ul className="cards__items">
                    <CardItem src="images/bench.jpeg" text="yoloyoloyolo" label="yolo" path="/"/>
                    <CardItem src="images/img-1.jpeg" text="yoloyoloyolo" label="yolo" path="/"/>
                </ul>
                <ul className="cards__items">
                    <CardItem src="images/bench.jpeg" text="yoloyoloyolo" label="yolo" path="/"/>
                    <CardItem src="images/img-1.jpeg" text="yoloyoloyolo" label="yolo" path="/"/>
                    <CardItem src="images/img-1.jpeg" text="yoloyoloyolo" label="yolo" path="/"/>
                </ul>
            </div>
        </div>

    </div>
  )
}

export default Cards;