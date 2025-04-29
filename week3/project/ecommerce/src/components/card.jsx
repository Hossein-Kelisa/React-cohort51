import { Link } from 'react-router-dom'

const Card = ({ id, title, price, image }) => {
  return (
    <Link to={`/product/${id}`} className="product-card">
      <img src={image} alt={title} />
      <h3>{title}</h3>
      <p>${price}</p>
    </Link>
  )
}

export default Card