import Categories from "./Categories/Categories";
import Products from "./Products/Products";
const Home = () => {
  return (
    <div className="home container">
      <div className="home__container row">
        <Categories />
        <Products />
      </div>
    </div>
  );
};

export default Home;
