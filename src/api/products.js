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

