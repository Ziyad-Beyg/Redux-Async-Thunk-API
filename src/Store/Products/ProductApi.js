import axios from "axios";

export const FetchProducts = async () => {
  return await axios.get("http://localhost:6969/products");
};
