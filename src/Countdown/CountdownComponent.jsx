import React from "react";
import style from "./countdown.module.css";
import doabg from "../assets/bgdoa.jpg";
import dc from "../assets/dc.png";
import TimePage from "../TimePage/TimePage";

class CountdownComponent extends React.Component {
  render() {
    return (
      <div className={style.header}>
        <div className={style.overlaydoa}></div>
        <div className={style.doacontent}>
          <div className={style.topcontent}>
            <h2 className={style.doatitle}>Countdown</h2>
            <TimePage />
          </div>
        </div>
      </div>
    );
  }
}

export default CountdownComponent;
