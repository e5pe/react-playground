import React, { useState } from "react";
import "./styles.css";
import Title from "./Title";
import List from "./List/List";
import Loading from "./Loading/Loading";
import Bloc from "./Bloc/Bloc";
import RollDices from "./Dices/RollDices";
import NumClicks from "./clicks/NumClicks";
import Subscribe from "./Subscribe/Subscribe";
import SubscribeUseEffect from "./Subscribe/SubscribeUseEffect";
import Accordion from "./Accordion/Accordion";

export default function App() {
  const data = { propiedad: { title: "titulo", subtitle: "subtitle" } };
  const nombres = ["Lisa", "Juan", "Pepe"];
  return (
    <div className="App">
      {/* <Title props={data} /> */}
      {/* <List list={nombres} /> */}
      {/* <Loading /> */}
      {/* <Bloc /> */}
      {/* TODO: do it*/}
      {/* <RollDices /> */}
      {/* <Subscribe /> */}
      {/* TODO: Mover estos a otro componente que sea EjerciciosUseEffect */}
      {/* <NumClicks /> */}
      {/* <SubscribeUseEffect /> */}
      {/* TODO: Intentar hacer este ejercicio y que quede guay */}
      <Accordion />
    </div>
  );
  // const props= {propiedad: {title: "titlulo 1", subtitle: "subtitle 1"};
  // const data = {};
  // return (
  //   <div className="App">
  //     <Title props={data} />
  //   </div>
  // );
}
