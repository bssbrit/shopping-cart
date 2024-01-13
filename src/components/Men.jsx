import { useEffect, useState } from "react";
import ItemDisplayer from "./ItemDisplayer";
const Men = () => {
  const [data, setData] = useState(null);
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetch("https://fakestoreapi.com/products/category/men's clothing", {
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
        <p>Hi this is the men section</p>
        <ItemDisplayer data={data} />
      </div>
    );
};

export default Men;
