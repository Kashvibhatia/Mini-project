
import React from 'react';
import './Home.css';
import kivikSofa from '../images/sofa-image.webp';
import hemnesBed from '../images/bed-frame-image.jpg';
import malmDresser from '../images/dresser-image.webp';
import lackTable from '../images/coffee-table.webp';
import poangArmchair from '../images/armchair-image.jpg';


const Home = () => {
  // Sample data for top 5 bestsellers
  const bestsellers = [
    { id: 1, name: 'Sofa', image: kivikSofa},
    { id: 2, name: 'Bed Frame', image: hemnesBed },
    { id: 3, name: ' Dresser', image: malmDresser },
    { id: 4, name: 'Coffee Table', image: lackTable },
    { id: 5, name: ' Armchair', image: poangArmchair },
  ];

  return (
    <div className="home-container">
      <div className="welcome-message">
        <h1>Welcome to Our IKEA Store!</h1>
        <p>
          Discover a wide variety of furniture, electrical items, and home essentials tailored for your needs. Explore our collection to find the perfect items for your home!
        </p>
      </div>
      <div className="bestsellers">
        <h2>Top 5 Bestsellers</h2>
        <div className="bestseller-list">
          {bestsellers.map(product => (
            <div key={product.id} className="bestseller-item">
              <img src={product.image} alt={product.name} />
              <h3>{product.name}</h3>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Home;

