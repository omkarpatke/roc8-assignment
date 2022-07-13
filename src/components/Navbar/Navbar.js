import React from 'react';
import './Navbar.css';

export default function Navbar() {
  return (
    <nav className='navbar'>
        <div className="brand-icon">Flipkart</div>
        <div className="searchBar"><input type="text" className='searchInput'/></div>
        <div className="btns">
            <div className="btn btn-outline-dark">Login</div>
            <div className="btn more-btn">more <i class="bi bi-arrow-down-short"></i> </div>
            <div className="btn cart-btn"><i class="bi bi-cart"></i> Cart </div>
        </div>
    </nav>
  )
}
