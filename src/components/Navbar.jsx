const links = [
  { href: "", label: "Hombre" },
  { href: "", label: "Mujer" },
  { href: "", label: "Niños" },
];

export const Navbar = () => {
  return (
    <header className="header">
      <img
        src={
          "https://www.adidas.mx/glass/react/c478798/assets/img/icon-adidas-logo.svg"
        }
        className="header__logo"
        alt="logo"
      />
      <div className="header__nav">
        {links.map(({ label }) => {
          return <h3 key={label}>{label}</h3>;
        })}
      </div>
      <div className="header__buttons">
        <button>Carrito</button>
      </div>
    </header>
  );
};
