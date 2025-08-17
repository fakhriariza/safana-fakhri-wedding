import React, { Component } from "react";
import bridesstyle from "./grooms.module.css";
import groompic from "../assets/fakhrifotopic1.png";
import classNames from "classnames";
import AOS from "aos";
import "aos/dist/aos.css";

class GroomsComponent extends Component {
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
      <div className={bridesstyle.headerwrapper}>
        <div className={bridesstyle.header}>
          <div className={bridesstyle.overlaybrides}></div>

          <div
            className={bridesstyle.content}
            data-aos="fade-up"
            data-aos-delay="300"
          >
            <div className={bridesstyle.imagewrapper}>
              <img
                src={groompic}
                className={bridesstyle.image}
                alt="groom"
                data-aos="zoom-in"
                data-aos-delay="400"
              />
              <div
                className={bridesstyle.sunOverlay}
                data-aos="fade-in"
                data-aos-delay="500"
              ></div>

              <h1
                className={bridesstyle.bridesTitle}
                data-aos="fade-up"
                data-aos-delay="600"
              >
                THE GROOM
              </h1>

              <div className={bridesstyle.bridescontent}>
                <p
                  className={bridesstyle.birth}
                  data-aos="fade-up"
                  data-aos-delay="700"
                >
                  14 NOVEMBER 1998
                </p>
                <h2
                  className={bridesstyle.fullname}
                  data-aos="fade-up"
                  data-aos-delay="800"
                >
                  Muhammad <br /> Fakhri <br /> Dwi Ariza
                </h2>
                <p
                  className={bridesstyle.desc}
                  data-aos="fade-up"
                  data-aos-delay="900"
                >
                  2nd Son of <br></br>(Alm) Mr. Muhammad Janiarto<br></br> Arie
                  Koesoemo
                  <br></br>& Mrs. Siti Zaleha
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default GroomsComponent;
