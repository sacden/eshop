import { useDispatch, useSelector } from "react-redux";

const Products = () => {
  //const dispatch = useDispatch();
  const products = useSelector((state) => state.products.products);

  return (
    <div className="home__product-list col-9">
      {products.map((product) => (
        <div className="card mb-3" style={{ maxWidth: 540 }} key={product.productNumber}>
          <div className="row g-0">
            <div className="col-md-4">
              <img src={`${process.env.PUBLIC_URL}/assets/images/phones/${product.photo}`} className="img-fluid rounded-start" alt={product.model} />
            </div>
            <div className="col-md-8">
              <div className="card-body">
                <h5 className="card-title">{product.model}</h5>
                <p className="card-text">This is a wider card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.</p>
                <p className="card-text">
                  <small className="text-muted">Price: {product.price},-RUB</small>
                </p>
              </div>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default Products;
