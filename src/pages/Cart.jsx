import { useCartContext } from "../context/cartContext";

export const Cart = () => {
  const { getTotal, cart } = useCartContext();
  return (
    <div>
      {cart.map((product) => (
        <div key={product.id}>
          <div>Nombre : {product.nombre}</div>
          <div>Cantidad : {product.qty}</div>
        </div>
      ))}
      {getTotal()}
    </div>
  );
};
