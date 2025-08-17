import React from "react";
import "./headerstyle.css";
import logo from "../assets/logowed.png";
import AOS from "aos";
import "aos/dist/aos.css";

class ThankyouComponent extends React.Component {
  componentDidMount() {
    AOS.init({
      duration: 1200,
      easing: "ease-out-cubic",
      once: true,
    });
  }

  render() {
    const { onOpen, guestData, isOpened } = this.props;

    return (
      <div className="wedding-header">
        <div className="overlay"></div>

        <div className="header-content">
          <div className="header-top">
            <img
              className="logo"
              src={logo}
              alt="Logo"
              data-aos="zoom-in"
              data-aos-delay="200"
            />

            <h1 className="title" data-aos="flip-left" data-aos-delay="400">
              Thank You!
            </h1>

            <p className="subtitle" data-aos="fade-up" data-aos-delay="600">
              We appreciate your presence and blessings on our special day.
            </p>
          </div>
        </div>
      </div>
    );
  }
}

export default ThankyouComponent;
