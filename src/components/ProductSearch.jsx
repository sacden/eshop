import classes from "./ProductSearch.module.scss";
import React, { useState } from "react";

const ProductSearch = ({ searchQuery, onChange, setSearchQuery }) => {
  return (
    <div className="header__search-form col-4">
      <div className="input-group mb-3">
        <button className="btn btn-outline-secondary " id={classes.search_dropdown_category} type="button" data-bs-toggle="dropdown" aria-expanded="false">
          Find products
        </button>
        <input
          value={searchQuery}
          onChange={(event) => setSearchQuery(event.target.value)}
          className="form-control"
          id={classes.search_dropdown_input}
          type="text"
          placeholder="Search..."
          aria-label="Recipient's username"
          aria-describedby="basic-addon2"
        ></input>
        <button className="btn btn-outline-secondary" id={classes.search_button} type="button">
          <i className="bi bi-search"></i>
        </button>
      </div>
    </div>
  );
};

export default ProductSearch;
