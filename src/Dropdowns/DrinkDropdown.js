import React from 'react';

export default function DrinkDropdown({ setDrinkID }) {
  
  function handleChange(e) {
    setDrinkID(e.target.value);
  }

  return <div>
    <select onChange={handleChange}>
      <option value="1">Ice Tea</option>
      <option value="2">Peach</option>
      <option value="3">Water</option>
    </select>
  </div>;
}
