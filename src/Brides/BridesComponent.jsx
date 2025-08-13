import React from "react";
import bridesstyle from "./brides.module.css";
import instagramLogo from "../assets/instagram_logo.png";
import bridesprofil from "../assets/safana.png";
import GroomsComponent from "../Grooms/GroomsComponent";

class BridesComponent extends React.Component {
  render() {
    return (
      <div className={bridesstyle.headerwrapper}>
        <div className={bridesstyle.header}>
          <div className={bridesstyle.overlaybrides}></div>
          <h1 className={bridesstyle.title}>The Wedding of</h1>
          <h2 className={bridesstyle.subtitle}>
            With the blessing of the almighty Allah S.W.T., it would be our
            utmost joy to have your presence bestowed upon our cherished wedding
            of
          </h2>
          <div className={bridesstyle.content}>
            <img src={bridesprofil} className={bridesstyle.image}></img>
            <h1 className={bridesstyle.name}>Safana</h1>
            <div className={bridesstyle.bridescontent}>
              <h2 className={bridesstyle.fullname}>
                Safana Salsabila Wicaksono
              </h2>
              <p className={bridesstyle.desc}>Putri Kelima Dari:</p>
              <p className={bridesstyle.parent}>
                Sonny Wicaksono & Krissantiana
              </p>
            </div>
          </div>
          <GroomsComponent />
        </div>
      </div>
    );
  }
}

export default BridesComponent;
