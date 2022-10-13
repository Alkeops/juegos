import './styles/styles.scss';


function App() {
     const precio = 4299;
     return (
          <div className="App">

               <header className="header">
                    <img src={"https://www.adidas.mx/glass/react/c478798/assets/img/icon-adidas-logo.svg"} className="header__logo" alt="logo" />
                    <div className='header__nav'><h3>Hombre</h3><h3>Mujer</h3><h3>Niños</h3></div>
                    <div className="header__buttons"><button>Carrito</button></div>
               </header>

               <div className="banner">
                    <div className="banner__content">
                         <h2 className="banner__title">ÚNETE AL CLUB Y CONSIGUE UN 15% DE DESCUENTO</h2>
                         <button className="banner__button">REGÍSTRATE GRATIS {"->"}</button></div>
               </div>

               <main className="content">

                    <div className="products">

                         <div className="promo">
                              <h2>INICIA SESIÓN Y OPTEN UN DESCUENTO EXTRA DEL 5%</h2>
                              <button className="promo__button">REGÍSTRATE GRATIS {"->"}</button>
                         </div>

                         <div className="card">
                              <div className="card__top">
                                   <img src="https://assets.adidas.com/images/w_383,h_383,f_auto,q_auto,fl_lossy,c_fill,g_auto/c60b90c34e0f413f916caa4300d3589f_9366/tenis-galaxy-4.jpg" alt="zapato" />
                                   <span className="card__price">${precio.toLocaleString()}</span>
                              </div>
                              <div className="card__content">
                                   <span className="card__name">Tenis Ultrabux 22</span>
                                   <span className="card__category">Hombre Running</span>
                                   <div style={{ display: 'grid', gridAutoFlow: 'column', gridGap: 5, width: 'max-content' }}>
                                        <span className="card__tag">Envio gratis</span>
                                        <span className="card__tag">10 colores</span>
                                   </div>
                              </div>
                         </div>

                         <div className="card">
                              <div className="card__top">
                                   <img src="https://assets.adidas.com/images/w_383,h_383,f_auto,q_auto,fl_lossy,c_fill,g_auto/2932ff2c354640baa09cac0200fd1a25_9366/tenis-run-60s-2.0.jpg" alt="zapato" />
                                   <span className="card__price">$1,399</span>
                              </div>
                              <div className="card__content">
                                   <span className="card__name">Tenis Run 80s +</span>
                                   <span className="card__category">Hombre Sportwear</span>
                                   <span className="card__tag">Envio gratis</span>
                              </div>
                         </div>

                         <div className="card">
                              <div className="card__top">
                                   <img src="https://assets.adidas.com/images/w_383,h_383,f_auto,q_auto,fl_lossy,c_fill,g_auto/fbc43c7855684f699cfdaea801885ccb_9366/ultraboost-x-copa-world-cup.jpg" alt="zapato" />
                                   <span className="card__price">$4,099</span>
                              </div>
                              <div className="card__content">
                                   <span className="card__name">ULTRABUST WORLD CUP</span>
                                   <span className="card__category">Sportwears</span>
                                   <span className="card__tag">Envio gratis</span>
                              </div>
                         </div>

                         <div className="card">
                              <div className="card__top">
                                   <img src="https://assets.adidas.com/images/w_383,h_383,f_auto,q_auto,fl_lossy,c_fill,g_auto/73a59a440733436f8ffdaeae01614284_9366/tenis-run-70s-lifestyle.jpg" alt="zapato" />
                                   <span className="card__price">${799}</span>
                              </div>
                              <div className="card__content">
                                   <span className="card__name">Tenis Solaris</span>
                                   <span className="card__category">Hombre Running</span>
                                   <span className="card__tag">Envio gratis</span>
                              </div>
                         </div>

                         <div className="card">
                              <div className="card__top">
                                   <img src="https://assets.adidas.com/images/w_383,h_383,f_auto,q_auto,fl_lossy,c_fill,g_auto/eac03e62a4b14e4f83a2ae9e0114bc82_9366/tenis-de-running-ultraboost-5.0-adn-sportswear-lifestyle.jpg" alt="zapato" />
                                   <span className="card__price">$4,099</span>
                              </div>
                              <div className="card__content">
                                   <span className="card__name">ULTRABUST WORLD CUP</span>
                                   <span className="card__category">Sportwears</span>
                                   <span className="card__tag">Envio gratis</span>
                              </div>
                         </div>

                         <div className="card">
                              <div className="card__top">
                                   <img src="https://assets.adidas.com/images/w_383,h_383,f_auto,q_auto,fl_lossy,c_fill,g_auto/184ee600f27b493fba31ac020092568a_9366/tenis-galaxar-run.jpg" alt="zapato" />
                                   <span className="card__price">${precio.toLocaleString()}</span>
                              </div>
                              <div className="card__content">
                                   <span className="card__name">Tenis Ultrabux 22</span>
                                   <span className="card__category">Hombre Running</span>
                                   <span className="card__tag">Envio gratis</span>
                              </div>
                         </div>

                         <div className="card">
                              <div className="card__top">
                                   <img src="https://assets.adidas.com/images/w_383,h_383,f_auto,q_auto,fl_lossy,c_fill,g_auto/099c95f58df84831bde0ad1a00a3ef40_9366/tenis-eq21-run.jpg" alt="zapato" />
                                   <span className="card__price">$1,399</span>
                              </div>
                              <div className="card__content">
                                   <span className="card__name">Tenis Run 80s +</span>
                                   <span className="card__category">Hombre Sportwear</span>
                                   <span className="card__tag">Envio gratis</span>
                              </div>
                         </div>

                         <div className="card">
                              <div className="card__top">
                                   <img src="https://assets.adidas.com/images/w_383,h_383,f_auto,q_auto,fl_lossy,c_fill,g_auto/d82528ce389f43ef8b0dac310115ef52_9366/tenis-run-falcon-2.0.jpg" alt="zapato" />
                                   <span className="card__price">$4,099</span>
                              </div>
                              <div className="card__content">
                                   <span className="card__name">ULTRABUST WORLD CUP</span>
                                   <span className="card__category">Sportwears</span>
                                   <span className="card__tag">Envio gratis</span>
                              </div>
                         </div>

                         <div className="card">
                              <div className="card__top">
                                   <img src="https://assets.adidas.com/images/w_383,h_383,f_auto,q_auto,fl_lossy,c_fill,g_auto/b8f1f67e2af9484287f3ae7b0131f722_9366/tenis-ultraboost-19.5-dna-running-sportswear-lifestyle.jpg" alt="zapato" />
                                   <span className="card__price">${799}</span>
                              </div>
                              <div className="card__content">
                                   <span className="card__name">Tenis Solaris</span>
                                   <span className="card__category">Hombre Running</span>
                                   <span className="card__tag">Envio gratis</span>
                              </div>
                         </div>

                         <div className="card">
                              <div className="card__top">
                                   <img src="https://assets.adidas.com/images/w_383,h_383,f_auto,q_auto,fl_lossy,c_fill,g_auto/c60b90c34e0f413f916caa4300d3589f_9366/tenis-galaxy-4.jpg" alt="zapato" />
                                   <span className="card__price">${precio.toLocaleString()}</span>
                              </div>
                              <div className="card__content">
                                   <span className="card__name">Tenis Ultrabux 22</span>
                                   <span className="card__category">Hombre Running</span>
                                   <span className="card__tag">Envio gratis</span>
                              </div>
                         </div>

                         <div className="card">
                              <div className="card__top">
                                   <img src="https://assets.adidas.com/images/w_383,h_383,f_auto,q_auto,fl_lossy,c_fill,g_auto/2932ff2c354640baa09cac0200fd1a25_9366/tenis-run-60s-2.0.jpg" alt="zapato" />
                                   <span className="card__price">$1,399</span>
                              </div>
                              <div className="card__content">
                                   <span className="card__name">Tenis Run 80s +</span>
                                   <span className="card__category">Hombre Sportwear</span>
                                   <span className="card__tag">Envio gratis</span>
                              </div>
                         </div>


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
