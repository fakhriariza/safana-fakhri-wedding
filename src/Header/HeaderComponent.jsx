import React from "react";
import style from "./headerstyle.module.css";
import logo from "../assets/logowed.png";
import MusicComponent from "../Music/MusicComponent";
import "animate.css";
import classNames from "classnames";

class HeaderComponent extends React.Component {
  render() {
    const { onOpen, guestData, isOpened } = this.props;

    return (
      <div className={style["wedding-header"]}>
        <div className={style.overlay}></div>

        <div className={style["header-content"]}>
          <div className={style["header-top"]}>
            <img
              className={classNames(
                style.logo,
                "animate__animated",
                "animate__fadeIn",
                "animate__delay-1s"
              )}
              src={logo}
              alt="Wedding Logo"
            />
            <h2
              className={classNames(
                style.subtitle,
                "animate__animated",
                "animate__fadeIn",
                "animate__delay-1s"
              )}
            >
              The Wedding Of
            </h2>
            <h1
              className={classNames(
                style.title,
                "animate__animated",
                "animate__zoomIn",
                "animate__delay-2s"
              )}
            >
              Safana &amp; <br></br>Fakhri
            </h1>
          </div>

          <div className={style["header-bottom"]}>
            <p
              className={classNames(
                style.greeting,
                "animate__animated",
                "animate__fadeInUp",
                "animate__delay-2s"
              )}
            >
              Dear,
            </p>
            <p
              className={classNames(
                style.guest,
                "animate__animated",
                "animate__fadeInUp",
                "animate__delay-2s"
              )}
            >
              {guestData?.guest_name || "Our Beloved Guest"}
            </p>

            {!isOpened && (
              <a
                href="#"
                className={classNames(
                  style["invitation-button"],
                  "animate__animated",
                  "animate__fadeIn",
                  "animate__delay-2s"
                )}
                onClick={(e) => {
                  window.dispatchEvent(new Event("startAudio"));
                  e.preventDefault();
                  if (onOpen) onOpen();
                }}
              >
                OPEN INVITATION
              </a>
            )}
          </div>
        </div>
      </div>
    );
  }
}

export default HeaderComponent;
