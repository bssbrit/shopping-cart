import { useParams } from "react-router-dom";
import { useState } from "react";
import DefaultProfile from "./components/Default";
import Men from "./components/Men";
import Women from "./components/Women";
import Cart from "./components/Cart";
import NavBar from "./components/NavBar";
const Shop = () => {
  const { category } = useParams();
  const [cartItems, updateCart] = useState([]); // Correct usage of useState

  function addToCart(item) {
    console.log(cartItems);
    updateCart([...cartItems, item]);
  }
  return (
    <div>
      <NavBar cartItems={cartItems} />
      <p>So, how are you?</p>
      <hr />
      <h2>The profile visited is here:</h2>
      {category === "men" ? (
        <Men addToCart={addToCart} />
      ) : category === "women" ? (
        <Women addToCart={addToCart} />
      ) : category === "cart" ? (
        <Cart cartItems={cartItems} />
      ) : (
        <DefaultProfile />
      )}
    </div>
  );
};

export default Shop;
