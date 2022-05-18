import React, { useEffect, useState } from "react";
import "./header.css";
import { BsPerson, BsBasket3 } from "react-icons/bs";
import { RiMenu2Line, RiCloseLine } from "react-icons/ri";
import { IoSearchOutline } from "react-icons/io5";
import { useAppDispatch, useAppSelector } from "../../hooks/hooks";
import { fetchCategories } from "../../store/categories-action";
import Categories from "../../containers/Categories";
import { categoriesActions } from "../../store/categories-slices";
import { Link } from "react-router-dom";

const Header: React.FC = () => {
  const categoriesList = useAppSelector((state) => state.categories.categories);
  const basketTotalQuantity = useAppSelector(
    (state) => state.basket.total_quantity
  );
  const dispatch = useAppDispatch();
  const [toggleMenu, setToggleMenu] = useState<boolean>(false);
  const [isHovering, setIsHovering] = useState<boolean>(false);

  const selectCategoryHandler = () => {
    dispatch(categoriesActions.pickedCategory(""));
  };

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
                <Categories categoriesList={categoriesList} />
              </div>
            )}
          </div>
          <div className='header__small-logo'>
            <Link to={"/"} className='link'>
              <span onClick={() => selectCategoryHandler()}>
                <p>E</p>
                <p>.com</p>
              </span>
            </Link>
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
          <div>
            <Link
              to={`/users/${"Paul-R"}/basket`}
              className='link header__icons-container header__navbar-menu'>
              <BsBasket3 className='header__icons-size' />
              <p
                onMouseEnter={() => setIsHovering(true)}
                onMouseLeave={() => setIsHovering(false)}>
                Basket({basketTotalQuantity})
              </p>
            </Link>
            {isHovering && (
              <div className='header__navbar-menu_container header__navbar-hover'>
                Hello
              </div>
            )}
          </div>
        </div>
      </div>
      <div className='header__logo'>
        <Link to={"/"} className='link'>
          <span onClick={() => selectCategoryHandler()}>
            <p>E</p>
            <p>.com</p>
          </span>
        </Link>
      </div>
      <div className='header__categories'>
        <Categories categoriesList={categoriesList} />
      </div>
    </div>
  );
};

export default Header;
