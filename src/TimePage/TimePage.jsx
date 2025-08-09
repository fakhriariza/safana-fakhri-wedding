import React from "react";
import doastyle from "./timepage.module.css";

class TimePage extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      countdownText: "",
    };
  }

  componentDidMount() {
    this.updateCountdown();
    this.interval = setInterval(this.updateCountdown, 1000);
  }

  componentWillUnmount() {
    clearInterval(this.interval);
  }

  updateCountdown = () => {
    const targetDate = new Date("2025-07-05T15:30:00");
    const now = new Date();
    const diff = targetDate - now;

    if (diff <= 0) {
      this.setState({ countdownText: "It's time!" });
      clearInterval(this.interval);
      return;
    }

    const days = Math.floor(diff / (1000 * 60 * 60 * 24));
    const hours = Math.floor((diff / (1000 * 60 * 60)) % 24);
    const mins = Math.floor((diff / (1000 * 60)) % 60);
    const secs = Math.floor((diff / 1000) % 60);

    this.setState({
      countdownText: `${days} Days ${hours} Hrs ${mins} Mins ${secs} Sec To Go`,
    });
  };

  render() {
    return (
      <div className={doastyle.header}>
        <div className={doastyle.overlaydoa}></div>

        <div className={doastyle.doacontent}>
          {/* Intro text */}
          <p className={doastyle.doatext}>
            With joy and gratitude in our hearts, we invite you to
          </p>

          {/* Title */}
          <h1 className={doastyle.doatitle}>The Moment We've Dreamed Of</h1>

          {/* Date & frame */}
          <div style={{ position: "relative", marginBottom: "20px" }}>
            {/* <img
              alt="Frame"
              style={{
                width: "200px",
                display: "block",
                margin: "0 auto",
              }}
            /> */}

            <h3
              style={{
                position: "absolute",
                top: "50%",
                left: "50%",
                transform: "translate(-50%, -50%)",
                fontSize: "1.2rem",
                textAlign: "center",
                margin: 0,
              }}
            >
              Sunday <br /> 31 August <br /> 2025
            </h3>

            {/* <img
              alt="Background Frame"
              style={{
                width: "250px",
                display: "block",
                margin: "10px auto 0 auto",
              }}
            /> */}
          </div>

          {/* Countdown title */}
          <h3 className={doastyle.doatitle} style={{ marginBottom: "10px" }}>
            Countdown
          </h3>

          {/* Countdown text */}
          <p className={doastyle.doatext}>{this.state.countdownText}</p>

          {/* Add to Calendar Button */}
          <a
            href="https://calendar.google.com/calendar/u/0/r/eventedit?text=Safana+%26+Fakhri+Wedding+Invitation&dates=20250831T003000Z/20250831T060000Z&details=Dengan+bahagia+kami+mengundang+Anda+ke+pernikahan+kami.&location=graha+bhima+sakti"
            target="_blank"
            rel="noopener noreferrer"
            className={doastyle.download_button}
            style={{
              display: "inline-block",
              marginTop: "20px",
              padding: "10px 20px",
              backgroundColor: "#fff",
              color: "#000",
              borderRadius: "8px",
              fontWeight: "bold",
              textDecoration: "none",
            }}
          >
            Add to Calendar
          </a>
        </div>
      </div>
    );
  }
}

export default TimePage;
