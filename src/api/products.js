const products = [
    {
      nombre: "Tenis Ultrabux",
      categoria: "Hombre Running",
      tag: "10 colores",
      precio: 4200,
      imagen: "https://assets.adidas.com/images/w_383,h_383,f_auto,q_auto,fl_lossy,c_fill,g_auto/c60b90c34e0f413f916caa4300d3589f_9366/tenis-galaxy-4.jpg",
      id:0
    },
    {
      nombre: "Tenis Ultrabux2",
      categoria: "Hombre Running",
      tag: "10 colores",
      precio: 4200,
      imagen: "https://assets.adidas.com/images/w_383,h_383,f_auto,q_auto,fl_lossy,c_fill,g_auto/c60b90c34e0f413f916caa4300d3589f_9366/tenis-galaxy-4.jpg",
      id: 1
    },
    {
        nombre: "Tenis Ultrabux2",
        categoria: "Hombre Running",
        tag: "10 colores",
        precio: 4200,
        imagen: "https://assets.adidas.com/images/w_383,h_383,f_auto,q_auto,fl_lossy,c_fill,g_auto/c60b90c34e0f413f916caa4300d3589f_9366/tenis-galaxy-4.jpg",
        id: 2
      },
      
    {
        nombre: "Tenis Ultrabux2",
        categoria: "Hombre Running",
        tag: "10 colores",
        precio: 4200,
        imagen: "https://assets.adidas.com/images/w_383,h_383,f_auto,q_auto,fl_lossy,c_fill,g_auto/c60b90c34e0f413f916caa4300d3589f_9366/tenis-galaxy-4.jpg",
        id: 3
      },
      
    {
        nombre: "Tenis Ultrabux2",
        categoria: "Hombre Running",
        tag: "10 colores",
        precio: 4200,
        imagen: "https://assets.adidas.com/images/w_383,h_383,f_auto,q_auto,fl_lossy,c_fill,g_auto/c60b90c34e0f413f916caa4300d3589f_9366/tenis-galaxy-4.jpg",
        id: 4
      },
      
    {
        nombre: "Tenis Ultrabux2",
        categoria: "Hombre Running",
        tag: "10 colores",
        precio: 4200,
        imagen: "https://assets.adidas.com/images/w_383,h_383,f_auto,q_auto,fl_lossy,c_fill,g_auto/c60b90c34e0f413f916caa4300d3589f_9366/tenis-galaxy-4.jpg",
        id: 5
      },
      
    {
        nombre: "Tenis Ultrabux2",
        categoria: "Hombre Running",
        tag: "10 colores",
        precio: 4200,
        imagen: "https://assets.adidas.com/images/w_383,h_383,f_auto,q_auto,fl_lossy,c_fill,g_auto/c60b90c34e0f413f916caa4300d3589f_9366/tenis-galaxy-4.jpg",
        id: 6
      },
  ];

export const getProducts = () =>
  new Promise((res, rej) => {
    setTimeout(() => {
      res(products);
    }, 3000);
  });