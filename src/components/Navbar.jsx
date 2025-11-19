// src/components/Navbar.jsx
import React from "react";

const NAV_ITEMS = [
  { id: "about", index: "01.", label: "Sobre mí" },
  { id: "projects", index: "02.", label: "Proyectos" },
  { id: "contact", index: "03.", label: "Contacto" },
];

const Navbar = () => {
  const handleScroll = (id) => {
    const el = document.getElementById(id);
    if (!el) return;
    el.scrollIntoView({ behavior: "smooth" });
  };

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  return (
    <header className="navbar">
      <div className="navbar__inner">
        {/* LOGO: ahora sí sube al inicio */}
        <button
          className="navbar__logo"
          onClick={scrollToTop}
          aria-label="Ir al inicio"
        >
          AFD
        </button>

        {/* LINKS */}
        <nav className="navbar__nav" aria-label="Navegación principal">
          <ul>
            {NAV_ITEMS.map((item) => (
              <li key={item.id}>
                <button
                  className="navbar__link"
                  onClick={() => handleScroll(item.id)}
                >
                  <span className="navbar__link-index">{item.index}</span>
                  <span>{item.label}</span>
                </button>
              </li>
            ))}
          </ul>
        </nav>
      </div>
    </header>
  );
};

export default Navbar;