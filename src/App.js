import logo from './logo.svg';
import './App.css';
import { useState } from 'react';
import OrderImages from './OrderImages';
import OrderNameInput from './OrderNameInput';
import InstructionsForm from './InstructionsForm';
import InstructionsList from './InstructionsList';

import FoodDropdown from './Dropdowns/FoodDropdown';
import SideDropdown from './Dropdowns/SideDropdown';
import DrinkDropdown from './Dropdowns/DrinkDropdown';

function App() {
  // App() : tracks state for foodId, sideId, drinkId, instructions, and orderName
  const [foodID, setFoodID] = useState(1);
  const [sideID, setSideID] = useState(1);
  const [drinkID, setDrinkID] = useState(1);
  const [orderName, setOrderName] = useState('Average City');
  const [instructions, setInstructions] = useState([
    'cook at 365° F',
    'make sure the food cools for 10 min',
    'eat slowly for taste',
  ]);

  return <div className="App">
    {/* App() : passes state as props correctly to OrderNameInput and OrderImages, InstructionsForm, InstructionsList */}
    <h1>{orderName}</h1>
    <OrderImages foodID={foodID} sideID={sideID} drinkID={drinkID} />
    <FoodDropdown setFoodID={setFoodID} />
    <SideDropdown setSideID={setSideID} />
    <DrinkDropdown setDrinkID={setDrinkID} />
    <InstructionsForm />
    <InstructionsList instructions={instructions} />
  </div>;
}

export default App;
