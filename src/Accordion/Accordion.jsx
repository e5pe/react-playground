import React, { useEffect, useState } from "react";
import AccordionItem from "./AccordionItem";

/**
 * Componente que muestre 2 listados desplegables al que llamaremos Accordion
 */
const Accordion = ({ title, content }) => {
  // Hook con el listado de datos datos
  const [data, setData] = useState([]);
  useEffect(() => {
    setData([
      {
        id: 1,
        title: "Lista de la compra",
        content: ["huevos", "leche", "aceite", "patatas"]
      },
      {
        id: 2,
        title: "Lista de series",
        content: [
          "La casa de papel",
          "Riverdale",
          "Legends of Tomorrow",
          "Umbrella Academy"
        ]
      }
    ]);
  }, []);
  return (
    <div className="accordion-container">
      {data.map((item, index) => {
        return <AccordionItem key={index} {...item} />;
      })}
    </div>
  );
};

export default Accordion;
