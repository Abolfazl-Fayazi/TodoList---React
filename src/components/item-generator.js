import React from "react";

import { useState } from "react";
import classes from "./item-generator.module.css";

//-----------------------------------------------------------------------------

const ItemGenerator = function (props) {
  //..................................................

  //..................................................

  const inputChanging = function (e) {
    props.setInput(e.target.value);
  };

  //..................................................

  return (
    <div>
      <form className={classes.wrapper} onSubmit={props.adderButton}>
        <input
          type="text"
          className={classes.input}
          placeholder="Enter a new task . . ."
          onChange={inputChanging}
          value={props.input}
        />
        <button type="submit" className={classes.button}>
          +
        </button>
      </form>
      <hr className={classes.line} />
    </div>
  );
};

export default ItemGenerator;
