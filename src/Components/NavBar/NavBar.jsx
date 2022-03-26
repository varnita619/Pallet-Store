import React from "react";
import "../NavBar/NavBar.css";
import { Link, useNavigate } from "react-router-dom";
import logo from "../../logo.png";
import { useAuthContext } from "../../Context/AuthContext";
import { useCartContext } from "../../Context/CartContext";

function NavBar() {
  const { token, userLogout } = useAuthContext();
  const {state: {cart} } = useCartContext();
  const navigate = useNavigate();
  return (
    <div className="nav-bar">
      <div className="nav-bar_row">
        <div className="nav-bar_section--align-start">
          <button className="nav-bar_action-item">
            <i className="fas fa-bars"></i>
          </button>
          <div className="logo-container">
            <img src={logo} alt="logo" className="logo" />
          </div>
          <Link to="/" className="nav-links">
            Home
          </Link>
          <Link to="/productlisting" className="nav-links">
            Shop
          </Link>
        </div>
        <div className="search-container">
          <input type="text" placeholder="search" className="search" />
        </div>

        <div className="nav-bar_section--align-end">
          <Link to="/login">
            <i className="fas fa-user icon"></i>
          </Link>

          <div className="badge" onClick={()=> navigate('/cart')}>
              {token && <i className="fas fa-shopping-cart icon icons-badge"></i>}
              {token && <span className=" badge-icon-number">{cart?.length}</span>}
          </div>

          <div className="badge">
              {token && <i className="far fa-heart ico icon icons-badge"></i>}
              {token && <span className=" badge-icon-number">0</span>}
          </div>

          <div
            onClick={() => {
              userLogout(), navigate("/logout");
            }}
          >
            {token && <i className="fas fa-sign-out-alt icon"></i>}
          </div>
        </div>
      </div>
    </div>
  );
}

export { NavBar };
