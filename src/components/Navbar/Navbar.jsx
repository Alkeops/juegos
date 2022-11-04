import { Link, NavLink } from "react-router-dom";
import "./Navbar.scss";

import { AiOutlineShoppingCart } from "react-icons/ai";
import { useCartContext } from "../../context/cartContext";

const links = ["Hombre", "Mujer", "Infantil"];

export const Navbar = () => {
  const { cart, getCartQty } = useCartContext();
  console.log({ cart });
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
              className={({ isActive }) =>
                isActive ? "navbar__link navbar__link--active" : "navbar__link"
              }
              to={`/category/${elemento.toLowerCase()}`}
              key={elemento}
            >
              {elemento}
            </NavLink>
          );
        })}
      </div>
      <Link to="/cart" className="navbar__cart">
        <AiOutlineShoppingCart />{" "}
        <span className="navbar__cart-qty">{getCartQty()}</span>
      </Link>
    </header>
  );
};
