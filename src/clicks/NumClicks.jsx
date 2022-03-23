import React, { useEffect, useState } from "react";
/**
 * Componente que nos permite hacer click a traves de un button y nos muestre
 * el número total de clicks en el título (de la ventana), el cual tendrá este formato:
 * "Número de clicks: numClicks"
 */
const NumClicks = () => {
  const [numClicks, setNumClicks] = useState(0);
  const [title, setTitle] = useState("");

  useEffect(() => {
    // en este caso no podemos cambiar el titulo de la ventana así que cambiamos otros título
    setTitle(`Número de clicks: ${numClicks}`);
  }, [numClicks]);

  return (
    <>
      <p>{title}</p>
      <button onClick={() => setNumClicks((prevCount) => prevCount + 1)}>
        Click me
      </button>
    </>
  );
};
export default NumClicks;
