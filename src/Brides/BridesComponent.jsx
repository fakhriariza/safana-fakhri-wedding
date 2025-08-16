import React from "react";
import bridesstyle from "./brides.module.css";
import instagramLogo from "../assets/instagram_logo.png";
import bridesprofil from "../assets/bridespic.jpg";
import GroomsComponent from "../Grooms/GroomsComponent";
import "animate.css";
import classNames from "classnames";

class BridesComponent extends React.Component {
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
          <h1
            className={classNames(
              bridesstyle.title,
              "animate__animated",
              "animate__fadeIn",
              "animate__delay-4s"
            )}
          >
            The Wedding of
          </h1>
          {/* <h2
            className={classNames(
              bridesstyle.subtitle,
              "animate__animated",
              "animate__fadeIn",
              "animate__delay-4s"
            )}
          >
            With the blessing of the almighty Allah S.W.T., it would be our
            utmost joy to have your presence bestowed upon our cherished wedding
            of
          </h2> */}
          <div
            className={classNames(
              bridesstyle.content,
              "animate__animated",
              "animate__fadeIn",
              "animate__delay-5s"
            )}
          >
            <div className={bridesstyle.imagewrapper}>
              <img
                src={bridesprofil}
                className={bridesstyle.image}
                alt="bride"
              />
              <div className={bridesstyle.sunOverlay}></div>

              <h1 className={bridesstyle.bridesTitle}>THE BRIDE</h1>

              <div className={bridesstyle.bridescontent}>
                <p className={bridesstyle.birth}>27 APRIL 1999</p>
                <h2 className={bridesstyle.fullname}>
                  Safana Salsabila Wicaksono
                </h2>
                <p className={bridesstyle.desc}>
                  PUTRI KELIMA DARI BPK. SONNY WICAKSONO & IBU KRISSANTIANA
                </p>
                {/* <p className={bridesstyle.parent}>
                  Sonny Wicaksono & Krissantiana
                </p> */}
              </div>
            </div>
          </div>
          <GroomsComponent
            className={classNames(
              bridesstyle.grooms,
              "animate__animated",
              "animate__fadeIn",
              "animate__delay-6s",
              "animate__hidden"
            )}
          />
        </div>
      </div>
    );
  }
}

export default BridesComponent;
