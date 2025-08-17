import React from "react";
import style from "./gift.module.css";
import AOS from "aos";
import "aos/dist/aos.css";

class GiftComponent extends React.Component {
  componentDidMount() {
    AOS.init({
      duration: 1200,
      easing: "ease-out-cubic",
      once: true,
    });
  }

  render() {
    return (
      <div className={style.header}>
        <div className={style.overlaydoa}></div>

        <div className={style.doacontent}>
          <div className={style.topcontent}>
            <h2
              className={style.doatitle}
              data-aos="fade-down"
              data-aos-delay="100"
            >
              Gift
            </h2>

            <h1
              className={style.doatext}
              data-aos="fade-up"
              data-aos-delay="300"
            >
              Your blessing and coming to our wedding are enough for us.
              However, if you want to give a gift, we provide a Digital Envelope
              to make it easier for you – thank you!
            </h1>

            <div
              className={style.box}
              data-aos="fade-right"
              data-aos-delay="500"
            >
              <p>"Muhammad Fakhri"</p>
            </div>

            <div
              className={style.box}
              data-aos="fade-left"
              data-aos-delay="700"
            >
              <p>"Safana Salsabila"</p>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default GiftComponent;
