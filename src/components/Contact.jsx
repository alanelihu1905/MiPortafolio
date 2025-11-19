import React from "react";

const Contact = () => {
  const email = "al067108@uacam.mx";

  return (
    <section className="section section--contact" id="contact">
      <p className="contact__eyebrow">03. ¿Qué sigue?</p>
      <h2 className="contact__title">¡Ponte en contacto!</h2>
      <p className="contact__text">
        Si tienes una idea, un proyecto interesante o simplemente quieres
        saludar, mi bandeja de entrada siempre está abierta. Trato de responder
        a todos los mensajes, especialmente si traen buenas vibes y código.
      </p>
      <a className="contact__button" href={`mailto:${email}`}>
        ¡Contáctame!
      </a>
    </section>
  );
};

export default Contact;
