import React from "react";
import QRCode from "qrcode";
import qr from "./qr.module.css";

class QRComponent extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      qrDataUrl: null,
    };
  }

  componentDidMount() {
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
          <h1 className={qr.doatitle}>Digital Appointment QR Code</h1>

          {qrDataUrl && (
            <img src={qrDataUrl} alt="QR Code" className={qr.qr_code} />
          )}

          <p className={qr.doatext}>
            This QR Code is your personal invitation. Please have it ready to
            show at the entrance upon arrival.
          </p>

          <button onClick={this.downloadQR} className={qr.download_button}>
            Download QR Code
          </button>
        </div>
      </div>
    );
  }
}

export default QRComponent;
