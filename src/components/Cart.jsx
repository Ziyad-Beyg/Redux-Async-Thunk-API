import { useDispatch, useSelector } from "react-redux";
import {
  decrement,
  deleteCartItemThunk,
  increment,
  // updateCartItemThunk,
} from "../Store/Cart/CartSlice";

const Cart = () => {
  let cartItems = useSelector((state) => state.cart.cartItems);
  let dispatch = useDispatch();

  // const handleChange = (e, id) => {
  //   dispatch(
  //     updateCartItemThunk({ id, changedItem: { quantity: +e.target.value } })
  //   );
  // };

  return (
    <>
      {cartItems.length > 0 ? (
        <div>
          <div>
            {cartItems.map((item) => (
              <div className="cart-item" key={item.id}>
                <img
                  className="img-fluid"
                  src={item.thumbnail}
                  alt={item.title}
                />
                <div className="description">
                  <p>{item.title}</p>
                  <span>{item.brand}</span>
                  <strong>${item.price}</strong>
                </div>
                {/* <div className="quantity">
                  Quantity
                  <select
                    value={cartItems.quantity}
                    onChange={(e) => handleChange(e, item.id)}
                  >
                    <option value={1}>1</option>
                    <option value={2}>2</option>
                    <option value={3}>3</option>
                  </select>
                </div> */}
                <div>
                  <h3 className="quantityh3">{item.quantity}</h3>
                  <div className="btnDiv">
                    <button
                      className="updateBtn"
                      onClick={() => dispatch(increment(item.id))}
                    >
                      <>+</>
                    </button>
                    <button
                      className="updateBtn"
                      onClick={() => dispatch(decrement(item.id))}
                    >
                      <>-</>
                    </button>
                  </div>
                </div>
                <div className="close">
                  <button
                    className="closeBtn"
                    onClick={() => dispatch(deleteCartItemThunk(item.id))}
                  >
                    X
                  </button>
                </div>
              </div>
            ))}
          </div>
          <h1 className="totalH1">
            Total: $
            {cartItems.reduce(
              (acc, item) => item.price * item.quantity + acc,
              0
            )}
          </h1>
        </div>
      ) : (
        <div className="emptyCartDiv">
          <img
            src="../../public/emptyCart.png"
            alt="EmptyCart"
            className="emptyCartImg"
          />
          <h2 className="emptyCarth2">CART IS EMPTY</h2>
        </div>
      )}
    </>
  );
};

export default Cart;
