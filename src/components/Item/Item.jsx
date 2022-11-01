import { useState } from "react";
import { useNavigate } from "react-router-dom";

import { Tag } from "../Tag";
import "./Item.scss";

const Item = (props) => {
  const navigate = useNavigate();
  return (
    <div className={"item"} onClick={() => navigate(`/product/${props.id}`)}>
      <div className="item__top">
        <img src={props.imagen} alt="zapato" />
        <span className="item__price">{props.precio}</span>
      </div>
      <div className="item__content">
        <span className="item__name">{props.nombre}</span>
        <span className="item__category">{props.categoria}</span>

        <Tag titulo={props.tag} />
      </div>
    </div>
  );
};

export default Item;
