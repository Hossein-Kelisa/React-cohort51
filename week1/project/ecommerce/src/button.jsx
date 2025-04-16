const Button = ({ buttonName, setFilterCards, isActive }) => {
    return (
      <button
        onClick={() => setFilterCards(buttonName)}
        className={isActive ? 'active' : ''}
      >
        {buttonName}
      </button>
    );
  };
  export default Button;