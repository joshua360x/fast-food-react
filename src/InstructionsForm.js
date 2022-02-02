import React, { useState } from 'react';

export default function InstructionsForm({ instructions, setInstructions }) {

  const [inputHandle, setInputHandle] = useState('');
  function submitHandler(e) {
    e.preventDefault();

    setInstructions([...instructions, inputHandle]);
    e.target.reset();
    setInputHandle('');


  }

  function handleInput(e) {
    setInputHandle(e.target.value);
  }
  return <form onSubmit={submitHandler}>
    <label>
      Add Instructions
    </label>
    <input type="text" placeholder='Enter instruction' onChange={handleInput} />
    <button>Submit</button>
  </form>;
}
