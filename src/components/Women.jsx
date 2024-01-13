import { useEffect, useState } from "react";
import PropTypes from "prop-types";
import ItemDisplayer from "./ItemDisplayer";
const Women = ({ addToCart }) => {
  const [data, setData] = useState(null);
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetch("https://fakestoreapi.com/products/category/women's clothing", {
      mode: "cors",
    })
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
        <p>A network error was encountered</p>
      </div>
    );
  if (loading)
    return (
      <div>
        <p>Loading data</p>
      </div>
    );
  else
    return (
      <div>
        <p>This is the women section</p>
        <ItemDisplayer addToCart={addToCart} data={data} />
      </div>
    );
};
Women.propTypes = {
  addToCart: PropTypes.func.isRequired,
};
export default Women;
