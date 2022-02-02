import React from 'react';

export default function OrderImages({ foodID, sideID, drinkID }) {
  return <div>
    <img src={`/images/food-${foodID}`} />
    <img src={`/images/side-${sideID}`} />
    <img src={`/images/drink-${drinkID}`} />
  </div>;
}
