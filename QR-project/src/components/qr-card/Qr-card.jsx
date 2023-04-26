import "./index.css";
import image from "./QRCode.jpeg";

function QrCode() {
  return (
    <>
      <div>
        <img src={image} alt="qr-code" />
      </div>
      <div className="container__card--text">
        <h2>Improve your front-end skills by building projects</h2>
        <p>
          Scan the QR code to visit frontend Mentor and take your coding skills
          to the next level
        </p>
      </div>
    </>
  );
}

export default QrCode;