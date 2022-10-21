import { useEffect, useState } from "react";
import Item from "./Item";
import { getProducts } from "../api/products";
import { Loader } from "./Loader";

const AppContainer = () => {
  //TODO logica de peticiones
  const [productos, setProductos] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    getProducts("coches")
      .then((items) =>{ setProductos(items); setLoading(false); })
      .catch((e) => console.log(e));
  }, []);

  return (
    <div className="products">
      {loading ? <Loader /> : null}
      {productos.map((producto) => {
        return (
          <Item
            key={producto.id}
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

export default AppContainer;
