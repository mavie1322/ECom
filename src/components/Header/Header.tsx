import React, { useEffect, useState } from "react";
import "./header.css";
import { BsPerson, BsBasket3 } from "react-icons/bs";
import { RiMenu2Line, RiCloseLine } from "react-icons/ri";
import { IoSearchOutline } from "react-icons/io5";
import { useAppDispatch, useAppSelector } from "../../hooks/hooks";
import { fetchCategories } from "../../store/categories-action";

const Header: React.FC = () => {
  const categoriesList = useAppSelector((state) => state.categories.categories);
  const dispatch = useAppDispatch();

  const [toggleMenu, setToggleMenu] = useState<boolean>(false);

  useEffect(() => {
    dispatch(fetchCategories());
  }, [dispatch]);

  return (
    <div className='header section__margin'>
      <div className='header__navbar'>
        <div className='header__navbar-container'>
          <div className='header__navbar-menu'>
            {toggleMenu ? (
              <RiCloseLine
                className='header__navbar-menu_icons'
                color='#000'
                size={27}
                onClick={() => setToggleMenu(false)}
              />
            ) : (
              <RiMenu2Line
                className='header__navbar-menu_icons'
                color='#000'
                size={27}
                onClick={() => setToggleMenu(true)}
              />
            )}
            {toggleMenu && (
              <div className='header__navbar-menu_container scale-up-ver-top'>
                {categoriesList.map((category) => {
                  return (
                    <p key={category.category_name}>{category.category_name}</p>
                  );
                })}
              </div>
            )}
          </div>
          <div className='header__small-logo'>
            <span>
              <p>E</p>
              <p>.com</p>
            </span>
          </div>
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
      <div className='header__logo'>
        <span>
          <p>E</p>
          <p>.com</p>
        </span>
      </div>
      <div className='header__categories'>
        {categoriesList.map((category) => {
          return <p key={category.category_name}>{category.category_name}</p>;
        })}
      </div>
    </div>
  );
};

export default Header;
