import React from 'react';

export default function FoodDropdown({ setFoodID }) {

  function handleChange(e) {
    setFoodID(e.target.value);
  }
  return <div>
    <select onChange={handleChange}>
      <option value="1">Salmon</option>
      <option value="2">Cake</option>
      <option value="3">Pancakes</option>
    </select>
  </div>;
}
