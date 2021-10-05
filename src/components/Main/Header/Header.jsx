import { Link } from "react-router-dom";
const Header = () => {
  return (
    <div className="header">
      <div className="header__container row">
        <div className="header__logo col-4">Logo</div>
        <div className="header__search-form col-4">
          <div className="input-group mb-3">
            <input type="text" class="form-control" placeholder="..." aria-label="Recipient's username" aria-describedby="basic-addon2"></input>
            <span className="input-group-text" id="basic-addon2">
              Search
            </span>
          </div>
        </div>
        <div className="header__login col-4">
          <Link to="/login">
            <button type="button" className="btn btn-outline-secondary">
              Login
            </button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Header;
