import React from "react";
import style from "./dresscode.module.css";
import doabg from "../assets/bgdoa.jpg";
import dc from "../assets/dc.png";

class DresscodeComponent extends React.Component {
  render() {
    return (
      <div className={style.header}>
        <div className={style.overlaydoa}></div>

        <div className={style.doacontent}>
          <div className={style.topcontent}>
            <h2 className={style.doatitle}>Dresscode</h2>
            <img className={style.image} src={dc}></img>
            <h1 className={style.doatext}>
              Your presence in black colors would beautifully harmonize with the
              theme of our celebration
            </h1>
          </div>
        </div>
      </div>
    );
  }
}

export default DresscodeComponent;
