import { useState, useRef, useEffect } from "react";
import classes from "./item.module.css";

//-----------------------------------------------------------------------------

const Item = function ({ list, setList }) {
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

  const taskText = useRef([]);

  //..................................................

  const Delete = function (id) {
    let newList = list;
    newList.splice(id, 1);
    setList([...newList]);
    taskText.current[id].classList.remove(classes.doneTask);
  };

  const Check = function (id) {
    //taskText.current[id]
    //setDoneTask(!doneTask);
    taskText.current[id].classList.toggle(classes.doneTask);
  };

  //..................................................

  return (
    <div>
      {list.map((i, id) => (
        <div>
          <div className={classes.wrapper}>
            <div
              className={classes.task}
              ref={(txt) => (taskText.current[id] = txt)}
            >
              <p className={classes.taskText}>{`${id + 1}. ${i}`}</p>
            </div>

            <button className={classes.check} onClick={() => Check(id)}>
              {checkIcon}
            </button>
            <button className={classes.delete} onClick={() => Delete(id)}>
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
