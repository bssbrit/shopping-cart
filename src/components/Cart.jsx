import PropTypes from "prop-types";

const Cart = ({ cartItems }) => {
  return (
    <div>
      <p>Here is all the items in your cart</p>

      {cartItems.map((element) => (
        <div key={element.id}>
          <p>{element.id}</p>
        </div>
      ))}
    </div>
  );
};
Cart.propTypes = {
  cartItems: PropTypes.array.isRequired,
};
export default Cart;
