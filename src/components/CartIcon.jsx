import { useSelector } from "react-redux";

const CartIcon = ({ setShowCart }) => {
  let cartItems = useSelector((state) => state.cart.cartItems);
  return (
    <div className="cartIcon" onClick={() => setShowCart(true)}>
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="28"
        height="28"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
        className="lucide lucide-shopping-cart"
      >
        <circle cx="8" cy="21" r="1" />
        <circle cx="19" cy="21" r="1" />
        <path d="M2.05 2.05h2l2.66 12.42a2 2 0 0 0 2 1.58h9.78a2 2 0 0 0 1.95-1.57l1.65-7.43H5.12" />
      </svg>
      <div className="cartBadge">
        <p className="cartNum">{cartItems.length}</p>
      </div>
    </div>
  );
};

export default CartIcon;
