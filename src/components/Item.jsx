import Tag from "./Tag";
import { useNavigate } from "react-router-dom";

const Item = (props) => {
  const navigate = useNavigate();
  return (
    <div className="card" onClick={() => navigate(`/product/${props.id}`)}>
      <div className="card__top">
        <img src={props.imagen} alt="zapato" />
        <span className="card__price">{props.precio}</span>
      </div>
      <div className="card__content">
        <span className="card__name">{props.nombre}</span>
        <span className="card__category">{props.categoria}</span>

        <Tag titulo={props.tag} />
      </div>
    </div>
  );
};

export default Item;
