import Home from "../../../pages/Home/Home";
import Login from "../../../pages/Login/Login";
import Registration from "../../../pages/Registration/Registration";
import { Route } from "react-router-dom";
import classes from "./Content.module.scss";

const Content = () => {
  return (
    <div>
      <Route path="/" exact component={Home} />
      <Route path="/login" component={Login} />
      <Route path="/registration" component={Registration} />
    </div>
  );
};

export default Content;
