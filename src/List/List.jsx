import React from "react";
import "./List.scss";
/**  vamos a Crear un componente List, le pasaremos una list
* será un array con nombres
nombres = ["Lisa","Juan","Pepe"]
*/
const List = ({ list }) => {
  return (
    <div className="list-container">
      <ul></ul>
      {list.map((element, index) => (
        <li key={index}>{element}</li>
      ))}
    </div>
  );
};

export default List;
