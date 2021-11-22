import { Link } from "react-router-dom";
import ProductSearch from "../../ProductSearch";
import logoimage from "../../../styles/img/logo.png";
import classes from "./Header.module.scss";
import React, { useState } from "react";
import { useDispatch } from "react-redux";

const Header = () => {
  const [searchQuery, setSearchQuery] = useState("");

  const dispatch = useDispatch();
  const searchProducts = (searchQuery) => {
    setSearchQuery(searchQuery);
    dispatch({ type: "SEARCH_PRODUCTS", payload: searchQuery });
  };

  return (
    <div className={classes.header}>
      <div className="header__container row" id={classes.header__container}>
        <div className="header__logo col-2">
          <img src={logoimage} className="img-fluid" alt="logo" id={classes.img_logo} />
        </div>
        <ProductSearch value={searchQuery} setSearchQuery={searchProducts} />
        <div className="header__login col-6" id={classes.header__login}>
          <button type="button" className="btn btn-outline-secondary" id={classes.btn_outline_secondary}>
            <i className="bi bi-basket2-fill"></i> My cart
          </button>
          <Link to="/login">
            <button type="button" className="btn btn-outline-secondary" id={classes.btn_outline_secondary}>
              <i className="bi bi-person-circle"></i> Sign in
            </button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Header;
