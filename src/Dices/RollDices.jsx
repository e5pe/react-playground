import React, { useEffect, useState } from "react";
/**
 * Componente que simula el lanzamiento de 2 dados.
 * Pintaremos un button que muestre como texto "Tirar de nuevo"
 * y si hacemos click, cambiará a "Tirar Dado 1" y si hacemos click de nuevo,
 * cambiará a "Tirar Dado 2". Cada vez que tiremos un dado haciendo click
 * haremos que se muestre por pantalla una lista con cada tirada, y
 * después de las 2 tiradas, el número total de puntos.
 */
const RollDices = () => {
  // constants
  const ROLL_AGAIN = "Tirar de nuevo";

  // hooks
  const [buttonText, setButtonText] = useState(ROLL_AGAIN);
  const [dice, setDice] = useState(0);
  const [result, setResult] = useState(0);

  const tirarDado = () => {
    console.log("tirarDado");
    if (dice <= 2) {
      setDice();
    }
  };

  useEffect(() => {
    if (dice >= 1 && dice <= 2) {
      setButtonText(`Tirar Dado ${dice}`);
    } else {
      setButtonText(ROLL_AGAIN);
    }
  }, [dice]);

  return (
    <div className="dices-container">
      <button className="roll-again-button" type="button" onClick={tirarDado}>
        {buttonText}
      </button>
      {result}
    </div>
  );
};
export default RollDices;
