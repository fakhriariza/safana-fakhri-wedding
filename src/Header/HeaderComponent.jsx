import React from "react";
import "./headerstyle.css";

class HeaderComponent extends React.Component {
  render() {
    return (
      <div className="wedding-header">
        <div className="overlay"></div>

        <div className="header-content">
          <h2 className="subtitle">The Wedding Of</h2>
          <h1 className="title">Safana &amp; Fakhri</h1>

          <p className="greeting">Dear,</p>
          <p className="guest">Aldo Setiadi & Mutiara</p>

          <a href="#" className="invitation-button">
            OPEN INVITATION
          </a>
        </div>
      </div>
    );
  }
}

export default HeaderComponent;
