import logo from './logo.svg';
import './App.css';
import { useState } from 'react';

function App() {
  // App() : tracks state for foodId, sideId, drinkId, instructions, and orderName
  const [foodID, setFoodID] = useState(1);
  const [sideID, setSideID] = useState(1);
  const [drinkID, setDrinkID] = useState(1);
  const [orderName, setOrderName] = useState('');
  const [instructions, setInstructions] = useState([
    'cook at 365° F',
    'make sure the food cools for 10 min',
    'eat slowly for taste',
  ]);

  return <div className="App"></div>;
}

export default App;
