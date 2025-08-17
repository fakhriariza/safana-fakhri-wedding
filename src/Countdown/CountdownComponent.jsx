import React, { Component } from "react";
import style from "./countdown.module.css";
import AOS from "aos";
import "aos/dist/aos.css";
import TimePage from "../TimePage/TimePage";

class CountdownComponent extends Component {
  componentDidMount() {
    AOS.init({
      duration: 1000,
      once: false, // allows animations to repeat on scroll
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
              Countdown
            </h2>
            <div data-aos="zoom-in" data-aos-delay="400">
              <TimePage />
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default CountdownComponent;
