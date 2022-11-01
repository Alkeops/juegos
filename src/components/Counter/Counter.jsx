import { useState, useEffect } from "react";
import { Button } from "../Button";

const Counter = ({ stock, onAdd }) => {
  const [contador, setContador] = useState(0);

  const handleAdd = () => {
    if (contador < stock) {
      setContador(contador + 1);
    }
  };

  const handleSubstract = () => {
    if (contador > 0) setContador(contador - 1);
  };

  return (
    <div className="grid">
      <Button onClick={() => handleAdd()}> Sumar </Button>
      <span style={{ minWidth: 25 }}>{contador}</span>
      <Button onClick={() => handleSubstract()}> Restar </Button>
      <Button
        onClick={() => {
          if (contador) onAdd();
        }}
        disabled={!contador}
      >
        {" "}
        Agregar al carrito{" "}
      </Button>
    </div>
  );
};

export default Counter;
