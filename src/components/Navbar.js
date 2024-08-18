import React, { useState } from 'react';
import '../components/Navbar.css';
import { FaShoppingCart } from 'react-icons/fa';
import { Link } from 'react-router-dom';

function Navbar() {
  const [login, setLogin] = useState(true);
  const [txt, setTxt] = useState(" ");

  return (
    <div>
      <div className="navbar">
        <Link to={"/"}><img
          src="https://i.pinimg.com/originals/aa/70/8d/aa708d1f97a04f6f5a208213f89e1e67.png"
          alt="Logo"
          className='flipkartlogo'
        />
        </Link>
        <input
          type="text"
          className='search'
          placeholder='Search your product'
          value={txt}
          onChange={(e) => setTxt(e.target.value)}
        />
        <div className="navend">
          <Link to="/cart">
            <h1><FaShoppingCart /></h1>
          </Link>
          <button
            onClick={() => setLogin(!login)}
            className='btnlogin'
          >
            {login ? "Login" : "Logout"}
          </button>
        </div>
      </div>
    </div>
  );
}
export default Navbar;