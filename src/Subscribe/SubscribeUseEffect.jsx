import React, { useEffect, useState } from "react";

/**
 * Componente que simula una suscripción,
 * el estado podrá ser suscrito o no suscrito y
 * lo muestre por pantalla cuando cambie de valor.
 *
 * Pero USANDO useEffect!!!
 */
const SubscribeUseEffect = () => {
  const [subscribed, setSubscribed] = useState(false);
  const [text, setText] = useState("");
  const [buttonText, setButtonText] = useState("");
  useEffect(() => {
    setText(subscribed ? "Está suscrito" : "No está suscrito");
    setButtonText(!subscribed ? "Subscribirme" : "Cancelar suscripción");
  }, [subscribed]);
  return (
    <div className="subscribe-container">
      <p>{text}</p>
      <button
        type="button"
        onClick={() => {
          setSubscribed(!subscribed);
        }}
      >
        {buttonText}
      </button>
    </div>
  );
};

export default SubscribeUseEffect;
