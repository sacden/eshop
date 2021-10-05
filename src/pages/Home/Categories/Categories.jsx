import { useDispatch, useSelector } from "react-redux";

const Categories = () => {
  const categories = useSelector((state) => state.categories.categories);

  return (
    <div className="home__categories col-3">
      <ul className="list-group">
        {categories.map((el) => (
          <li className="list-group-item" key={el.id}>
            {el.category}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Categories;
