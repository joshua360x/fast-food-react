import React from 'react';
import './OrderImage.css';

export default function OrderImages({ foodID, sideID, drinkID }) {
  return <div className='imgForOrder'>
    <img src={`/images/food-${foodID}.jpg`} />
    <img src={`/images/side-${sideID}.jpg`} />
    <img src={`/images/drink-${drinkID}.jpg`} />
  </div>;
}
