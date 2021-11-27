import Home from "../../../pages/Home/Home";
import Login from "../../../pages/Login/Login";
import Registration from "../../../pages/Registration/Registration";
import Product from "../../../pages/Product";
import { useSelector } from "react-redux";
import { Route } from "react-router-dom";
import classes from "./Content.module.scss";

const Content = () => {
  const products = useSelector((state) => state.products.products);
  return (
    <div>
      <Route path="/" exact component={Home} />
      <Route path="/login" component={Login} />
      <Route path="/registration" component={Registration} />
      <Route path="/product/:productId" render={(props) => <Product products={products} {...props} />} />
    </div>
  );
};

export default Content;
