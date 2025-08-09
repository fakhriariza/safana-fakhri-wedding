import React from "react";
import style from "./and.module.css";

class AndComponent extends React.Component {
  render() {
    return (
      <div className={style.header}>
        <div className={style.content}>
          <h1 className={style.title}>&</h1>
        </div>
      </div>
    );
  }
}

export default AndComponent;
