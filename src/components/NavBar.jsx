import { Link } from "react-router-dom";
import cart from "/cart.svg";
const NavBar = () => {
  return (
    <nav>
      <ul>
        <li>
          <Link to="/">Home</Link>
        </li>
        <li>
          <Link to="/shop/men">Men</Link>
        </li>
        <li>
          <Link to="/shop/women">Women</Link>
        </li>
        <li>
          <Link to="/shop/cart">
            <img src={cart} alt="cart icon" />
          </Link>
        </li>
      </ul>
    </nav>
  );
};

export default NavBar;
