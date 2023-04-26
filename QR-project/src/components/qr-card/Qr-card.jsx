import QrCode from "./QRCode.jpeg";

function Card() {
  return (
    <div className="card">
      <img className="card__img" src={QrCode} alt="QR" />
      <h2 className="card__description">
        Inprove your front-end skills by building projects
      </h2>
      <p className="card__text">
        Scan the QR code to visit Frontend Mentor and take your coding skills to
        the next level
      </p>
    </div>
  );
}

export default Card;