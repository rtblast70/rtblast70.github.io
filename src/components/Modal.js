import React from 'react';
import './Modal.css';
import Data from '../data/projects.json';

function Modal(props) {
    const data = Data.projects[props.id];
  return (
      <div className="modal-background">
        <div className="modal">
            <i className="fa-solid fa-xmark" onClick={props.clickEvent} color="black"/>
            <div className="modal-title">
                <h1>{data.title}</h1>
            </div>
            <div className="modal-subtitle">
                <h2>{data.subtitle}</h2>
            </div>
            <div className="modal-body">
                {data.description}
            </div>
            <a className="modal-url" target="_blank" href={data.url}>
                Link
            </a>
        </div>
        </div>
  )
}

export default Modal