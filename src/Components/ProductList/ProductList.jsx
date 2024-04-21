import React, { useState, useEffect } from 'react';
import './ProductList.css';

const ProductList = () => {
    const [products, setProducts] = useState([]);

    useEffect(() => {
        const fetchProducts = async () => {
            try {
                const response = await fetch('https://fakestoreapi.com/products');
                const data = await response.json();
                setProducts(data); // Update state with fetched products
            } catch (error) {
                console.error("Failed to fetch products:", error);
            }
        };

        fetchProducts();
    }, []);

    return (
        <div>
 <h1 className='Product-heading'>PRODUCTS</h1>
 <div className='main-container'>            
           {products.map((product) => {
               return (
                   <div className='inner-container'>
                   <div key={product.id} className='product-card'>
                       <img src={product.image} alt={product.title} className='image'/>
                       <h5>{product.title}</h5>
                       <p>${product.price}</p>
                       <p>{product.description}</p>
                       <p className='rating'>Rating: {product.rating.rate} (from {product.rating.count} reviews)</p>
                       <p className='rating'>Category: {product.category}</p>
                   </div>
                   </div>
               
               );
           })}
   </div>
        </div>
       
       
    );
}

export default ProductList;