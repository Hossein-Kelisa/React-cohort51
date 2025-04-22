import React from 'react';
import Button from './button.jsx';
import allCategories from './fake-data/all-categories.js';

const ButtonSet = ({ setFilterCards, activeCategory }) => {
  return (
    <div className="button-set">
      {allCategories.map((category, index) => (
        <Button 
          key={index} 
          buttonName={category.replace(/^FAKE:\s*/, '')}  
          setFilterCards={setFilterCards} 
          isActive={activeCategory === category.replace(/^FAKE:\s*/, '')}  // Compare without "FAKE: " prefix
        />
      ))}
    </div>
  );
};

export default ButtonSet;