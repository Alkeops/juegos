const listaDeZapatos = [
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
  ];

  const listaDeCoches = [
    {
      nombre: "Tesla",
      categoria: "Electrico",
      tag: "10 colores",
      precio: 420000000,
      imagen: "https://assets.adidas.com/images/w_383,h_383,f_auto,q_auto,fl_lossy,c_fill,g_auto/c60b90c34e0f413f916caa4300d3589f_9366/tenis-galaxy-4.jpg",
      id:0
    },
    {
      nombre: "Mercedes",
      categoria: "Deportivo",
      tag: "10 colores",
      precio: 9999,
      imagen: "https://assets.adidas.com/images/w_383,h_383,f_auto,q_auto,fl_lossy,c_fill,g_auto/c60b90c34e0f413f916caa4300d3589f_9366/tenis-galaxy-4.jpg",
      id: 1
    },
  ];

export const getProducts = (categoria) =>
  new Promise((res, rej) => {
    let products = categoria === 'coches' ? listaDeCoches : listaDeZapatos
    setTimeout(() => {
      res(products);
    }, 3000);
  });