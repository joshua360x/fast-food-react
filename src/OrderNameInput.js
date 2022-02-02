import React from 'react';

export default function OrderNameInput({ setOrderName }) {
  return <div>
    <input type="text" onChange={e => setOrderName(e.target.value)} placeholder='Name Your Order' />
  </div>;
}
