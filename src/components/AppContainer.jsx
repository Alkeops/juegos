import { useEffect } from "react";
import Item from "./Item";

const AppContainer = () => {
    //TODO logica de peticiones

    useEffect(() => {


        //SIMULAR LA PETICION

    console.log("Ya esta montado")
    },[])

    return <div className="products">
          
    <Item 
    nombre="Tenis Ultrabux" 
    categoria="Hombre Running" 
    tag="10 colores" 
    precio={4200} 
    imagen="https://assets.adidas.com/images/w_383,h_383,f_auto,q_auto,fl_lossy,c_fill,g_auto/c60b90c34e0f413f916caa4300d3589f_9366/tenis-galaxy-4.jpg"
    />
    <Item 
    nombre="Tenis Otro" categoria="Hombre Running" 
    tag="10 colores" 
    precio={4200} 
    imagen="https://assets.adidas.com/images/w_383,h_383,f_auto,q_auto,fl_lossy,c_fill,g_auto/c60b90c34e0f413f916caa4300d3589f_9366/tenis-galaxy-4.jpg"
    />
     <Item 
    nombre="Tenis Ultrabux" 
    categoria="Hombre Running" 
    tag="10 colores" 
    precio={4200} 
    imagen="https://assets.adidas.com/images/w_383,h_383,f_auto,q_auto,fl_lossy,c_fill,g_auto/c60b90c34e0f413f916caa4300d3589f_9366/tenis-galaxy-4.jpg"
    />
    <Item 
    nombre="Tenis Otro" categoria="Hombre Running" 
    tag="10 colores" 
    precio={4200} 
    imagen="https://assets.adidas.com/images/w_383,h_383,f_auto,q_auto,fl_lossy,c_fill,g_auto/c60b90c34e0f413f916caa4300d3589f_9366/tenis-galaxy-4.jpg"
    />



</div>
}

export default AppContainer;