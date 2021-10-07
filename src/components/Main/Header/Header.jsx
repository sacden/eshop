import { Link } from "react-router-dom";
import logoimage from "../../../styles/img/logo.png";
import classes from "./Header.module.scss";

const Header = () => {
  return (
    <div className={classes.header}>
      <div className="header__container row" id={classes.header__container}>
        <div className="header__logo col-2">
          <img src={logoimage} className="img-fluid" alt="logo" id={classes.img_logo} />
        </div>
        <div className="header__search-form col-4">
          <div className="input-group mb-3">
            <button className="btn btn-outline-secondary " id={classes.search_dropdown_category} type="button" data-bs-toggle="dropdown" aria-expanded="false">
              Find products
            </button>
            <input className="form-control" id={classes.search_dropdown_input} type="text" placeholder="Search..." aria-label="Recipient's username" aria-describedby="basic-addon2"></input>
            <button className="btn btn-outline-secondary" id={classes.search_button} type="button">
              <i className="bi bi-search"></i>
            </button>
          </div>
        </div>
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
