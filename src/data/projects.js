import Ecommerceimg from "../assets/pag1.png";
import Socialimg from "../assets/pag2.png";
import Cheatsheetimg from "../assets/pag3.png";
import Escapeimg from "../assets/pag4.png";
import Tictactoeimg from "../assets/pag5.png";


export const featuredProjects = [
  {
    title: "Sitio de e-Commerce accesible",
    description:
    "Landing page de una tienda en línea con flujo básico de compra (catálogo, compra y confirmación), diseñada con enfoque en accesibilidad web: uso de HTML semántico, navegación por teclado, buen contraste y estructura clara para lectores de pantalla.",
    technologies: ["HTML", "CSS"],
    demoUrl: "https://daniellesq.github.io/Ecommerce/",
    repoUrl: "https://github.com/daniellesq/Ecommerce",
    align: "left",
    image: Ecommerceimg,
  },
  {
    title: "Mi Red Social",
    description:
    "Maqueta de una red social llamada LanLink con feed de publicaciones, páginas de perfil para cada usuario y una sección de chats. Todo el layout está construido solo con HTML y CSS, cuidando la organización del contenido y el diseño responsivo para móvil y escritorio.",
    technologies: ["HTML","CSS"],
    demoUrl: "https://alanelihu1905.github.io/LanLInk/",
    repoUrl: "https://github.com/alanelihu1905/LanLInk",
    align: "right",
    image: Socialimg,
  },
  {
    title: "Cheat Sheet",
    description:
    "Página tipo cheat sheet para consultar conceptos y sintaxis de forma rápida mientras estudias o programas. Organizada en secciones claras y diseñada para que sea fácil de leer y escanear de un vistazo.",
    technologies: ["HTML", "CSS"],
    demoUrl: "https://alanelihu1905.github.io/CheatSheet/",
    repoUrl: "https://github.com/alanelihu1905/CheatSheet",
    align: "left",
    image: Cheatsheetimg,
  },
  {
    title: "Escape de Beyonce",
    description:
    "Mini juego web donde el jugador debe esquivar obstáculos inspirados en el universo de Beyoncé. Implementé la lógica del juego con JavaScript: detección de colisiones, actualizaciones de estado en tiempo real y animaciones con CSS para darle dinamismo a la experiencia.",
    technologies: ["JavaScript", "HTML", "CSS"],
    demoUrl: "https://alanelihu1905.github.io/EscapadeBeyonce/",
    repoUrl: "https://github.com/alanelihu1905/EscapadeBeyonce",
    align: "right",
    image: Escapeimg,
  },
  {
    title: "Tic-Tac-Toe",
    description:
    "Versión interactiva del clásico Tic-Tac-Toe construida con React, ideal para practicar manejo de estado, renderizado condicional y componentes reutilizables. Incluye detección de ganador, empates y reseteo del tablero para volver a jugar.",
    technologies: ["React", "JavaScript", "CSS"],
    demoUrl: "https://alanelihu1905.github.io/Tic-Tac-Toe/",
    repoUrl: "https://github.com/alanelihu1905/Tic-Tac-Toe",
    align: "left",
    image: Tictactoeimg,
  },

];

// OTROS PROYECTOS (proyectos extra)
export const otherProjects = [
  {
    title: "Formulario CRUD",
    description:
    "Aplicación CRUD en una sola página para gestionar registros desde un formulario: crear, listar, actualizar y eliminar datos. El flujo se maneja con JavaScript y está pensado para practicar manipulación del DOM y organización básica de lógica en el frontend.",
    technologies: ["HTML", "CSS", "JavaScript"],
    demoUrl: "https://alanelihu1905.github.io/FormularioCRUD/",
    repoUrl: "https://github.com/alanelihu1905/FormularioCRUD",
  },
  {
    title: "Animaciones CSS",
    description:
    "Colección de animaciones hechas únicamente con CSS: transiciones, efectos de hover y microinteracciones que se pueden reutilizar en otros proyectos. Es un pequeño laboratorio visual para experimentar con movimiento sin usar JavaScript.",
    technologies: ["HTML", "CSS"],
    demoUrl: "https://daniellesq.github.io/AnimacionCSS/",
    repoUrl: "https://github.com/daniellesq/AnimacionCSS",
  },
  {
    title: "Formularios de registro",
    description:
    "Conjunto de formularios para un sistema académico (login, inscripción y asistencia) estructurados en distintas páginas. Se trabajó el uso correcto de etiquetas de formulario, inputs y mensajes, pensando en una interfaz clara y fácil de completar para el usuario.",
    technologies: ["HTML", "CSS"],
    demoUrl: "https://alanelihu1905.github.io/FormularioFDI/",
    repoUrl: "https://github.com/alanelihu1905/FormularioFDI",
  },
];
