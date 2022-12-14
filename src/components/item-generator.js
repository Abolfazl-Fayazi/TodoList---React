import { useState, useEffect } from "react";
import classes from "./item-generator.module.css";
import { v4 as uuidv4 } from "uuid";

//-----------------------------------------------------------------------------

const ItemGenerator = function (props) {
  //..................................................

  const [input, setInput] = useState("");
  const [item, setItem] = useState({});
  const [taskList, setTaskList] = useState([]);

  //..................................................

  const inputChanging = function (e) {
    setInput(e.target.value);
  };

  /*const itemHandler = () => {
    setItem({ task: input, id: uuidv4() });
  };*/

  /*const taskListHandler = () => {
    setTaskList([...taskList, item])
  }*/

  const adderButton = async function (e) {
    e.preventDefault();
    setItem({ task: input, id: uuidv4() });
    setTaskList([...taskList, item]);
    props.getTasks(taskList);
    setInput("");
  };

  //..................................................

  return (
    <div>
      <form className={classes.wrapper}>
        <input
          ref={(inputBox) => inputBox && inputBox.focus()}
          autoFocus
          type="text"
          className={classes.input}
          placeholder="Enter a new task . . ."
          onChange={inputChanging}
          value={input}
        />
        <button className={classes.button} onClick={adderButton}>
          +
        </button>
      </form>
      <hr className={classes.line} />
    </div>
  );
};

export default ItemGenerator;
