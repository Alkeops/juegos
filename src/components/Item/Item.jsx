import { useState } from "react";
import { useNavigate } from "react-router-dom";

import { Tag } from "../Tag";
import "./Item.scss";

const Item = ({ id, precio, imagen, nombre, categoria, tag, onAdd }) => {
  const navigate = useNavigate();
  const [contextMenu, setContextMenu] = useState({
    top: 0,
    left: 0,
    open: false,
  });
  const handleContextMenu = (evt) => {
    evt.preventDefault();
    console.log(evt);
    setContextMenu({
      top: evt.pageY,
      left: evt.pageX,
      open: true,
    });
  };

  return (
    <div
      className={"item"}
      onClick={() => navigate(`/product/${id}`)}
      onContextMenu={handleContextMenu}
    >
      {contextMenu.open ? (
        <div
          onMouseLeave={() => setContextMenu({ top: 0, left: 0, open: false })}
          style={{
            position: "fixed",
            height: 200,
            width: 100,
            background: "white",
            top: contextMenu.top,
            left: contextMenu.left,
            zIndex: 9,
          }}
        >
          <button>Añadir al carrito</button>
        </div>
      ) : null}

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
            onAdd?.({ nombre });
          }}
        >
          Añadir al carrito
        </button>
      </div>
    </div>
  );
};

export default Item;
