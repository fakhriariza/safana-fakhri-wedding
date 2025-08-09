import React from "react";
import style from "./grooms.module.css";
import instagramLogo from "../assets/instagram_logo.png";

class GroomsComponent extends React.Component {
  render() {
    return (
      <div className={style.headerwrapper}>
        <div className={style.header}>
          <div className={style.overlaybrides}></div>
          <div className={style.content}>
            <h1 className={style.name}>Fakhri</h1>
            <div className={style.bridescontent}>
              <h2 className={style.fullname}>Muhammad Fakhri Dwi Ariza</h2>
              <p className={style.desc}>Putra Kedua Dari:</p>
              <p className={style.parent}>
                Alm. M. Janiarto Arie Koesoemo & Siti Zaleha
              </p>
              <div className={style.instagramsec}></div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default GroomsComponent;
