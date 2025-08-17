import React, { Component } from "react";
import style from "./dresscode.module.css";
import doabg from "../assets/bgdoa.jpg";
import dc from "../assets/dc.png";
import AOS from "aos";
import "aos/dist/aos.css";

class DresscodeComponent extends Component {
  componentDidMount() {
    AOS.init({
      duration: 1000,
      once: false, // animations repeat on scroll
    });

    setTimeout(() => {
      AOS.refreshHard();
    }, 100);
  }

  render() {
    return (
      <div className={style.header} data-aos="fade-up">
        <div
          className={style.overlaydoa}
          data-aos="fade-in"
          data-aos-delay="100"
        ></div>

        <div
          className={style.doacontent}
          data-aos="fade-up"
          data-aos-delay="200"
        >
          <div className={style.topcontent}>
            <h2
              className={style.doatitle}
              data-aos="fade-down"
              data-aos-delay="300"
            >
              Dresscode
            </h2>
            <img
              className={style.image}
              src={dc}
              alt="Dresscode"
              data-aos="zoom-in"
              data-aos-delay="400"
            />
            <h1
              className={style.doatext}
              data-aos="fade-up"
              data-aos-delay="500"
            >
              Your presence in black would beautifully harmonize with the theme
              of our celebration
            </h1>
          </div>
        </div>
      </div>
    );
  }
}

export default DresscodeComponent;
