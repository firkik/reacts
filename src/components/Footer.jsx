import { SOCIALS } from "../utils/consts";

export default function Footer() {
  return (
    <footer className="footer">
      <div className="href-container">
        <div className="href-container-01">
          <ul className="cookie-logo">
            <li>
              <h2>Cookies</h2>
            </li>
            <li><h5>This is a meme token created on The Open Network.</h5></li>
          </ul>
          <ul className="contact">
            <li>
              <h3>Contact</h3>
            </li>
            <li>
              <a href={SOCIALS.contact}>TG: @cookietokenmanager</a>
            </li>
          </ul>
        </div>
        <div className="href-container-02">
          <ul>
            <li>
              <a href="#">Whitepaper</a>
            </li>
            <li>
              <a href="#">Tokenomicks</a>
            </li>
          </ul>
          <ul>
            <li>
              <a href="#">Roadmap</a>
            </li>
            <li>
              <a href="#">Main</a>
            </li>
          </ul>
        </div>
      </div>
      <h6>Copyright © 2024. All rights reserved. Cookie group</h6>
    </footer>
  );
}
