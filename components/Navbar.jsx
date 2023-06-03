import React, { useState } from 'react';
import Link from 'next/link';
import { AiOutlineShopping } from 'react-icons/ai';
import { useRouter } from 'next/router';

import { Cart } from './';
import { useStateContext } from '../context/StateContext';

const Navbar = () => {
  const { showCart, setShowCart, totalQuantities } = useStateContext();
  const [searchQuery, setSearchQuery] = useState('');
  const router = useRouter();

  const handleSearchInputChange = (event) => {
    setSearchQuery(event.target.value);
  };

  const handleSearchButtonClick = () => {
    // Redirect to the search results page with the search query as a query parameter
    router.push(`/product/${encodeURIComponent(searchQuery)}`);
  };

  return (
    <div className="navbar-container">
      <p className="logo">
        <Link href="/">BookStore</Link>
      </p>

      <div className="search-bar">
        <input type="text" placeholder="Search products..." value={searchQuery} onChange={handleSearchInputChange} />
        <button type="button" className="search-button" onClick={handleSearchButtonClick}>
          Search
        </button>
      </div>

      <button type="button" className="cart-icon" onClick={() => setShowCart(true)}>
        <AiOutlineShopping />
        <span className="cart-item-qty">{totalQuantities}</span>
      </button>

      {showCart && <Cart />}
    </div>
  );
};

export default Navbar;
