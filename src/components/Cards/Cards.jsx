

import React from 'react';
import './Cards.css';




const Cards = ({names,description,image}) => {

    
      
      




  return (

    <div className="card-container mb-5">
      <div className="card-image">
        <img src={image} alt={names} />
      </div>
      <div className="card-content">
        <h2>{names}</h2>
        <p>{description.substring(0, 100)}</p>
      </div>
    </div>
  );
};

export default Cards;
