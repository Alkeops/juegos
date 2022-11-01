import { Button } from "../Button";
import "./Banner.scss";

const Banner = ({ promocion, boton, onClick }) => {
  return (
    <div className="banner">
      <div className="banner__content">
        <h2 className="banner__title">{promocion.toUpperCase()}</h2>
        <Button onClick={onClick}>
          {boton.toUpperCase()} {"->"}
        </Button>
      </div>
    </div>
  );
};

export default Banner;
