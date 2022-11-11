import {
  collection,
  //Muchos
  getDocs,
  where,
  //Uno
  getDoc,
  doc,
  //busquedas
  query,
  limit,
  addDoc
} from "firebase/firestore";

import { db } from "./config";

const productsRef = collection(db, "items");

export const getProducts = async (categoria) => {
  const products = [];

  const q = categoria
    ? query(productsRef, where("categoria", "==", categoria))
    : productsRef;

  const querySnapshot = await getDocs(q);

  querySnapshot.forEach((doc) => {
    products.push({ ...doc.data(), id: doc.id });
  });

  return products;
};


export const getProduct = async (productId) => {
  const document = doc(db, "items", productId);

  const docSnap = await getDoc(document);

  if (docSnap.exists()) {
    return { id: docSnap.id, ...docSnap.data() };
  }

  return null;
};

const products = [
  {
    nombre: "Tenis Ultrabux",
    tag: "10 colores",
    descripcion: "Tenis de moda del mejor material",
    precio: 20,
    imagen:
      "https://assets.adidas.com/images/w_383,h_383,f_auto,q_auto,fl_lossy,c_fill,g_auto/c60b90c34e0f413f916caa4300d3589f_9366/tenis-galaxy-4.jpg",
    categoria: "hombre",
    stock: 10,
  },
  {
    nombre: "Tenis Ultrabux2",
    tag: "10 colores",
    descripcion: "Tenis de moda del mejor material",
    precio: 19,
    imagen:
      "https://assets.adidas.com/images/w_383,h_383,f_auto,q_auto,fl_lossy,c_fill,g_auto/c60b90c34e0f413f916caa4300d3589f_9366/tenis-galaxy-4.jpg",
    categoria: "hombre",
    stock: 8,
  },
  {
    nombre: "Tesla",
    tag: "10 colores",
    descripcion: "Tenis de moda del mejor material",
    precio: 18,
    imagen:
      "https://assets.adidas.com/images/w_383,h_383,f_auto,q_auto,fl_lossy,c_fill,g_auto/75f66b5e751845b9ae07adfb016ee64f_9366/tenis-adidas-adidas-court-bold.jpg",
    categoria: "mujer",
    stock: 2,
  },
  {
    nombre: "Mercedes",
    tag: "10 colores",
    descripcion: "Tenis de moda del mejor material",
    precio: 17,
    imagen:
      "https://assets.adidas.com/images/w_383,h_383,f_auto,q_auto,fl_lossy,c_fill,g_auto/5c387bb1a0e64883a419aed30125bbb2_9366/forum-bold-w.jpg",
    categoria: "mujer",
    stock: 4,
  },

  {
    nombre: "Tesla2",
    tag: "10 colores",
    descripcion: "Tenis de moda del mejor material",
    precio: 15,
    imagen:
      "https://assets.adidas.com/images/w_383,h_383,f_auto,q_auto,fl_lossy,c_fill,g_auto/2cdd312f9b9641599d49ae3000cd5087_9366/tenis-adidas-grand-court-lifestyle-para-tenis-con-cordones.jpg",
    categoria: "infantil",
    stock: 5,
  },
  {
    nombre: "Mercedes2",
    tag: "10 colores",
    descripcion: "Tenis de moda del mejor material",
    precio: 12,
    imagen:
      "https://assets.adidas.com/images/w_383,h_383,f_auto,q_auto,fl_lossy,c_fill,g_auto/2cdd312f9b9641599d49ae3000cd5087_9366/tenis-adidas-grand-court-lifestyle-para-tenis-con-cordones.jpg",
    categoria: "infantil",
    stock: 3,
  },
  {
    nombre: "Tenis Ultrabux3",
    tag: "10 colores",
    descripcion: "Tenis de moda del mejor material",
    precio: 4200,
    imagen:
      "https://assets.adidas.com/images/w_383,h_383,f_auto,q_auto,fl_lossy,c_fill,g_auto/c60b90c34e0f413f916caa4300d3589f_9366/tenis-galaxy-4.jpg",
    categoria: "hombre",
    stock: 10,
  },
  {
    nombre: "Tenis Ultrabux4",
    tag: "10 colores",
    descripcion: "Tenis de moda del mejor material",
    precio: 4200,
    imagen:
      "https://assets.adidas.com/images/w_383,h_383,f_auto,q_auto,fl_lossy,c_fill,g_auto/c60b90c34e0f413f916caa4300d3589f_9366/tenis-galaxy-4.jpg",
    categoria: "hombre",
    stock: 8,
  },
  {
    nombre: "Tesla3",
    tag: "10 colores",
    descripcion: "Tenis de moda del mejor material",
    precio: 43,
    imagen:
      "https://assets.adidas.com/images/w_383,h_383,f_auto,q_auto,fl_lossy,c_fill,g_auto/75f66b5e751845b9ae07adfb016ee64f_9366/tenis-adidas-adidas-court-bold.jpg",
    categoria: "mujer",
    stock: 2,
  },
  {
    nombre: "Mercedes3",
    tag: "10 colores",
    descripcion: "Tenis de moda del mejor material",
    precio: 52,
    imagen:
      "https://assets.adidas.com/images/w_383,h_383,f_auto,q_auto,fl_lossy,c_fill,g_auto/5c387bb1a0e64883a419aed30125bbb2_9366/forum-bold-w.jpg",
    categoria: "mujer",
    stock: 4,
  },

  {
    nombre: "Tesla4",
    tag: "10 colores",
    descripcion: "Tenis de moda del mejor material",
    precio: 11,
    imagen:
      "https://assets.adidas.com/images/w_383,h_383,f_auto,q_auto,fl_lossy,c_fill,g_auto/2cdd312f9b9641599d49ae3000cd5087_9366/tenis-adidas-grand-court-lifestyle-para-tenis-con-cordones.jpg",
    categoria: "infantil",
    stock: 5,
  },
  {
    nombre: "Mercedes4",
    tag: "10 colores",
    descripcion: "Tenis de moda del mejor material",
    precio: 66,
    imagen:
      "https://assets.adidas.com/images/w_383,h_383,f_auto,q_auto,fl_lossy,c_fill,g_auto/2cdd312f9b9641599d49ae3000cd5087_9366/tenis-adidas-grand-court-lifestyle-para-tenis-con-cordones.jpg",
    categoria: "infantil",
    stock: 3,
  },
  {
    nombre: "Tenis Ultrabux5",
    tag: "10 colores",
    descripcion: "Tenis de moda del mejor material",
    precio: 11,
    imagen:
      "https://assets.adidas.com/images/w_383,h_383,f_auto,q_auto,fl_lossy,c_fill,g_auto/c60b90c34e0f413f916caa4300d3589f_9366/tenis-galaxy-4.jpg",
    categoria: "hombre",
    stock: 10,
  },
  {
    nombre: "Tenis Ultrabux6",
    tag: "10 colores",
    descripcion: "Tenis de moda del mejor material",
    precio: 22,
    imagen:
      "https://assets.adidas.com/images/w_383,h_383,f_auto,q_auto,fl_lossy,c_fill,g_auto/c60b90c34e0f413f916caa4300d3589f_9366/tenis-galaxy-4.jpg",
    categoria: "hombre",
    stock: 8,
  },
  {
    nombre: "Tesla7",
    tag: "10 colores",
    descripcion: "Tenis de moda del mejor material",
    precio: 33,
    imagen:
      "https://assets.adidas.com/images/w_383,h_383,f_auto,q_auto,fl_lossy,c_fill,g_auto/75f66b5e751845b9ae07adfb016ee64f_9366/tenis-adidas-adidas-court-bold.jpg",
    categoria: "mujer",
    stock: 2,
  },
  {
    nombre: "Mercedes8",
    tag: "10 colores",
    descripcion: "Tenis de moda del mejor material",
    precio: 55,
    imagen:
      "https://assets.adidas.com/images/w_383,h_383,f_auto,q_auto,fl_lossy,c_fill,g_auto/5c387bb1a0e64883a419aed30125bbb2_9366/forum-bold-w.jpg",
    categoria: "mujer",
    stock: 4,
  },

  {
    nombre: "Tesla9",
    tag: "10 colores",
    descripcion: "Tenis de moda del mejor material",
    precio: 11,
    imagen:
      "https://assets.adidas.com/images/w_383,h_383,f_auto,q_auto,fl_lossy,c_fill,g_auto/2cdd312f9b9641599d49ae3000cd5087_9366/tenis-adidas-grand-court-lifestyle-para-tenis-con-cordones.jpg",
    categoria: "infantil",
    stock: 5,
  },
  {
    nombre: "Mercedes11",
    tag: "10 colores",
    descripcion: "Tenis de moda del mejor material",
    precio: 99,
    imagen:
      "https://assets.adidas.com/images/w_383,h_383,f_auto,q_auto,fl_lossy,c_fill,g_auto/2cdd312f9b9641599d49ae3000cd5087_9366/tenis-adidas-grand-court-lifestyle-para-tenis-con-cordones.jpg",
    categoria: "infantil",
    stock: 3,
  },
  {
    nombre: "Tenis Ultrabux12",
    tag: "10 colores",
    descripcion: "Tenis de moda del mejor material",
    precio: 33,
    imagen:
      "https://assets.adidas.com/images/w_383,h_383,f_auto,q_auto,fl_lossy,c_fill,g_auto/c60b90c34e0f413f916caa4300d3589f_9366/tenis-galaxy-4.jpg",
    categoria: "hombre",
    stock: 10,
  },
  {
    nombre: "Tenis Ultrabux213",
    tag: "10 colores",
    descripcion: "Tenis de moda del mejor material",
    precio: 22,
    imagen:
      "https://assets.adidas.com/images/w_383,h_383,f_auto,q_auto,fl_lossy,c_fill,g_auto/c60b90c34e0f413f916caa4300d3589f_9366/tenis-galaxy-4.jpg",
    categoria: "hombre",
    stock: 8,
  },
  {
    nombre: "Tesla15",
    tag: "10 colores",
    descripcion: "Tenis de moda del mejor material",
    precio: 11,
    imagen:
      "https://assets.adidas.com/images/w_383,h_383,f_auto,q_auto,fl_lossy,c_fill,g_auto/75f66b5e751845b9ae07adfb016ee64f_9366/tenis-adidas-adidas-court-bold.jpg",
    categoria: "mujer",
    stock: 2,
  },
  {
    nombre: "Mercedes16",
    tag: "10 colores",
    descripcion: "Tenis de moda del mejor material",
    precio: 222,
    imagen:
      "https://assets.adidas.com/images/w_383,h_383,f_auto,q_auto,fl_lossy,c_fill,g_auto/5c387bb1a0e64883a419aed30125bbb2_9366/forum-bold-w.jpg",
    categoria: "mujer",
    stock: 3,
  },

  {
    nombre: "Tesla17",
    tag: "10 colores",
    descripcion: "Tenis de moda del mejor material",
    precio: 333,
    imagen:
      "https://assets.adidas.com/images/w_383,h_383,f_auto,q_auto,fl_lossy,c_fill,g_auto/2cdd312f9b9641599d49ae3000cd5087_9366/tenis-adidas-grand-court-lifestyle-para-tenis-con-cordones.jpg",
    categoria: "infantil",
    stock: 4,
  },
  {
    nombre: "Mercedes18",
    tag: "10 colores",
    descripcion: "Tenis de moda del mejor material",
    precio: 444,
    imagen:
      "https://assets.adidas.com/images/w_383,h_383,f_auto,q_auto,fl_lossy,c_fill,g_auto/2cdd312f9b9641599d49ae3000cd5087_9366/tenis-adidas-grand-court-lifestyle-para-tenis-con-cordones.jpg",
    categoria: "infantil",
    stock: 9,
  },
];


export const cargarData = () => {

  products.forEach(async (product)=> {
    await addDoc(productsRef, product)
  })

}