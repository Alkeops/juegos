import { useNavigate } from "react-router-dom";

import { useContext } from "react";

import { Tag } from "../Tag";
import "./Item.scss";
import { useCartContext } from "../../context/cartContext";

const Item = ({ id, precio, imagen, nombre, categoria, tag }) => {
  const navigate = useNavigate();
  const {addProduct} = useCartContext();
  return (
    <div className={"item"} onClick={() => navigate(`/product/${id}`)}>
      <div className="item__top">
        <img src={imagen} alt="zapato" />
        <span className="item__price">{precio}</span>
      </div>
      <div
        className="item__content"
        onClick={() => alert("Presiono contenido")}
      >
        <span className="item__name">{nombre}</span>
        <span className="item__category">{categoria}</span>
        <Tag titulo={tag} />
        <button
          onClick={(e) => {
            e.stopPropagation();
            addProduct({id, nombre, precio, categoria, tag, imagen}, 1)
          }}
        >
          Añadir al carrito
        </button>
      </div>
    </div>
  );
};

export default Item;
