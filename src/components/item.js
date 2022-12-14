import { useState, useRef, useEffect } from "react";
import classes from "./item.module.css";

//-----------------------------------------------------------------------------

const Item = function ({ list }) {
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

  //..................................................

  //..................................................

  /*const deleteButton = function (id) {
    let neewList = list;
    neewList.splice(id, 1);
    setNewList([...neewList]);
  };*/

  /*const check = function (id) {
    //taskText.current[id]
    //setDoneTask(!doneTask);
  };*/

  //..................................................

  return (
    <div>
      {list.map((item, index) => (
        <div>
          <div className={classes.wrapper}>
            <div className={classes.task}>
              <p className={classes.taskText}>{`${index+1}. ${item.task}`}</p>
            </div>

            <button className={classes.check}>{checkIcon}</button>
            <button className={classes.delete}>{trashIcon}</button>
          </div>
          <hr className={classes.line} />
        </div>
      ))}
    </div>
  );
};

export default Item;
