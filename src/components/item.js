import { useState, useEffect } from "react";
import classes from "./item.module.css";

//-----------------------------------------------------------------------------

const Item = function (props) {
  //..................................................

  const checkIcon = (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      stroke-width="2"
      stroke-linecap="round"
      stroke-linejoin="round"
    >
      <polyline points="20 6 9 17 4 12"></polyline>
    </svg>
  );

  const trashIcon = (
    <svg
      class="delete"
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      stroke-width="2"
      stroke-linecap="round"
      stroke-linejoin="round"
    >
      <path d="M3 6h18"></path>
      <path d="M19 6v14c0 1-1 2-2 2H7c-1 0-2-1-2-2V6"></path>
      <path d="M8 6V4c0-1 1-2 2-2h4c1 0 2 1 2 2v2"></path>
      <line x1="10" y1="11" x2="10" y2="17"></line>
      <line x1="14" y1="11" x2="14" y2="17"></line>
    </svg>
  );

  const editIcon = (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      stroke-width="2"
      stroke-linecap="round"
      stroke-linejoin="round"
    >
      <line x1="18" y1="2" x2="22" y2="6"></line>
      <path d="M7.5 20.5 19 9l-4-4L3.5 16.5 2 22z"></path>
    </svg>
  );

  //..................................................

  const [changedTodoList, setChangedTodoList] = useState(props.todoList);
  const [checkList, setCheckList] = useState([]);
  const [editingItem, setEditingItem] = useState(null);
  const [itemInput, setItemInput] = useState();

  //..................................................

  useEffect(() => {
    setChangedTodoList(props.todoList);
    console.log(changedTodoList);
  }, [props.todoList.length]);

  const itemChanging = function (e) {
    setItemInput(e.target.value);
  };

  //..................................................

  const deleteButton = function (item) {
    setChangedTodoList(props.todoList.filter((i) => i.id !== item.id));
  };

  useEffect(() => {
    props.getChangedTodoList(changedTodoList);
  }, [changedTodoList]);

  //..................................................

  const checkButton = (item) => {
    /*if (changedTodoList.length === 0) {
      props.todoList.map((i) =>
        i.id === item.id ? (i.complete = !i.complete) : null
      );
    
    setChangedTodoList(props.todoList);
      console.log(changedTodoList);
    } */

    changedTodoList.map((i) =>
      i.id === item.id ? (i.complete = !i.complete) : null
    );
    setChangedTodoList(changedTodoList);
    props.getChangedTodoList(changedTodoList);
    console.log(changedTodoList);
    setCheckList(changedTodoList.map((i) => i.complete));
    console.log(checkList);
  };

  useEffect(() => {
    props.getChangedTodoList(changedTodoList);
    console.log(changedTodoList);
  }, [changedTodoList]);

  //..................................................

  const editButton = (item) => {
    /*changedTodoList.map((i) =>
      i.id === item.id
        ? (i.editingMode === true,
          setEditingItem(i),
          setItemInput(itemInput),
          console.log(i))
        : (i.editingMode = false)
    );*/

    changedTodoList.map((i) => {
      if (i.id === item.id && i.editingMode === false) {
        console.log(i);
        i.editingMode = true;
        setEditingItem(i);
        setItemInput(i.task);
      } else if (i.id === item.id && i.editingMode === true) {
        item.task = itemInput;
        i.editingMode = false;
        setEditingItem(null);
      } else if (i.id !== item.id) {
        i.editingMode = false;
      }
    });
    /*changedTodoList.map((i) =>
      i.id === item.id ? setItemInput(i.task) : null
    );*/

    /*if (!editingItem) {
      let a = changedTodoList.find((i) => (i.editingMode = true ? i : null));
      console.log(a);
      setItemInput(a.task);
    } else {
      item.task = itemInput;
      setEditingItem(null);
      changedTodoList.map((i) =>
        i.id === item.id ? (i.editingMode = false) : null
      );
    }*/

    /*changedTodoList.map((i) => {
      if (!i.editingMode && i.id === item.id) {
        console.log(item.task);

        //i.task = i.editingMode ? itemInput : i.task;91
      } else if (i.editingMode && i.id === item.id) {
        setItemInput(i.task);
      }
    });*/

    console.log(itemInput);

    console.log(editingItem);

    setChangedTodoList(changedTodoList);
    props.getChangedTodoList(changedTodoList);
    console.log(changedTodoList);
    /*setEditList(changedTodoList.map((i) => i.editingMode));
    console.log(editList);*/
    //props.setEditingItem(null)

    /*changedTodoList.map((i) => {
      i.id === item.id
        ? (i.editingMode = !i.editingMode)
        : (i.editingMode = false);
    });

    setChangedTodoList(changedTodoList);
    props.getChangedTodoList(changedTodoList);
    console.log(changedTodoList);*/
  };

  //..................................................

  //..................................................

  return (
    <div>
      {props.todoList.map((item, index) => (
        <div>
          <div className={classes.wrapper}>
            <div className={classes.task}>
              {!item.editingMode ? (
                <p
                  className={item.complete ? classes.checkedTask : classes.task}
                >{`${index + 1}. ${item.task}`}</p>
              ) : (
                <input
                  className={classes.editingModeTask}
                  value={itemInput}
                  onChange={itemChanging}
                />
              )}
            </div>

            <button
              className={item.editingMode ? classes.editingMode : classes.edit}
              onClick={() => editButton(item)}
            >
              {editIcon}
            </button>

            <button
              className={item.complete ? classes.checked : classes.check}
              onClick={() => checkButton(item)}
            >
              {checkIcon}
            </button>
            <button
              className={classes.delete}
              onClick={() => deleteButton(item)}
            >
              {trashIcon}
            </button>
          </div>
          <hr className={classes.line} />
        </div>
      ))}
    </div>
  );
};

export default Item;
