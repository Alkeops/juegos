import { useEffect, useState } from "react";
import Item from "./Item";
import { getProducts } from "../api/products";

const AppContainer = () => {
  //TODO logica de peticiones
  const [productos, setProductos] = useState([]);

  useEffect(() => {
    getProducts()
      .then((items) => setProductos(items))
      .catch((e) => console.log(e));
  }, []);

  return (
    <div className="products">
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
