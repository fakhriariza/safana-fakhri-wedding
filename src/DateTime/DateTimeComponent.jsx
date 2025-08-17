import React, { useEffect } from "react";
import style from "./datetime.module.css";
const MAPS_URL = "https://maps.app.goo.gl/EUkkdefA9WDoSYvx9";
import classNames from "classnames";
import AOS from "aos";
import "aos/dist/aos.css";

export default function DateTimeComponent() {
  useEffect(() => {
    AOS.init({
      duration: 1000,
      once: false,
    });
    setTimeout(() => {
      AOS.refreshHard();
    }, 100);
  }, []);

  return (
    <div className={classNames(style.headerwrapper)}>
      <div className={style.header}>
        <div className={style.overlaybrides}></div>
        <div className={style.content}>
          <div className={classNames(style.bridescontent)}>
            <div className={style.acaraContainer}>
              <div className={style.acaraBox}>
                {/* Akad Nikah */}
                <div
                  className={style.boxtop}
                  data-aos="fade-up"
                  data-aos-delay="100"
                >
                  <h2 className={style.acaraTitle}>Akad Nikah</h2>
                  <p className={style.acaraDetail}>
                    • Sunday, August 31st 2025
                  </p>
                  <p className={style.acaraTime}>• 07.30 WIB - 09.30 WIB</p>
                </div>

                <hr
                  className={style.acaraSeparator}
                  data-aos="zoom-in"
                  data-aos-delay="200"
                />

                {/* Resepsi */}
                <div
                  className={style.boxbottom}
                  data-aos="fade-up"
                  data-aos-delay="300"
                >
                  <h2 className={style.acaraTitle}>Resepsi</h2>
                  <p className={style.acaraDetail}>
                    • Sunday, August 31st 2025
                  </p>
                  <p className={style.acaraTime}>• 10.30 - 13.00 WIB</p>
                </div>

                {/* Lokasi */}
                <div
                  className={style.boxVenue}
                  data-aos="fade-up"
                  data-aos-delay="500"
                >
                  <h2 className={style.acaraTitle}>Lokasi</h2>
                  <p className={style.acaraDetail}>
                    Balai Prajurit Graha Bhima Sakti, <br />
                    Pancoran, Jakarta Selatan
                  </p>
                  <a
                    href={MAPS_URL}
                    target="_blank"
                    rel="noopener noreferrer"
                    className={style.mapButton}
                    data-aos="zoom-in"
                    data-aos-delay="700"
                  >
                    <span className={style.mapIcon} aria-hidden="true">
                      📍
                    </span>
                    <span>Open Maps</span>
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
