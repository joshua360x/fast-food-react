import React from 'react';

export default function SideDropdown({ setSideID }) {
  function handleChange(e) {
    setSideID(e.target.value);
  }

  return <div>
    <select onChange={handleChange}>
      <option value="1">Nice</option>
      <option value="2">Calm</option>
      <option value="3">Big Meal</option>
    </select>
  </div>;
}
