import React from "react";
import bridesstyle from "./grooms.module.css";
import instagramLogo from "../assets/instagram_logo.png";
import groompic from "../assets/groomspic.jpeg";
import "animate.css";
import classNames from "classnames";

class GroomsComponent extends React.Component {
  render() {
    return (
      <div
        className={classNames(
          bridesstyle.headerwrapper,
          "animate__animated",
          "animate__fadeInDown",
          "animate__delay-3s"
        )}
      >
        <div className={classNames(bridesstyle.header)}>
          <div className={bridesstyle.overlaybrides}></div>
          <div
            className={classNames(
              bridesstyle.content,
              "animate__animated",
              "animate__fadeIn",
              "animate__delay-5s"
            )}
          >
            <div className={bridesstyle.imagewrapper}>
              <img src={groompic} className={bridesstyle.image} alt="bride" />
              <div className={bridesstyle.sunOverlay}></div>

              <h1 className={bridesstyle.bridesTitle}>THE GROOM</h1>

              <div className={bridesstyle.bridescontent}>
                <p className={bridesstyle.birth}>14 NOVEMBER 1998</p>
                <h2 className={bridesstyle.fullname}>
                  Muhammad <br></br>Fakhri <br></br>Dwi Ariza
                </h2>
                <p className={bridesstyle.desc}>
                  PUTRA KEDUA DARI <br></br> ALM. BPK. MUHAMMAD <br></br>
                  JANIARTO ARIE <br></br>KOESOEMO & IBU <br></br>SITI ZALEHA
                </p>
                {/* <p className={bridesstyle.parent}>
                  Sonny Wicaksono & Krissantiana
                </p> */}
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default GroomsComponent;
