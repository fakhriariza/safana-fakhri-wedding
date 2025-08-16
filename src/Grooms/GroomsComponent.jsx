import React from "react";
import bridesstyle from "./grooms.module.css";
import instagramLogo from "../assets/instagram_logo.png";
import bridesprofil from "../assets/groomssquare.png";

class BridesComponent extends React.Component {
  render() {
    return (
      <div className={bridesstyle.headerwrapper}>
        <div className={bridesstyle.header}>
          <div className={bridesstyle.content}>
            <div className={bridesstyle.imagewrapper}>
              <img
                src={bridesprofil}
                className={bridesstyle.image}
                alt="bride"
              />
              <div className={bridesstyle.sunOverlay}></div>

              <div className={bridesstyle.bridescontent}>
                <h2 className={bridesstyle.fullname}>
                  Muhammad Fakhri Dwi Ariza
                </h2>
                <p className={bridesstyle.desc}>Putra Kedua Dari:</p>
                <p className={bridesstyle.parent}>
                  Alm. Muhammad Janiarto Arie Koesoemo & Siti Zaleha
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default BridesComponent;
