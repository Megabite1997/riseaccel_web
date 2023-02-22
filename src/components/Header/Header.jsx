import React, { useRef } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { solid } from "@fortawesome/fontawesome-svg-core/import.macro";

import logofull from "../../assets/images/logo-full.png";
import profile from "../../assets/images/profile.png";

const Header = () => {
  const navRef = useRef();
  const chevronUpRef = useRef();
  const chevronDownRef = useRef();

  const showNavbar = () => {
    navRef.current.classList.toggle("active");
  };

  const showSelector = () => {
    chevronUpRef.current.classList.toggle("active");
    chevronDownRef.current.classList.toggle("inactive");
  };

  return (
    <div className="header">
      <div className="logo">
        <img src={logofull} alt="logo and name" />
      </div>

      <button className="hamburger" onClick={showNavbar}>
        <FontAwesomeIcon icon={solid("bars")} />
      </button>

      <nav className="nav-bar" ref={navRef}>
        <ul>
          <li>
            <a href="/">Explore products</a>
          </li>
          <li>
            <a href="/">Product design</a>
          </li>
          <li>
            <a href="/">Pricing</a>
          </li>
        </ul>
      </nav>

      <div className="account">
        <a href="/">Logout</a>
        <div className="profile">
          <img src={profile} alt="profile" />
        </div>
        <button
          className="chevron-down"
          ref={chevronDownRef}
          onClick={showSelector}
        >
          <FontAwesomeIcon icon={solid("chevron-down")} />
        </button>

        <button
          className="chevron-up"
          ref={chevronUpRef}
          onClick={showSelector}
        >
          <FontAwesomeIcon icon={solid("chevron-up")} />
        </button>
      </div>
    </div>
  );
};

export default Header;
