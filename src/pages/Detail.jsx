import { UserLayout } from "../components/UserLayout";
import { useParams, redirect } from "react-router-dom";
import { useEffect, useState } from "react";
import { getProduct } from "../api/products";

export const Detail = () => {
  const { productId } = useParams();
  const [product, setProduct] = useState({});

  useEffect(() => {
    getProduct(productId).then((data) => {
      setProduct(data);
    });
  }, [productId]);

  return (
    <>
      <div>{product?.nombre}</div>
      <div>{product?.categoria}</div>
    </>
  );
};
