import React from 'react';
import './ProductList.css';

import img1 from '../photos/boysdress.png';
import img2 from '../photos/girlsdress.png';
import img3 from '../photos/kurti.png'
import img4 from '../photos/mensjeans.png'
import img5 from '../photos/mensshoes.png'
import img6 from '../photos/shopping.png'
import img7 from '../photos/womenshoes.png'
import img8 from '../photos/tops.png'
import img9 from '../photos/mensshoes.png'
import img10 from '../photos/tshirt.png'
import img11 from '../photos/kidsshoes.png'

// import img4 from '../photos/';


const products = [
  {
    id: 1,
    name: 'Classic T-Shirt for Boys',
    category: ' T-Shirts',
    price: '$19.99',
    image: img1,
  },
  {
    id: 2,
    name: 'Blue Denim Jeans for Boys',
    category: 'Jeans',
    price: '$39.99',
    image: img2,
  },
  {
    id: 3,
    name: 'Blue Denim jeans for women',
    category: 'Jeans',
    price: '$49.99',
    image: img3,
  },
  {
    id: 4,
    name: 'Tops for women',
    category: 'Tops',
    price: '$ 20.12',
    image: img4,
  },
  {
    id: 5,
    name: 'Girls Dress',
    category: 'dress',
    price: '$39.34',
    image: img5,
  },
  {
    id: 6,
    name: 'Boys Dress',
    category: 'dress',
    price: '$29.99',
    image: img6,
  },
  {
    id: 7,
    name: 'Mens shoes',
    category: 'shoes',
    price: '$30',
    image: img7,
  },
  {
    id: 8,
    name: 'Womens shoes',
    category: 'shoes',
    price: '$39.99',
    image: img8,
  },
  {
    id: 9,
    name: 'kids shoes',
    category: 'shoes',
    price: '$34.99',
    image: img9,
  },
  {
    id: 10,
    name: 'toys',
    category: 'toys',
    price: '$50',
    image: img10,
  },
  {
    id: 11,
    name: 'kurtes',
    category: 'kurte',
    price: '$15.99',
    image: img11,
  },
  // ...continue with your other products
];

const ProductList = () => {
  return (
    <div className="product-container">
      <h1 className="product-title">Our Products</h1>
      <div className="product-grid">
        {products.map(product => (
          <div key={product.id} className="product-card">
            <img src={product.image} alt={product.name} className="product-img" />
            <h2>{product.name}</h2>
            <p className="category">{product.category}</p>
            <p className="price">{product.price}</p>
            <button className="btn">Add to Cart</button>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ProductList;