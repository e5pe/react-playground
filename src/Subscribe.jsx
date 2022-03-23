import React, { useState } from "react";

/**
 * Componente que simula una suscripción,
 * el estado podrá ser suscrito o no suscrito y
 * lo muestre por pantalla cuando cambie de valor.
 */
const Subscribe = () => {
  const [subscribed, setSubscribed] = useState(false);
  return (
    <div className="subscribe-container">
      <p>{subscribed ? "está suscrito" : "No está suscrito"}</p>
      <button
        type="button"
        onClick={() => {
          setSubscribed(!subscribed);
        }}
      >
        {!subscribed ? "Subscribirme" : "Cancelar suscripción"}
      </button>
    </div>
  );
};

export default Subscribe;
