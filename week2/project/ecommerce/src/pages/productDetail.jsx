import { useParams } from 'react-router-dom'
import { useState, useEffect } from 'react'
import axios from 'axios'

const ProductDetail = () => {
  const { id } = useParams()
  const [product, setProduct] = useState(null)
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState(null)

  useEffect(() => {
    const fetchProduct = async () => {
      try {
        setLoading(true)
        const response = await axios.get(`https://fakestoreapi.com/products/${id}`)
        setProduct(response.data)
      } catch {
        setError('Failed to load product details. Please try again.')
      } finally {
        setLoading(false)
      }
    }
    fetchProduct()
  }, [id])

  if (loading) return <div className="loading">Loading product details...</div>
  if (error) return <div className="error">{error}</div>
  if (!product) return <div>Product not found</div>

  return (
    <div className="product-detail">
      <img src={product.image} alt={product.title} />
      <h2>{product.title}</h2>
      <p className="price">${product.price}</p>
      <p className="description">{product.description}</p>
      <div className="rating">
        Rating: {product.rating.rate} ({product.rating.count} reviews)
      </div>
    </div>
  )
}

export default ProductDetail