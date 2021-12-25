import React from 'react';
import './Card.css';

const Card = ({img  , name}) => {
    return (
        <div className='p'>
            <div className="p-browser">
                <div className="p-circle"></div>
                <div className="p-circle"></div>
                <div className="p-circle"></div>
            </div>
           <div className="item-container">
           <a href="https://asraful-dev.netlify.app/"
             target='_blank'
             rel="noreferrer">
                 <img  src={img} alt=""  className='="card-img'/>
                 <h6 className="card-name">
                     {name}
                 </h6>
             
             </a>
           </div>
        </div>
    );
};

export default Card;