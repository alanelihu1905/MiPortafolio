import React from "react";
import { featuredProjects, otherProjects } from "../data/projects";

const Projects = () => {
  return (
    <section className="section section--projects" id="projects">
      <div className="section__header">
        <h2 className="section__title">
          <span className="section__index">02.</span> Mis proyectos
        </h2>
        <div className="section__line" />
      </div>

      <div className="projects__featured">
        {featuredProjects.map((project, index) => (
          <div
            key={project.title}
            className={`project-featured project-featured--${
              project.align === "right" ? "reverse" : "normal"
            }`}
          >
            <div className="project-featured__image">
              <div className="project-featured__image-placeholder">
                Captura de {project.title}
              </div>
            </div>

            <div className="project-featured__content">
              <p className="project-featured__label">
                Proyecto destacado #{index + 1}
              </p>
              <h3 className="project-featured__title">{project.title}</h3>
              <div className="project-featured__description">
                <p>{project.description}</p>
              </div>

              <ul className="project-featured__tech-list">
                {project.technologies.map((tech) => (
                  <li key={tech}>{tech}</li>
                ))}
              </ul>

              <div className="project-featured__links">
                <a
                  href={project.repoUrl}
                  target="_blank"
                  rel="noreferrer"
                  aria-label="Ver código en GitHub"
                >
                  <i className="icon icon-github" />
                </a>
                <a
                  href={project.demoUrl}
                  target="_blank"
                  rel="noreferrer"
                  aria-label="Ver demo del proyecto"
                >
                  <i className="icon icon-external-link" />
                </a>
              </div>
            </div>
          </div>
        ))}
      </div>

      <h3 className="projects__subtitle">Otros proyectos</h3>
      <div className="projects__grid">
        {otherProjects.map((project) => (
          <article key={project.title} className="project-card">
            <div className="project-card__header">
              <i className="icon icon-folder" />
              <div className="project-card__links">
                <a
                  href={project.repoUrl}
                  target="_blank"
                  rel="noreferrer"
                  aria-label="Ver código en GitHub"
                >
                  <i className="icon icon-github" />
                </a>
                <a
                  href={project.demoUrl}
                  target="_blank"
                  rel="noreferrer"
                  aria-label="Ver demo del proyecto"
                >
                  <i className="icon icon-external-link" />
                </a>
              </div>
            </div>
            <h4 className="project-card__title">{project.title}</h4>
            <p className="project-card__description">{project.description}</p>
            <ul className="project-card__tech-list">
              {project.technologies.map((tech) => (
                <li key={tech}>{tech}</li>
              ))}
            </ul>
          </article>
        ))}
      </div>
    </section>
  );
};

export default Projects;
