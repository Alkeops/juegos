import { Link, NavLink } from "react-router-dom";
import "./Navbar.scss";

const links = ["Hombre", "Mujer", "Infantil"];

export const Navbar = () => {
  return (
    <header className="navbar">
      <Link to="/">
        <img
          src={
            "https://www.adidas.mx/glass/react/c478798/assets/img/icon-adidas-logo.svg"
          }
          className="navbar__logo"
          alt="logo"
        />
      </Link>
      <div className="navbar__nav">
        {links.map((elemento) => {
          return (
            <NavLink
              className={({isActive}) => (isActive ? "navbar__link navbar__link--active" : "navbar__link")}
              to={`/category/${elemento.toLowerCase()}`}
              key={elemento}
            >
              {elemento}
            </NavLink>
          );
        })}
      </div>
      <div className="header__buttons">
        <Link to="/cart">Carrito</Link>
      </div>
      {/*
       <Contador stock={10} onAdd={(cantidad)=>{
        haz algo con la cantidad
      }}/> 
      */}
    </header>
  );
};
