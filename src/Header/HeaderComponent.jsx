import React from "react";
import "./headerstyle.css";
import logo from "../assets/logowed.png";

class HeaderComponent extends React.Component {
  render() {
    const { onOpen, guestData, isOpened } = this.props;

    return (
      <div className="wedding-header">
        <div className="overlay"></div>

        <div className="header-content">
          <div className="header-top">
            <img className="logo" src={logo} />
            <h2 className="subtitle">The Wedding Of</h2>
            <h1 className="title">Safana &amp; Fakhri</h1>
          </div>

          <div className="header-bottom">
            <p className="greeting">Dear,</p>
            <p className="guest">
              {guestData?.guest_name || "Our Beloved Guest"}
            </p>

            {!isOpened && (
              <a
                href="#"
                className="invitation-button"
                onClick={(e) => {
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
