import { Item } from "../Item";
import { Loader } from "../Loader/Loader";

const ItemContainer = ({ products, loading }) => {
  return (
    <div className="products">
      {loading ? <Loader qty={3} /> : null}
      {products.map((producto) => {
        return (
          <Item
            key={producto.id}
            id={producto.id}
            nombre={producto.nombre}
            categoria={producto.categoria}
            tag={producto.tag}
            precio={producto.precio}
            imagen={producto.imagen}
          />
        );
      })}
    </div>
  );
};

export default ItemContainer;
