import React, { useEffect, useRef, useState } from "react";
import "./header.css";
import { BsPerson, BsBasket3 } from "react-icons/bs";
import { RiMenu2Line, RiCloseLine } from "react-icons/ri";
import { IoSearchOutline } from "react-icons/io5";
import { useAppDispatch, useAppSelector } from "../../hooks/hooks";
import { fetchCategories } from "../../store/categories-action";
import Categories from "../../containers/Categories";
import { categoriesActions } from "../../store/categories-slices";
import { Link } from "react-router-dom";
import BasketSubmenu from "../Basket/Submenu/BasketSubmenu";

const Header: React.FC = () => {
  const categoriesList = useAppSelector((state) => state.categories.categories);
  const basketTotalQuantity = useAppSelector(
    (state) => state.basket.total_quantity
  );
  const dispatch = useAppDispatch();
  const [toggleMenu, setToggleMenu] = useState<boolean>(false);
  const [isHoveringBasket, setIsHoveringBasket] = useState<boolean>(false);
  const [isHoveringSignIn, setIsHoveringSignIn] = useState<boolean>(false);
  const [isLoggedIn, setIsLoggedIn] = useState<boolean>(true);
  const signInRef = useRef(null);

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
            {/* show categories menu and logo when the screen size is less than 1050px */}
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
        {/* header icons sign in search and basket */}
        <div className='header__icons'>
          <div
            className='header__icons-container link header__navbar-menu'
            onMouseOver={() => setIsHoveringSignIn(true)}
            onMouseOut={() => setIsHoveringSignIn(false)}>
            <BsPerson className='header__icons-size' />
            {/* if user logged in his name should appear or sign in */}
            <p>Sign In</p>
          </div>
          {isHoveringSignIn && isLoggedIn && (
            <div
              className='header__navbar-menu_container header__sign-hover scale-up-ver-top'
              onMouseOver={() => setIsHoveringSignIn(true)}
              onMouseOut={() => setIsHoveringSignIn(false)}>
              Hello
            </div>
          )}
          <div className='header__icons-container'>
            <IoSearchOutline className='header__icons-size' />
            <p>Search</p>
          </div>
          <div>
            <Link
              to={`/users/${"Paul-R"}/basket`}
              className='link header__icons-container header__navbar-menu'
              onMouseOver={() => setIsHoveringBasket(true)}
              onMouseOut={() => setIsHoveringBasket(false)}>
              <BsBasket3 className='header__icons-size' />
              <p>Basket({basketTotalQuantity})</p>
            </Link>
            {/* show the submenu basket when user hover on the basket icon when the screen width is over 1050px */}
            {isHoveringBasket && (
              <div
                className='header__navbar-menu_container header__basket-hover scale-up-ver-top'
                onMouseOver={() => setIsHoveringBasket(true)}
                onMouseOut={() => setIsHoveringBasket(false)}>
                <BasketSubmenu />
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
