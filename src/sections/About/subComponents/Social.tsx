import React from "react";

// Styles
import "./SocialStyles.css";

const Social = () => (
  <ul className="social-wrapper">
    <li className="social-container">
      <a href="https://github.com/tannaurus" target="_blank" className="social-link">
        <img src="/images/social/github.svg" className="social-icon"/>
      </a>
    </li>
    <li className="social-container">
      <a href="https://twitter.com/tannaurus" target="_blank" className="social-link">
        <img src="/images/social/twitter.svg" className="social-icon"/>
      </a>
    </li>
    <li className="social-container">
      <a href="https://www.linkedin.com/in/tanner-gill/" target="_blank" className="social-link">
        <img src="/images/social/linkedin.svg" className="social-icon"/>
      </a>
    </li>
  </ul>
);

export default Social;