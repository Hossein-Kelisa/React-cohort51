import { useState, useEffect } from 'react';

const CategoryList = ({ onFilterProducts }) => {
    const [activeCategory, setActiveCategory] = useState(null);
    const [categories, setCategories] = useState([]);

    const fetchCategories = async () => {
        try {
            const response = await fetch('https://fakestoreapi.com/products/categories');
            const data = await response.json();
            setCategories(data);
        } catch (error) {
            console.error('Error fetching categories:', error);
        }
    };

    useEffect(() => {
        fetchCategories();
    }, []);

    return (
        <div className="button-set">
            {categories.map((category, index) => (
                <button key={index}
                className={"category-list" + (activeCategory === category ? ' active' : '')}
                
                    onClick={() => {
                        onFilterProducts(category);
                        setActiveCategory(category);
                    }}
                >
                    {category}
                </button>
            ))}
        </div>
    );
};




export default CategoryList;