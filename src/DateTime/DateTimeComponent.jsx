import React from "react";
import style from "./datetime.module.css";
import instagramLogo from "../assets/instagram_logo.png";
import bridesprofil from "../assets/safana.png";
import GroomsComponent from "../Grooms/GroomsComponent";
import TimePage from "../TimePage/TimePage";
const MAPS_URL = "https://maps.app.goo.gl/EUkkdefA9WDoSYvx9";

class DateTimeComponent extends React.Component {
  render() {
    return (
      <div className={style.headerwrapper}>
        <div className={style.header}>
          <div className={style.overlaybrides}></div>
          <div className={style.content}>
            <div className={style.bridescontent}>
              <div className={style.acaraContainer}>
                <div className={style.acaraBox}>
                  <div className={style.boxtop}>
                    <h2 className={style.acaraTitle}>Akad Nikah</h2>
                    <p className={style.acaraDetail}>
                      Sunday, August 31st 2025
                    </p>
                    <p className={style.acaraDetail}>
                      Graha Bhima Sakti, Pancoran
                    </p>
                    <a
                      href={MAPS_URL}
                      target="_blank"
                      rel="noopener noreferrer"
                      className={style.mapButton}
                    >
                      <span className={style.mapIcon} aria-hidden="true">
                        📍
                      </span>
                      <span>Open Maps</span>
                    </a>

                    <p className={style.acaraTime}>07.30 WIB - Selesai</p>
                  </div>
                  <hr className={style.acaraSeparator} />
                  <div className={style.boxbottom}>
                    <h2 className={style.acaraTitle}>Resepsi</h2>
                    <p className={style.acaraDetail}>
                      Sunday, August 31st 2025
                    </p>
                    <p className={style.acaraDetail}>
                      Graha Bhima Sakti, Pancoran
                    </p>
                    <a
                      href={MAPS_URL}
                      target="_blank"
                      rel="noopener noreferrer"
                      className={style.mapButton}
                    >
                      <span className={style.mapIcon} aria-hidden="true">
                        📍
                      </span>
                      <span>Open Maps</span>
                    </a>
                    <p className={style.acaraTime}>10.30 - 13.00 WIB</p>
                  </div>
                  <TimePage />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default DateTimeComponent;
