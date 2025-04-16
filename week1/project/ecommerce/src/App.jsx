import { useState } from 'react'
import './App.css'
import ButtonSet from './ButtonSet.jsx';
import CardSetMain from './CardSetMain.jsx';
import allProducts from './fake-data/all-products.js';

function App() {  //create a main component
  const [filterCards, setFilterCards] = useState(allProducts);  //create a state variable to hold the filtered cards

  const handleFilterCards = (category) => { //function to filter cards based on category
    const filtered = allProducts.filter(card => card.category === category);  //filter the cards based on category
    setFilterCards(filtered); //update the state variable with the filtered cards
  };

  return (
    <main>
    <h1>Products</h1>
    <ButtonSet setFilterCards={handleFilterCards} /> /
    <CardSetMain filterCards={filterCards} /> 
    </main>
  )
}

export default App