const Product = ({ match, products }) => {
  const productId = match.params.productId;
  const getProductById = (id) => {
    return products.find((product) => product.id.toString() === id);
  };
  const product = getProductById(productId);
  return (
    <div className="product">
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
    </div>
  );
};

export default Product;
