import { useSelector, useDispatch } from "react-redux";
import { addCartItemThunk } from "../Store/Cart/CartSlice";

const ProductCard = () => {
  let products = useSelector((state) => state.product.products);
  let dispatch = useDispatch();
  return (
    <div>
      <div className="parent">
        {products.map((product) => (
          <div className="card" key={product.id}>
            <img
              src={product.thumbnail}
              alt={product.title}
              style={{ width: "100%" }}
            />
            <div className="cardBody">
              <h4>{product.title}</h4>
              <p className="price">${product.price}</p>
              <p className="productDesc">{product.description}</p>
            </div>
            <button onClick={() => dispatch(addCartItemThunk(product))}>
              Add to Cart
            </button>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ProductCard;
