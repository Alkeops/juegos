import './styles/App.scss';


function App() {
 const precio = 20;
  return (
    <div className="App">
      <header className="header">
        <img src={"https://www.adidas.mx/glass/react/c478798/assets/img/icon-adidas-logo.svg"} className="header__logo" alt="logo" />
        <div className='header__nav'><h3>Hombre</h3><h3>Mujer</h3><h3>Niños</h3></div>
        <div className="header__buttons"><button>Carrito</button></div> 
      </header>
      <main className="products">
        <div className="card">
             <span className="card__name">Zapato deportivo</span>
             <p className="card__description">Lorem ipsum dolor, sit amet consectetur adipisicing elit. Earum distinctio error voluptas? Quidem alias ratione, deleniti cum nisi eos soluta?</p>
             <span className="card__price">{precio}</span>
             <span className="card__stock">Quedan 5</span>
        </div>
        <div className="card">
             <span className="card__name">Zapato deportivo 1</span>
             <p className="card__description">Lorem ipsum dolor, sit amet consectetur adipisicing elit. Earum distinctio error voluptas? Quidem alias ratione, deleniti cum nisi eos soluta?</p>
             <span className="card__price">$75</span>
             <span className="card__stock">Quedan 5</span>
        </div>
        <div className="card">
             <span className="card__name">Zapato deportivo 2</span>
             <p className="card__description">Lorem ipsum dolor, sit amet consectetur adipisicing elit. Earum distinctio error voluptas? Quidem alias ratione, deleniti cum nisi eos soluta?</p>
             <span className="card__price">$85</span>
             <span className="card__stock">Quedan 5</span>
        </div>
        <div className="card">
             <span className="card__name">Zapato deportivo 3</span>
             <p className="card__description">Lorem ipsum dolor, sit amet consectetur adipisicing elit. Earum distinctio error voluptas? Quidem alias ratione, deleniti cum nisi eos soluta?</p>
             <span className="card__price">$155</span>
             <span className="card__stock">Quedan 5</span>
        </div>
        <div className="card">
             <span className="card__name">Zapato deportivo 2</span>
             <p className="card__description">Lorem ipsum dolor, sit amet consectetur adipisicing elit. Earum distinctio error voluptas? Quidem alias ratione, deleniti cum nisi eos soluta?</p>
             <span className="card__price">$85</span>
             <span className="card__stock">Quedan 5</span>
        </div>
        <div className="card">
             <span className="card__name">Zapato deportivo 3</span>
             <p className="card__description">Lorem ipsum dolor, sit amet consectetur adipisicing elit. Earum distinctio error voluptas? Quidem alias ratione, deleniti cum nisi eos soluta?</p>
             <span className="card__price">$155</span>
             <span className="card__stock">Quedan 5</span>
        </div>
      </main>
      <footer className="footer">
        <h3 className="footer__item">Politica de privacidad</h3>
        <h3 className="footer__item">Terminos y condiciones</h3>
        <h3 className="footer__item">Otra cosa</h3>
      </footer>
    </div>
  );
}

export default App;
