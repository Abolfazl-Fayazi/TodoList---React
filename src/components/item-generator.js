import { useState, useEffect } from "react";
import classes from "./item-generator.module.css";
import { v4 as uuidv4 } from "uuid";

//-----------------------------------------------------------------------------

const ItemGenerator = function (props) {
  //..................................................

  const [input, setInput] = useState("");
  let item = { task: input, id: uuidv4(), complete: false, editingMode: false };
  const [taskList, setTaskList] = useState([]);
  //const [editIsDone, setEditIsDone] = useState(false);

  //..................................................

  const inputChanging = function (e) {
    setInput(e.target.value);
  };

  // useEffect(() => {
  //   if (props.editingItem) {
  //     setInput(props.editingItem.task);
  //   } else {
  //     setInput("");
  //   }
  // }, [setInput, props.editingItem]);

  /*const itemHandler = () => {
    setItem({ task: input, id: uuidv4() });
  };*/

  /*const taskListHandler = () => {
    setTaskList([...taskList, item])
  }*/

  /*const updateTask = (item) => {
    const updatedTasks = props.changedTodoList.map((i) =>
      i.editingMode === true ? item : i
    );
    props.setChangedTodoList(updatedTasks)
  };*/

  const adderButton = function (e) {
    // if (props.editingItem) {
    //   props.editingItem.task = item.task;
    //   props.editingItem.id = item.id;
    //   props.editingItem.editingMode = false;

    //   //setTaskList(props.changedTodoList);

    //   let index = props.changedTodoList.indexOf(
    //     props.changedTodoList.find((i) => i.id === props.editingItem.id)
    //   );
    //   console.log(index);

    //   props.changedTodoList.splice(index, 0, props.editingItem);
    //   props.changedTodoList.splice(index + 1, 1);

    //   //setTaskList(taskList);

    //   props.changedTodoList.map((i) => (i.editingMode = false));

    //   setEditIsDone(true);

    //   //updateTask(item);

    //   /*props.changedTodoList.map((i) =>
    //     i.id === item.id
    //       ? (i.editingMode = !i.editingMode)
    //       : (i.editingMode = false)
    //   );*/

    //   //props.setNewTodoList(props.changedTodoList)

    //   console.log(props.editingItem);
    //   console.log(item);
    //   console.log(props.changedTodoList);
    //   console.log(taskList);
    // } else {
    //   setTaskList([...taskList, item]);
    //   console.log(props.changedTodoList);
    // }

    setTaskList([...taskList, item]);
    console.log(props.changedTodoList);
  };

  useEffect(() => {
    props.getTasks(taskList);
    setInput("");
  }, [taskList.length]);

  /*useEffect(() => {
    if (props.editingItem) {
      props.getTasks(taskList);
      setInput("");
    }
  }, [editIsDone]);*/

  useEffect(() => {
    setTaskList(props.changedTodoList);
    props.getTasks(taskList);
  }, [props.changedTodoList]);

  /*useEffect(() => {
    if (props.editingItem) {
      setTaskList(props.changedTodoList);
      props.getTasks(taskList);
    }
  }, [editIsDone]);*/

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
          onKeyDown={(e) => {
            if (e.key === "Enter") {
              adderButton();
            }
          }}
        />
        <button className={classes.addButton} onClick={adderButton}>
          +
        </button>
        {console.log(taskList)}
      </div>
      <hr className={classes.line} />
    </div>
  );
};

export default ItemGenerator;
