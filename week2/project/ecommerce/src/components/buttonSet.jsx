import Button from './button.jsx'

const ButtonSet = ({ categories, onFilter, activeCategory }) => {
  return (
    <div className="button-set">
      <Button 
        buttonName="All" 
        onClick={() => onFilter(null)}
        isActive={activeCategory === null}
      />
      {categories.map((category, index) => (
        <Button
          key={index}
          buttonName={category}
          onClick={() => onFilter(category)}
          isActive={activeCategory === category}
        />
      ))}
    </div>
  )
}

export default ButtonSet