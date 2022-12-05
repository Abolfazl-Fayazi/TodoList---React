import React, { useState } from "react";

import "./App.css";

import Header from "./components/header";
import ItemGenerator from "./components/item-generator";
import Item from "./components/item";

//-----------------------------------------------------------------------------

const App = function () {
  //..................................................

  const [input, setInput] = useState("");
  const [list, setList] = useState([]);

  //const [render, setRender] = useState(false);

  //..................................................

  const adderButton = function (e) {
    e.preventDefault();
    input.trim().length !== 0 && setList([...list, input]);
    setInput("");
  };

  //const Check = function () {};

  /*const Delete = function (id, event) {
    setInputTask(inputTask.splice(id, 1));
    setRender(true);
    console.log(inputTask);
  };*/

  //..................................................

  return (
    <div>
      <Header />
      <ItemGenerator
        adderButton={adderButton}
        input={input}
        setInput={setInput}
      />
      <Item list={list} setList={setList} />
    </div>
  );
};

export default App;
