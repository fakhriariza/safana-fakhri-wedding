import React from "react";
import style from "./gift.module.css";
import doabg from "../assets/bgdoa.jpg";
import dc from "../assets/dc.png";

class GiftComponent extends React.Component {
  render() {
    return (
      <div className={style.header}>
        <div className={style.overlaydoa}></div>

        <div className={style.doacontent}>
          <div className={style.topcontent}>
            <h2 className={style.doatitle}>Gift</h2>
            <h1 className={style.doatext}>
              Your blessing and coming to our wedding are enough for us.
              However, if you want to give a gift, we provide a Digital Envelope
              to make it easier for you – thank you!
            </h1>
            <div className={style.box}>
              <p>"Muhammad Fakhri"</p>
            </div>
            <div className={style.box}>
              <p>"Safana Salsabila"</p>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default GiftComponent;
