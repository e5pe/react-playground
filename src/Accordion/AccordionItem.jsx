import React, { useEffect, useState } from "react";
import List from "../List/List";
import "./Accordion.scss";

/**
 * Componente que muestre 2 listados desplegables al que llamaremos Accordion
 */
const AccordionItem = ({ id, title, content, isOpen = false }) => {
  console.log("in Item", { id, title, content, isOpen });
  const [isActive, setIsActive] = useState(false);

  const onClickAccordion = (e) => {
    console.log("onClickAccordion e", e.target);
  };
  return (
    <div className="accordion-item">
      <div className="accordion-title" onClick={onClickAccordion}>
        <div className="title">{title}</div>
        <div className="icon">{isActive ? "-" : "+"}</div>
      </div>
      {isOpen && (
        <div className="accordion-content">
          <List list={content} />
        </div>
      )}
    </div>
  );
};
export default AccordionItem;
