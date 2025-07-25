import React from 'react';
import './ProductList.css';

import img1 from '../photos/boysdress.png';
import img2 from '../photos/girlsdress.png';
import img3 from '../photos/kurti.png';
import img4 from '../photos/mensjeans.png';
import img5 from '../photos/mensshoes.png';
import img6 from '../photos/shopping.png';
import img7 from '../photos/womenshoes.png';
import img8 from '../photos/tops.png';
import img9 from '../photos/mensshoes.png';
import img10 from '../photos/tshirt.png';
import img11 from '../photos/kidsshoes.png';

const products = [
  { id: 1, name: 'Classic T-Shirt for Boys', category: 'T-Shirts', price: '$19.99', image: img10 },
  { id: 2, name: 'Blue Denim Jeans for Boys', category: 'Jeans', price: '$39.99', image: img4 },
  { id: 3, name: 'Blue Denim jeans for women', category: 'Jeans', price: '$49.99', image: img3 },
  { id: 4, name: 'Tops for women', category: 'Tops', price: '$20.12', image: img8 },
  { id: 5, name: 'Girls Dress', category: 'Dress', price: '$39.34', image: img2 },
  { id: 6, name: 'Boys Dress', category: 'Dress', price: '$29.99', image: img1 },
  { id: 7, name: 'Mens Shoes', category: 'Shoes', price: '$30', image: img5 },
  { id: 8, name: 'Womens Shoes', category: 'Shoes', price: '$39.99', image: img7 },
  { id: 9, name: 'Kids Shoes', category: 'Shoes', price: '$34.99', image: img11 },
  { id: 10, name: 'Watches', category: 'Watch', price: '$50', image: img6 },
  { id: 11, name: 'Kurtes', category: 'Kurti', price: '$15.99', image: img3 }
];

const ProductList = () => {
  return (
    <div className="product-container">
      <h1 className="product-title">Our Products</h1>
      <div className="product-grid">
        {products.map(product => (
          <div key={product.id} className="product-card">
            <div className="image-wrap">
              <img src={product.image} alt={product.name} className="product-img" />
              <span className="badge">{product.category}</span>
            </div>
            <div className="product-info">
              <h2>{product.name}</h2>
              <p className="price">{product.price}</p>
            </div>
            <button className="btn">Add to Cart</button>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ProductList;
