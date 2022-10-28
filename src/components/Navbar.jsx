import { Link, NavLink } from "react-router-dom";

const links = ["Hombre", "Mujer", "Infantil"];

export const Navbar = () => {
  return (
    <header className="header">
      <Link to="/">
        <img
          src={
            "https://www.adidas.mx/glass/react/c478798/assets/img/icon-adidas-logo.svg"
          }
          className="header__logo"
          alt="logo"
        />
      </Link>
      <div className="header__nav">
        {links.map((elemento) => {
          return (
            <NavLink
              style={({ isActive }) => ({
                color: isActive ? "red" : "#000000",
                textDecoration: "none",
              })}
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
