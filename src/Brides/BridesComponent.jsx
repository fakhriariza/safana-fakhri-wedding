import React from "react";
import bridesstyle from "./brides.module.css";
import instagramLogo from "../assets/instagram_logo.png";

class BridesComponent extends React.Component {
  render() {
    return (
      <div className={bridesstyle.headerwrapper}>
        <div className={bridesstyle.header}>
          <div className={bridesstyle.overlaybrides}></div>
          <div className={bridesstyle.content}>
            <h1 className={bridesstyle.name}>Safana</h1>
            <div className={bridesstyle.bridescontent}>
              <h2 className={bridesstyle.fullname}>
                Safana Salsabila Wicaksono
              </h2>
              <p className={bridesstyle.desc}>Putri Kelima Dari:</p>
              <p className={bridesstyle.parent}>
                Sonny Wicaksono & Krissantiana
              </p>
              <div className={bridesstyle.instagramsec}></div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default BridesComponent;
