import {db} from "./config";
import {collection, addDoc} from "firebase/firestore";

const ordersRef = collection(db, "orders");


export const addOrder = async (order) => {
    const orderDoc = await addDoc(ordersRef, order)

    return orderDoc.id
}