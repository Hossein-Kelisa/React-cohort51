import { useState, useEffect } from 'react'
import './App.css'
import ButtonSet from './components/buttonSet.jsx'
import CardSetMain from './components/cardSetMain.jsx'
import { Routes, Route } from 'react-router-dom'
import ProductDetail from './pages/productDetail.jsx'
import axios from 'axios'

function App() {
  const [products, setProducts] = useState([])
  const [categories, setCategories] = useState([])
  const [activeCategory, setActiveCategory] = useState(null)
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState(null)

  useEffect(() => {
    const fetchData = async () => {
      try {
        setLoading(true)
        const [productsRes, categoriesRes] = await Promise.all([
          axios.get('https://fakestoreapi.com/products'),
          axios.get('https://fakestoreapi.com/products/categories')
        ])
        setProducts(productsRes.data)
        setCategories(categoriesRes.data)
      } catch{
        setError('Failed to load products. Please try again later.')
      } finally {
        setLoading(false)
      }
    }
    fetchData()
  }, [])

  const handleFilter = async (category) => {
    try {
      setLoading(true)
      setActiveCategory(category)
      const url = category 
        ? `https://fakestoreapi.com/products/category/${category}`
        : 'https://fakestoreapi.com/products'
      const response = await axios.get(url)
      setProducts(response.data)
    } catch {
      setError('Failed to filter products. Please try again.')
    } finally {
      setLoading(false)
    }
  }

  return (
    <div className="app">
      <Routes>
        <Route path="/" element={
          <>
            <h1>Our Products</h1>
            {error && <div className="error-message">{error}</div>}
            {loading ? (
              <div className="loading-spinner">Loading...</div>
            ) : (
              <>
                <ButtonSet 
                  categories={categories}
                  onFilter={handleFilter}
                  activeCategory={activeCategory}
                />
                <CardSetMain products={products} />
              </>
            )}
          </>
        } />
        <Route path="/product/:id" element={<ProductDetail />} />
      </Routes>
    </div>
  )
}

export default App