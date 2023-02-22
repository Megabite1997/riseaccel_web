import React from "react";

import logoAlone from "../../assets/images/logo-alone.png";
import facebookLogo from "../../assets/images/facebook-logo.png";
import instagramLogo from "../../assets/images/instagram-logo.png";
import twitterLogo from "../../assets/images/twitter-logo.png";
import youtubeLogo from "../../assets/images/youtube-logo.png";

const Footer = () => {
  return (
    <footer className="footer">
      <div className="logo-with-footer-menu">
        <div className="logo">
          <img src={logoAlone} alt="logo" />
        </div>
        <div className="footer-menu">
          <ul>
            <li>
              <a href="/">Ornare</a>
            </li>
            <li>
              <a href="/">Accumsan</a>
            </li>
            <li>
              <a href="/">Mattis</a>
            </li>
          </ul>
        </div>
      </div>

      <div className="logo-social-media">
        <ul>
          <li>
            <a href="/">
              <img src={facebookLogo} alt="Facebook logo" />
            </a>
          </li>
          <li>
            <a href="/">
              <img src={twitterLogo} alt="Twitter logo" />
            </a>
          </li>
          <li>
            <a href="/">
              <img src={instagramLogo} alt="Instagram logo" />
            </a>
          </li>
          <li>
            <a href="/">
              <img src={youtubeLogo} alt="Youtube logo" />
            </a>
          </li>
        </ul>
      </div>
    </footer>
  );
};

export default Footer;
