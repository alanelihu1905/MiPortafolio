import React from "react";

const Hero = () => {
  return (
    <section className="hero">
      <p className="hero__eyebrow">Hola, mi nombre es</p>
      <h1 className="hero__title">Tu Nombre Aquí</h1>
      <h2 className="hero__subtitle">Construyo cosas para la web.</h2>
      <p className="hero__description">
        Soy estudiante de ingeniería en tecnología de software y desarrollo
        interfaces web modernas usando <span>React</span> y otras tecnologías
        del ecosistema JavaScript. Me gusta crear experiencias digitales
        limpias, accesibles y enfocadas en el detalle.
      </p>
      <button
        className="hero__cta"
        onClick={() => {
          const section = document.querySelector("#projects");
          if (section) section.scrollIntoView({ behavior: "smooth" });
        }}
      >
        Mira mis proyectos
      </button>
    </section>
  );
};

export default Hero;
