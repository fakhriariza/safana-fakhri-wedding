import React, { Component } from "react";
import bridesstyle from "./brides.module.css";
import instagramLogo from "../assets/instagram_logo.png";
import bridesprofil from "../assets/bridespic.jpg";
import GroomsComponent from "../Grooms/GroomsComponent";
import classNames from "classnames";
import AOS from "aos";
import "aos/dist/aos.css";

class BridesComponent extends Component {
  componentDidMount() {
    AOS.init({
      duration: 1000,
      once: false, // animations repeat on scroll
    });

    // Ensure AOS refreshes after DOM is ready
    setTimeout(() => {
      AOS.refreshHard();
    }, 100);
  }

  render() {
    return (
      <div className={bridesstyle.headerwrapper}>
        <div className={bridesstyle.header}>
          <div className={bridesstyle.overlaybrides}></div>

          <h1
            className={bridesstyle.title}
            data-aos="fade-down"
            data-aos-delay="300"
          >
            Let's Meet:
          </h1>

          <div
            className={bridesstyle.content}
            data-aos="fade-up"
            data-aos-delay="500"
          >
            <div className={bridesstyle.imagewrapper}>
              <img
                src={bridesprofil}
                className={bridesstyle.image}
                alt="bride"
                data-aos="zoom-in"
                data-aos-delay="700"
              />
              <div
                className={bridesstyle.sunOverlay}
                data-aos="fade-in"
                data-aos-delay="800"
              ></div>

              <h1
                className={bridesstyle.bridesTitle}
                data-aos="fade-up"
                data-aos-delay="900"
              >
                THE BRIDE
              </h1>

              <div
                className={bridesstyle.bridescontent}
                data-aos="fade-up"
                data-aos-delay="500"
              >
                <p
                  className={bridesstyle.birth}
                  data-aos="fade-up"
                  data-aos-delay="500"
                >
                  27 APRIL 1999
                </p>
                <h2
                  className={bridesstyle.fullname}
                  data-aos="fade-up"
                  data-aos-delay="500"
                >
                  Safana Salsabila Wicaksono
                </h2>
                <p
                  className={bridesstyle.desc}
                  data-aos="fade-up"
                  data-aos-delay="500"
                >
                  5th Daughter of Mr. Sonny Wicaksono & Mrs. Krissantiana
                </p>
              </div>
            </div>
          </div>

          <GroomsComponent
            className={bridesstyle.grooms}
            data-aos="fade-up"
            data-aos-delay="1400"
          />
        </div>
      </div>
    );
  }
}

export default BridesComponent;
