import Card from './card.jsx'

const CardSetMain = ({ products }) => {
  return (
    <div className="card-grid">
      {products.map((product) => (
        <Card 
          key={product.id}
          id={product.id}
          title={product.title}
          price={product.price}
          image={product.image}
        />
      ))}
    </div>
  )
}

export default CardSetMain