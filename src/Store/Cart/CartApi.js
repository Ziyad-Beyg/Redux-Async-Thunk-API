import axios from "axios";

export const FetchCart = async () => {
  return await axios.get("http://localhost:6969/cartItems");
};

export const AddToCart = async (item) => {
  return await axios.post("http://localhost:6969/cartItems", item);
};

export const UpdateInCart = async (id, changedItem) => {
  return await axios.patch(
    `http://localhost:6969/cartItems/${id}`,
    changedItem
  );
};

export const DeleteFromCart = async (id) => {
  return await axios.delete(`http://localhost:6969/cartItems/${id}`);
};
