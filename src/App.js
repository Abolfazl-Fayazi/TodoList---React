import React, { useEffect, useState } from "react";

import "./App.css";

import Header from "./components/header";
import ItemGenerator from "./components/item-generator";
import Item from "./components/item";

//-----------------------------------------------------------------------------

const App = function () {
  //..................................................

  const [list, setList] = useState([]);

  //..................................................

  //const Check = function () {};

  /*const Delete = function (id, event) {
    setInputTask(inputTask.splice(id, 1));
    setRender(true);
    console.log(inputTask);
  };*/

  const getTasks = (taskList) => {
    setList(taskList);
  };

  //..................................................

  return (
    <div>
      <Header />
      {/* {console.log(taskList)} */}
      <ItemGenerator getTasks={getTasks} />
      {console.log(list)}
      <Item list={list} />
    </div>
  );
};

export default App;
