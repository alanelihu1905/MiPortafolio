import React, { useState } from "react";

const navLinks = [
  { label: "01. Sobre mí", href: "#about" },
  { label: "02. Proyectos", href: "#projects" },
  { label: "03. Contacto", href: "#contact" },
];

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const handleNavClick = (href) => {
    setIsOpen(false);
    const section = document.querySelector(href);
    if (section) {
      section.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <header className="navbar">
      <div className="navbar__inner">
        <div className="navbar__logo" onClick={() => handleNavClick("#home")}>
          <span>AC</span>
        </div>

        <nav className="navbar__nav">
          <ul>
            {navLinks.map((link) => (
              <li key={link.href}>
                <button
                  className="navbar__link"
                  onClick={() => handleNavClick(link.href)}
                >
                  <span className="navbar__link-index">
                    {link.label.split(".")[0]}.
                  </span>
                  <span className="navbar__link-text">
                    {link.label.split(". ")[1]}
                  </span>
                </button>
              </li>
            ))}
          </ul>
        </nav>

        <button
          className="navbar__burger"
          onClick={() => setIsOpen((prev) => !prev)}
          aria-label="Abrir menú de navegación"
        >
          <span />
          <span />
          <span />
        </button>

        {isOpen && (
          <div className="navbar__mobile-menu">
            <ul>
              {navLinks.map((link) => (
                <li key={link.href}>
                  <button
                    className="navbar__mobile-link"
                    onClick={() => handleNavClick(link.href)}
                  >
                    <span className="navbar__link-index">
                      {link.label.split(".")[0]}.
                    </span>
                    <span className="navbar__link-text">
                      {link.label.split(". ")[1]}
                    </span>
                  </button>
                </li>
              ))}
            </ul>
          </div>
        )}
      </div>
    </header>
  );
};

export default Navbar;
