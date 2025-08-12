import React from "react";
import doastyle from "./doastyle.module.css";
import doabg from "../assets/bgdoa.png";

class DoaComponent extends React.Component {
  render() {
    return (
      <div className={doastyle.header}>
        <div className={doastyle.overlaydoa}></div>

        <div className={doastyle.doacontent}>
          <div className={doastyle.topcontent}>
            <h2 className={doastyle.doatext}>
              “And among Allah signs is that Allah created for you from
              yourselves spouses that you may find tranquility in them; and
              Allah placed between you affection and mercy. Indeed, in that are
              signs for a people who give thought.”
            </h2>
            <h1 className={doastyle.doatitle}>QS. Ar-Rum: 21</h1>
          </div>
          <img className={doastyle.image} src={doabg}></img>
        </div>
      </div>
    );
  }
}

export default DoaComponent;
