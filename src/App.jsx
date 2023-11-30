import "./App.css";
import ProductCard from "./components/ProductCard";
import { useDispatch, useSelector } from "react-redux";
import { tailChase } from "ldrs";
import { useEffect, useState } from "react";
import { getProductsThunk } from "./Store/Products/ProductSlice";
import CartIcon from "./components/CartIcon";
import Cart from "./components/Cart";

function App() {
  tailChase.register();
  let loading = useSelector((state) => state.product.status);
  let dispatch = useDispatch();
  useEffect(() => {
    setTimeout(() => {
      dispatch(getProductsThunk());
    });
  }, []);

  const [showCart, setShowCart] = useState(false);

  return (
    <div className="container">
      <div className="header">
        <div>
          {showCart ? (
            <div className="backBtn" onClick={() => setShowCart(false)}>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
                className="lucide lucide-move-left"
              >
                <path d="M6 8L2 12L6 16" />
                <path d="M2 12H22" />
              </svg>
            </div>
          ) : null}
        </div>
        <h1 className="headerH1"> {!showCart ? "PRODUCTS" : "CART"}</h1>
        <CartIcon setShowCart={setShowCart} />
      </div>

      {showCart ? (
        <Cart />
      ) : (
        <div>
          {loading == "loading" ? (
            <div style={{ position: "absolute", top: "50%", left: "45%" }}>
              <l-tail-chase size="40" speed="1.75" color="black"></l-tail-chase>
            </div>
          ) : (
            <ProductCard />
          )}
        </div>
      )}
    </div>
  );
}

export default App;
