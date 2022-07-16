import React, { Component , useState} from 'react';
import { Link } from 'react-router-dom';
import Modal from './Modal';


function CardItem(props) {
  const [openModal, setOpenModal] = useState(false);
  const Toggle = () => setOpenModal(!openModal);
  return (
    <>
    {openModal && <Modal id={props.id} clickEvent={Toggle}/>}
    <li className='cards__item'>
        <div className='cards__item__link' onClick={Toggle}>
            <figure className='cards__item__pic-wrap' data-category={props.label}>
                <img src={props.src} alt="Project Image" className='cards__item__img' />
            </figure>
            <div className="cards__item__info">
                <h5 className='cards__item__text'>{props.text}</h5>
                <button className='cards__item__expand' >
                  <i class="fa-solid fa-magnifying-glass"></i>
                </button>
            </div>
        </div>
    </li>
    </>
  );
}

export default CardItem;