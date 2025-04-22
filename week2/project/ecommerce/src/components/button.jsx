const Button = ({ buttonName, onClick, isActive }) => {
  return (
    <button
      onClick={onClick}
      className={`category-button ${isActive ? 'active' : ''}`}
    >
      {buttonName}
    </button>
  )
}

export default Button