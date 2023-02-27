import React, { useEffect, useState } from "react";

import "./App.css";

import Header from "./components/header";
import ItemGenerator from "./components/item-generator";
import Item from "./components/item";

//-----------------------------------------------------------------------------

const App = function () {
  //..................................................

  const [todoList, setTodoList] = useState([]);
  const [newTodoList, setNewTodoList] = useState([]);

  //..................................................

  //const Check = function () {};

  /*const Delete = function (id, event) {
    setInputTask(inputTask.splice(id, 1));
    setRender(true);
    console.log(inputTask);
  };*/

 
  const getTasks = (taskList) => {
    setTodoList(taskList);
  };

  const getChangedTodoList = (changedTodoList) => {
    setNewTodoList(changedTodoList);
  };

  /*const getEditingItem = () => {
    setEditingItem();
  };*/

  //..................................................

  return (
    <div>
      <Header />
      {/* {console.log(taskList)} */}
      <ItemGenerator
        getTasks={getTasks}
        changedTodoList={newTodoList}
        setChangedTodoList={setNewTodoList}
        setNewTodoList={setNewTodoList}
        newTodoList={newTodoList}
        //getEditingItem={getEditingItem}
      />

      <Item
        todoList={todoList}
        setTodoList={setTodoList}
        getChangedTodoList={getChangedTodoList}
 
      />
    </div>
  );
};

export default App;
