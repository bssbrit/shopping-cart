import { Link } from "react-router-dom";

const Popeye = () => {
  return (
    <>
      <p>Hi, I am Popeye! I love to eat Spinach!</p>
      <Link to="/app">Click here to go back</Link>
    </>
  );
};

export default Popeye;
