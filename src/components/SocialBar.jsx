// src/components/SocialBar.jsx
import React from "react";
import githubIcon from "../assets/gh-icon.png";
const SocialBar = () => {
  return (
    <div className="social-bar social-bar--left">
      <ul>
        <li>
          <a
            href="https://github.com/alanelihu1905"
            target="_blank"
            rel="noreferrer"
            aria-label="GitHub"
            className="icon-button"
          >
            <img
              src={githubIcon}
              alt="GitHub"
              className="icon-button__img"
            />
          </a>
        </li>
      </ul>
      <div className="social-bar__line" />
    </div>
  );
};

export default SocialBar;
