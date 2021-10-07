import { Link } from "react-router-dom";
import logoimage from "../../../styles/img/logo.png";
import classes from "./Header.module.scss";

const Header = () => {
  return (
    <div className="header">
      <div className="header__container row">
        <div className="header__logo col-2">
          <img src={logoimage} className="img-fluid" alt="logo" />
        </div>
        <div className="header__search-form col-4">
          <div className="input-group mb-3">
            <input className="form-control" id={classes.search_dropdown_input} type="text" placeholder="..." aria-label="Recipient's username" aria-describedby="basic-addon2"></input>
            <button className="btn btn-outline-secondary" id={classes.search_button} type="button">
              <i className="bi bi-search"></i>
            </button>
          </div>
        </div>
        <div className="header__login col-4">
          <Link to="/login">
            <button type="button" className="btn btn-outline-secondary">
              Sign in
            </button>
          </Link>
          <button type="button" className="btn btn-outline-secondary">
            <i className="bi bi-basket2-fill"></i>Cart
          </button>
        </div>
      </div>
    </div>
  );
};

export default Header;
