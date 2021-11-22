import { useDispatch, useSelector } from "react-redux";
import React, { useState } from "react";
import ProductSorting from "../../../components/ProductSorting";

const Products = () => {
  const dispatch = useDispatch();
  const products = useSelector((state) => state.products.products);

  const sortProducts = (sortBy) => {
    switch (sortBy) {
      case "priceMin":
        dispatch({ type: "SORT_PRODUCTS_BY_PRICE_MIN", payload: sortBy });
        break;
      case "priceMax":
        dispatch({ type: "SORT_PRODUCTS_BY_PRICE_MAX", payload: sortBy });
        break;
      case "model":
        dispatch({ type: "SORT_PRODUCTS_BY_MODEL", payload: sortBy });
        break;
      default:
        console.log(sortBy);
        break;
    }
  };

  return (
    <div className="home__product-list col-9 row row-cols-1 row-cols-md-9">
      <ProductSorting
        value=""
        onChange={sortProducts}
        defaultValue="Sort by"
        options={[
          { value: "priceMin", name: "Min. price" },
          { value: "priceMax", name: "Max. price" },
          { value: "model", name: "Name" },
        ]}
      />
      {products.map((product) => (
        <div className="card mb-3  mx-2" style={{ width: "31%" }} key={product.productNumber}>
          <div className="row g-0">
            <div className="col-md-9 ">
              <img src={`${process.env.PUBLIC_URL}/assets/images/phones/${product.photo}`} className="card-img-top " alt={product.model} />

              <div className="card-body">
                <h5 className="card-title">{product.model}</h5>
                <p className="card-text">This is a wider card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.</p>
                <div className="card-xfooter">
                  <span id="h6_green_left"> {product.price},-CZK</span>{" "}
                  <span id="h6_green_right">
                    <button type="button" class="btn btn-outline-success">
                      Add to cart
                    </button>
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default Products;
