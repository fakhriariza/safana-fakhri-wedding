import React from "react";
import QRCode from "qrcode";
import qr from "./qr.module.css";
import AOS from "aos";
import "aos/dist/aos.css";

class QRComponent extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      qrDataUrl: null,
    };
  }

  componentDidMount() {
    // Initialize AOS with custom settings
    AOS.init({ duration: 1200, once: false, easing: "ease-in-out-back" });
    AOS.refresh();

    const { invitationId } = this.props;

    if (invitationId) {
      QRCode.toDataURL(invitationId, { width: 200, margin: 2 })
        .then((url) => {
          this.setState({ qrDataUrl: url });
        })
        .catch((err) => {
          console.error("Error generating QR Code:", err);
        });
    }
  }

  downloadQR = () => {
    const { qrDataUrl } = this.state;
    const { invitationId } = this.props;

    if (!qrDataUrl) return;

    const link = document.createElement("a");
    link.href = qrDataUrl;
    link.download = `qr_invitation_${invitationId}.png`;
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  render() {
    const { qrDataUrl } = this.state;
    const { invitationId } = this.props;

    if (!invitationId) return null;

    return (
      <div className={qr.header}>
        <div className={qr.overlaydoa}></div>

        <div className={qr.doacontent}>
          <h1 data-aos="flip-left" data-aos-delay="100" className={qr.doatitle}>
            Invitation <br /> QR Code
          </h1>

          {qrDataUrl && (
            <img
              data-aos="zoom-in-up"
              data-aos-delay="300"
              data-aos-duration="1500"
              src={qrDataUrl}
              alt="QR Code"
              className={qr.qr_code}
            />
          )}

          <p
            data-aos="slide-right"
            data-aos-delay="500"
            data-aos-duration="1200"
            className={qr.doatext}
          >
            This QR Code is your personal invitation. Please have it ready to
            show at the entrance upon arrival.
          </p>

          <button
            data-aos="flip-up"
            data-aos-delay="700"
            data-aos-duration="1300"
            onClick={this.downloadQR}
            className={qr.download_button}
          >
            Download QR Code
          </button>
        </div>
      </div>
    );
  }
}

export default QRComponent;
