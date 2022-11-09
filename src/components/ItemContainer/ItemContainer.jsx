import { Item } from "../Item";
import { Loader } from "../Loader/Loader";

const ItemContainer = ({ products, loading }) => {
  return (
    <div className="products">
      {loading && <Loader qty={3} />}
      {products.map((producto) => {
        return <Item {...producto} />;
      })}
    </div>
  );
};

export default ItemContainer;
