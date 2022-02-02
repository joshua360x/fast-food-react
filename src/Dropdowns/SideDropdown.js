import React from 'react';

export default function SideDropdown({ setSideID }) {
  function handleChange(e) {
    setSideID(e.target.value);
  }

  return <div>
    <select onChange={handleChange}>
      <option value="1">Greens</option>
      <option value="2">Avacado</option>
      <option value="3">French Fries</option>
    </select>
  </div>;
}
