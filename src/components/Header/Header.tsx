import React from "react";
import "./header.css";
import { BsPerson, BsBasket3 } from "react-icons/bs";
import { IoSearchOutline } from "react-icons/io5";

const Header: React.FC = () => {
  return (
    <div className='header section__margin'>
      <div className='header__navbar'>
        <div className='header__navbar-container'>
          <div>toggle box</div>
          <div>Logo</div>
        </div>
        <div className='header__icons'>
          <div className='header__icons-container'>
            <BsPerson className='header__icons-size' />
            <p>Sign In</p>
          </div>
          <div className='header__icons-container'>
            <IoSearchOutline className='header__icons-size' />
            <p>Search</p>
          </div>
          <div className='header__icons-container'>
            <BsBasket3 className='header__icons-size' />
            <p>Basket({0})</p>
          </div>
        </div>
      </div>
      <div className='header__logo'>Logo</div>
    </div>
  );
};

export default Header;
