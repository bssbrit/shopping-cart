const ItemDisplayer = ({ data }) => {
  return (
    <div>
      {data.map((element) => (
        <p key={element.id}>{element.id}</p>
      ))}
    </div>
  );
};

export default ItemDisplayer;
