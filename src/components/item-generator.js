import { useState, useEffect } from "react";
import classes from "./item-generator.module.css";
import { v4 as uuidv4 } from "uuid";

//-----------------------------------------------------------------------------

const ItemGenerator = function (props) {
  //..................................................

  const [input, setInput] = useState("");
  let item = { task: input, id: uuidv4() };
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

  const adderButton = function (e) {

    setTaskList([...taskList, item]);
  };

  useEffect(() => {
    props.getTasks(taskList);
    setInput("");
  }, [taskList.length]);

  useEffect(() => {
    setTaskList(props.changedTodoList);
    props.getTasks(taskList);
  }, [props.changedTodoList]);


  //..................................................

  return (
    <div>
      <div className={classes.wrapper}>
        <input
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
        {console.log(taskList)}
      </div>
      <hr className={classes.line} />
    </div>
  );
};

export default ItemGenerator;
