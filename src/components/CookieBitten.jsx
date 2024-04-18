import CookieBittenImg from "../assets/cookie-bitten.png";

export default function CookieBitten() {
  return (
    <div className="cookie-bitter-container">
      <div className="cookie-bitten-img">
        <img src={CookieBittenImg} alt="img" />
      </div>
      <div className="cookie-bitten-text">
        <h2>CookieBitten</h2>
        <p>
        A mini-game that is integrated into<br/>telegram. To participate in the AirDrop,<br/>with a prize pool of $100,000.
        </p>
      </div>
    </div>
  );
}
