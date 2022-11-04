import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import { getProduct } from "../../api/products";
import { Counter } from "../../components/Counter";
import { useCartContext } from "../../context/cartContext";

import "./Detail.scss";

export const Detail = () => {
  const { productId } = useParams();
  const { addProduct } = useCartContext();
  const [product, setProduct] = useState({});

  useEffect(() => {
    getProduct(productId).then((data) => {
      setProduct(data);
    });
  }, [productId]);

  const handleAdd = (qty) => {
    //Id producto
    //Queremos que haga algo
    addProduct(product, qty);
  };

  return (
    <div className="content detail">
      <img src={product.imagen} />
      <div className="detail__info">
        <span className="detail__info-name">{product?.nombre}</span>
        <p className="detail__info-desc">{product?.descripcion}</p>
        <span className="detail__info-category">{product?.categoria}</span>
        <span className="detail__info-price">
          ${product?.precio?.toLocaleString()}
        </span>
        <span className="detail__info-stock">
          ¡Quedan solo {product?.stock} disponibles!
        </span>
        <Counter stock={product?.stock} onAdd={handleAdd} />
      </div>
    </div>
  );
};
