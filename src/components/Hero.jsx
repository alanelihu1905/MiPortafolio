import React from "react";

const Hero = () => {
  const scrollToProjects = () => {
    const section = document.querySelector("#projects");
    if (section) section.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section className="hero" id="home">
      <div className="hero__left">
        <p className="hero__eyebrow">Hola, mi nombre es</p>
        <h1 className="hero__title">Alan Flores</h1>
        <h2 className="hero__subtitle">Construyo cosas para la web.</h2>
        <p className="hero__description">
          Soy estudiante de ingeniería en tecnología de software y desarrollo
          interfaces web modernas usando <span>React</span> y otras tecnologías
          del ecosistema JavaScript. Me gusta crear experiencias digitales
          limpias, accesibles y enfocadas en el detalle.
        </p>
        <button className="hero__cta" onClick={scrollToProjects}>
          Mira mis proyectos
        </button>
      </div>

      <div className="hero__right">
        <div className="hero-card">
          <p className="hero-card__label">Desarrollador frontend / estudiante</p>
          <h3 className="hero-card__name">Alan Flores</h3>
          <p className="hero-card__tagline">React · JavaScript · CSS</p>
          <ul className="hero-card__chips">
            <li>React</li>
            <li>Vite</li>
            <li>GitHub Pages</li>
            <li>Accesibilidad</li>
          </ul>
        </div>
      </div>
    </section>
  );
};

export default Hero;
