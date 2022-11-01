import "./Loader.scss"

export const Loader = ({ qty = 1 }) => {
  //Se crea un array de N elementos basado en qty y cada elemento es el numero del indice + 1
  const array = Array.from({ length: qty }, (_, i) => i + 1);
  return array.map((e) => <div className="loader" key={e} />);
};
