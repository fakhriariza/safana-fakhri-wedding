import React from "react";
import doastyle from "./doastyletwo.module.css";
import doabg from "../assets/bgdoa.jpg";
import bgdoasec from "../assets/bgdoasec.png";
import "animate.css";
import classNames from "classnames";

class DoaComponentTwo extends React.Component {
  render() {
    return (
      <div
        className={classNames(
          doastyle.header,
          "animate__animated",
          "animate__fadeIn",
          "animate__delay-1s"
        )}
      >
        <div className={doastyle.overlaydoa}></div>
        <div className={doastyle.doacontent}>
          <div className={doastyle.topcontent}>
            <div
              className={classNames(
                doastyle.textContainer,
                "animate__animated",
                "animate__zoomIn",
                "animate__delay-2s"
              )}
            >
              <h2 className={doastyle.doatext}>
                “And among Allah signs is that Allah created for you from
                yourselves spouses that you may find tranquility in them; and
                Allah placed between you affection and mercy. Indeed, in that
                are signs for a people who give thought.”
              </h2>
              <h1 className={doastyle.doatitle}>QS. Ar-Rum: 21</h1>
            </div>
            <img className={doastyle.images} src={bgdoasec}></img>
          </div>
        </div>
      </div>
    );
  }
}

export default DoaComponentTwo;
