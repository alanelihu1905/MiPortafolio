import React from "react";

const SocialBar = () => {
  return (
    <div className="social-bar social-bar--left">
      <ul>
        <li>
          <a
            href="https://github.com/tu-usuario"
            target="_blank"
            rel="noreferrer"
            aria-label="GitHub"
          >
            <i className="icon icon-github" />
          </a>
        </li>
        <li>
          <a
            href="https://www.linkedin.com/in/tu-perfil"
            target="_blank"
            rel="noreferrer"
            aria-label="LinkedIn"
          >
            <i className="icon icon-linkedin" />
          </a>
        </li>
      </ul>
      <div className="social-bar__line" />
    </div>
  );
};

export default SocialBar;
