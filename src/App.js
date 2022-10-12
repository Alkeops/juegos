import logo from './logo.svg';
import './App.scss';

function App() {
  return (
    <div className="App">
      <header className="header">
             <img src={"https://www.adidas.mx/glass/react/c478798/assets/img/icon-adidas-logo.svg"} className="header__logo" alt="logo" />
             <div className='header__nav'><h3>Hombre</h3><h3>Mujer</h3><h3>Niños</h3></div>
             <div className="header__buttons"><button>Carrito</button></div>
      </header>
    </div>
  );
}

export default App;
