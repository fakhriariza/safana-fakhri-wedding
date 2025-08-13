import React from "react";
import bridesstyle from "./grooms.module.css";
import instagramLogo from "../assets/instagram_logo.png";
import bridesprofil from "../assets/groomssquare.png";

class GroomsComponent extends React.Component {
  render() {
    return (
      <div className={bridesstyle.headerwrapper}>
        <div className={bridesstyle.header}>
          <div className={bridesstyle.overlaybrides}></div>
          <div className={bridesstyle.content}>
            <img src={bridesprofil} className={bridesstyle.image}></img>
            <h1 className={bridesstyle.name}>Fakhri</h1>
            <div className={bridesstyle.bridescontent}>
              <h2 className={bridesstyle.fullname}>
                Muhammad Fakhri Dwi Ariza
              </h2>
              <p className={bridesstyle.desc}>Putra Kedua Dari:</p>
              <p className={bridesstyle.parent}>
                Alm. Muhammad Janiarto Arie Kosoemo & <br></br>Siti Zaleha
              </p>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default GroomsComponent;
