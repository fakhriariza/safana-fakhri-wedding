import React from "react";
import "./headerstyle.css";
import logo from "../assets/logowed.png";

class ThankyouComponent extends React.Component {
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
        </div>
      </div>
    );
  }
}

export default ThankyouComponent;
