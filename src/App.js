import AppContainer from './components/AppContainer';
import { Navbar } from './components/Navbar';
import './styles/styles.scss';
import Banner from './components/Banner';
import Footer from './components/Footer';
import { AiFillAlert, AiFillCarryOut } from "react-icons/ai";
import Button from './components/Button';
import { useState } from 'react';
import Counter from './components/Counter';

function App() {

     return (
          <div className="App">
               <Navbar />
               <Banner promocion="ÚNETE AL CLUB Y CONSIGUE UN 15% DE DESCUENTO" boton="registrate" onClick={() => console.log("click en registrate")} />
               <main className="content">
             

{/* 


                         <Button 
                         leftIcon={<AiFillCarryOut />} 
                         rightIcon={<AiFillCarryOut />}
                         >  Haz algo </Button>
 */}


                    <div style={{ margin: 20 }} />

               <Counter onAdd={() => console.log("Agregando")} stock={5}  />
                    {/*  <AppContainer /> */}
               </main>
               <Banner promocion="ÚNETE AL CLUB Y CONSIGUE UN 35% DE DESCUENTO" boton="unete" onClick={() => console.log("click en unete")} />
               <Footer />
          </div>
     );
}

export default App;
