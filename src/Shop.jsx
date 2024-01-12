import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import DefaultProfile from "./components/Default";
import Men from "./components/Men";
import Women from "./components/Women";
import Cart from "./components/Cart";
import NavBar from "./components/NavBar";
const Shop = () => {
  const { category } = useParams();

  const [data, setData] = useState(null);
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetch("https://fakestoreapi.com/products/1", { mode: "cors" })
      .then((response) => {
        if (response.status >= 400) {
          throw new Error("server error");
        }
        return response.json();
      })
      .then((response) => {
        console.log(response);
        setData(response);
      })
      .catch((error) => {
        console.log(error);
        setError(error);
      })
      .finally(() => setLoading(false));
  }, []);

  if (error)
    return (
      <div>
        <NavBar />
        <p>A network error was encountered</p>
      </div>
    );
  if (loading)
    return (
      <div>
        <NavBar />
        <p>Loading data</p>
      </div>
    );
  else
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
