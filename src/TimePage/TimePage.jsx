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
    this.interval = setInterval(() => this.updateCountdown(), 1000);
  }

  componentWillUnmount() {
    clearInterval(this.interval);
  }

  updateCountdown = () => {
    const targetDate = new Date("2025-08-31T07:30:00+07:00"); // 14:30 WIB = 07:30 UTC
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
        <div className={doastyle.doacontent}>
          <div style={{ position: "relative", marginBottom: "20px" }}></div>

          <h3 className={doastyle.doatitle} style={{ marginBottom: "10px" }}>
            Countdown
          </h3>
          <p className={doastyle.doatext}>{this.state.countdownText}</p>
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
