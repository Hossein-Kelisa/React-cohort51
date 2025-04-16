import { useState } from 'react';
import './App.css';
import ButtonSet from './ButtonSet.jsx';
import CardSetMain from './CardSetMain.jsx';
import allProducts from './fake-data/all-products.js';

function App() {
  const [filterCards, setFilterCards] = useState(allProducts);
  const [activeCategory, setActiveCategory] = useState(null);

  const handleFilterCards = (category) => {
    setActiveCategory(category);  // Set the active category
    const filtered = allProducts.filter(card => card.category === category);  // Filter products based on category
    setFilterCards(filtered);  // Update the displayed products with the filtered ones
  };

  return (
    <main>
      <h1>Products</h1>
      <ButtonSet setFilterCards={handleFilterCards} activeCategory={activeCategory} />
      <CardSetMain filterCards={filterCards} />
    </main>
  );
}

export default App;