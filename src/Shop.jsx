import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import DefaultProfile from "./components/Default";
import Men from "./components/Men";
import Women from "./components/Women";
import Cart from "./components/Cart";
import NavBar from "./components/NavBar";
const Shop = () => {
  const { category } = useParams();
  const { cartItems, updateCart } = useState(null);
  function addToCart(item) {
    updateCart((prevCartItems) => [...prevCartItems, item]);
  }
  return (
    <div>
      <NavBar />
      <p>So, how are you?</p>
      <hr />
      <h2>The profile visited is here:</h2>
      {category === "men" ? (
        <Men />
      ) : category === "women" ? (
        <Women />
      ) : category === "cart" ? (
        <Cart />
      ) : (
        <DefaultProfile />
      )}
    </div>
  );
};

export default Shop;
