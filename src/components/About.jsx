import React from "react";

const technologies = [
  "HTML",
  "CSS",
  "JavaScript",
  "React",
  "Node.js",
  "Git",
  "GitHub",
  "Vite",
];

const About = () => {
  return (
    <section className="section section--about" id="about">
      <div className="section__header">
        <h2 className="section__title">
          <span className="section__index">01.</span> Sobre mí
        </h2>
        <div className="section__line" />
      </div>

      <div className="about__content">
        <div className="about__text">
          <p>
            Hola, soy <span className="accent">Tu Nombre</span>, estudiante de
            ingeniería en tecnología de software. Me gusta aprender a
            programar, experimentar con nuevas ideas y construir proyectos que
            se sientan rápidos, claros y útiles.
          </p>
          <p>
            Actualmente mi enfoque principal está en{" "}
            <span className="accent">React</span>, creando interfaces
            reactivas, componibles y fáciles de mantener. También disfruto
            trabajar con buenas prácticas de accesibilidad y organización del
            código.
          </p>
          <p>Estas son algunas de las tecnologías con las que he trabajado:</p>

          <ul className="about__tech-grid">
            {technologies.map((tech) => (
              <li key={tech}>
                <span className="about__tech-bullet">▹</span>
                <span className="about__tech-name">{tech}</span>
              </li>
            ))}
          </ul>
        </div>

        <div className="about__image-placeholder">
          <div className="about__image-frame">Tu foto / avatar aquí</div>
        </div>
      </div>
    </section>
  );
};

export default About;
