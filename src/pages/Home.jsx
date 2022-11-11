import { useEffect, useState } from "react";
import { getProducts, cargarData } from "../api/products";
import { Banner } from "../components/Banner";
import { Button } from "../components/Button";
import { ItemContainer } from "../components/ItemContainer";
import { AiOutlineShoppingCart } from "react-icons/ai";
import { IconSelector } from "../components/IconSelector";

export const Home = () => {
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    setProducts([]);
    setLoading(true);
    getProducts()
      .then((items) => {
        setProducts(items);
        setLoading(false);
      })
      .catch((e) => console.log(e));
  }, []);

  return (
    <>
      <Banner
        promocion="ÚNETE AL CLUB Y CONSIGUE UN 15% DE DESCUENTO"
        boton="registrate"
        onClick={() => console.log("click en registrate")}
      />
      <main className="content">
        <ItemContainer products={products} loading={loading} />
      </main>
      <Banner
        promocion="ÚNETE AL CLUB Y CONSIGUE UN 35% DE DESCUENTO"
        boton="unete"
        onClick={() => console.log("click en unete")}
      />
    </>
  );
};
