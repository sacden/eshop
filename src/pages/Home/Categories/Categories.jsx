import { useDispatch, useSelector } from "react-redux";

const Categories = () => {
  const categories = useSelector((state) => state.categories.categories);

  return (
    <div className="home__categories col-3">
      <ul className="list-group">
        <li className="list-group-item" id="main_menu" key="0">
          <i className="bi bi-list"></i> Menu
        </li>
        {categories.map((el) => (
          <li className="list-group-item" key={el.id}>
            <i className={el.icon}></i> {el.category}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Categories;
