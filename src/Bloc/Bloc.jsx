import React, { useState } from "react";
import List from "../List/List";

const Bloc = () => {
  const [list, setList] = useState([]);
  const [name, setName] = useState("");

  const handleChangeInput = (e) => {
    e.preventDefault();
    console.log(e.target.value);
    setName(e.target.value);
  };

  const onClickAddNote = () => {
    console.log("list", list);
    setList((prevState) => {
      console.log(prevState);
      //return prevState.push(name); // Si hago push se duplica
      return [...prevState, name];
    });
    console.log("list", list);
    setName("");
  };

  return (
    <div className="bloc-container">
      <form>
        <label>
          Nota:
          <input type="text" value={name} onChange={handleChangeInput} />
        </label>
      </form>
      <List list={list} />
      {/* <p>You clicked {count} times</p> */}
      <button onClick={onClickAddNote}>Add note</button>
    </div>
  );
};
export default Bloc;
