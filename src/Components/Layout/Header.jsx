import React from "react";
import { NavLink } from "react-router-dom";
const Header = () => {
  return (
    <>
      <header>
        <div className="container">
          
        <NavLink to="/" className="logo-link">
          <h1>VIDEO CALL APP</h1>
        </NavLink>
          <nav>
            <ul>
              <li>
                <NavLink to="/">Home</NavLink>
              </li>
              <li>
                <NavLink to="/about">About</NavLink>
              </li>
              <li>
                <NavLink to="/contact">Contact</NavLink>
              </li>
            </ul>
          </nav>
        </div>
      </header>
    </>
  );
};

export default Header;
