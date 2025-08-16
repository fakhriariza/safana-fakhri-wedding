import React from "react";
import style from "./headerstyle.module.css";
import logo from "../assets/logowed.png";
import MusicComponent from "../Music/MusicComponent";

class HeaderComponent extends React.Component {
  render() {
    const { onOpen, guestData, isOpened } = this.props;

    return (
      <div className={style["wedding-header"]}>
        <div className={style.overlay}></div>

        <div className={style["header-content"]}>
          <div className={style["header-top"]}>
            <img className={style.logo} src={logo} alt="Wedding Logo" />
            <h2 className={style.subtitle}>The Wedding Of</h2>
            <h1 className={style.title}>Safana &amp; Fakhri</h1>
          </div>

          <div className={style["header-bottom"]}>
            <p className={style.greeting}>Dear,</p>
            <p className={style.guest}>
              {guestData?.guest_name || "Our Beloved Guest"}
            </p>

            {!isOpened && (
              <a
                href="#"
                className={style["invitation-button"]}
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
