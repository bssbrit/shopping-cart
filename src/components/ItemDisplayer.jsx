import PropTypes from "prop-types";
const ItemDisplayer = ({ data, addToCart }) => {
  return (
    <div>
      {data.map((element) => (
        <div key={element.id}>
          <p>{element.id}</p>

          <button onClick={() => addToCart(element)}>Add To Cart</button>
        </div>
      ))}
    </div>
  );
};
ItemDisplayer.propTypes = {
  data: PropTypes.array.isRequired,
  addToCart: PropTypes.func.isRequired,
};

export default ItemDisplayer;
