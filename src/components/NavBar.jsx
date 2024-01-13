import { Link } from "react-router-dom";
import cart from "/cart.svg";
import PropTypes from "prop-types";
const NavBar = ({ cartItems }) => {
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
          <p>{cartItems.length}</p>
        </li>
      </ul>
    </nav>
  );
};
NavBar.propTypes = {
  cartItems: PropTypes.array.isRequired,
};
export default NavBar;
