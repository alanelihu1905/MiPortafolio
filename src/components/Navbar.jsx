// src/components/Navbar.jsx
import React, { useState } from "react";

const Navbar = () => {
  const [open, setOpen] = useState(false);

  const handleScroll = (id) => {
    const el = document.getElementById(id);
    if (!el) return;
    el.scrollIntoView({ behavior: "smooth" });
    setOpen(false);
  };

  return (
    <header className="navbar">
      <div className="navbar__inner">
        <button
          className="navbar__logo"
          onClick={() => handleScroll("hero")}
          aria-label="Ir al inicio"
        >
          AFD
        </button>

        <nav className="navbar__nav">
          <ul>
            <li>
              <button
                className="navbar__link"
                onClick={() => handleScroll("about")}
              >
                <span className="navbar__link-index">01.</span>
                <span>Sobre mí</span>
              </button>
            </li>
            <li>
              <button
                className="navbar__link"
                onClick={() => handleScroll("projects")}
              >
                <span className="navbar__link-index">02.</span>
                <span>Proyectos</span>
              </button>
            </li>
            <li>
              <button
                className="navbar__link"
                onClick={() => handleScroll("contact")}
              >
                <span className="navbar__link-index">03.</span>
                <span>Contacto</span>
              </button>
            </li>
          </ul>
        </nav>

        <button
          className="navbar__burger"
          onClick={() => setOpen((v) => !v)}
          aria-label="Abrir menú"
        >
          <span />
          <span />
        </button>
      </div>

      {open && (
        <div className="navbar__mobile-menu">
          <ul>
            <li>
              <button
                className="navbar__mobile-link"
                onClick={() => handleScroll("about")}
              >
                01. Sobre mí
              </button>
            </li>
            <li>
              <button
                className="navbar__mobile-link"
                onClick={() => handleScroll("projects")}
              >
                02. Proyectos
              </button>
            </li>
            <li>
              <button
                className="navbar__mobile-link"
                onClick={() => handleScroll("contact")}
              >
                03. Contacto
              </button>
            </li>
          </ul>
        </div>
      )}
    </header>
  );
};

export default Navbar;