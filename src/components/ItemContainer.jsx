import { useEffect, useState } from "react";
import Item from "./Item";
import { getProducts } from "../api/products";
import { Loader } from "./Loader";
import {useParams} from "react-router-dom";

const ItemContainer = () => {
  const {categoryId} = useParams();
  const [productos, setProductos] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    setProductos([])
    setLoading(true);
    getProducts(categoryId)
      .then((items) =>{ setProductos(items); setLoading(false); })
      .catch((e) => console.log(e));
  }, [categoryId]);

  return (
    <div className="products">
      {loading ? <Loader /> : null}
      {productos.map((producto) => {
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
