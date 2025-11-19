import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";

import "./styles/base.css";
import "./styles/navbar.css";
import "./styles/hero.css";
import "./styles/about.css";
import "./styles/projects.css";
import "./styles/contact.css";
import "./styles/social-bar.css";
import "./styles/footer.css";
import "./styles/components.css";
import "./styles/cursor-glow.css";
import "./styles/responsive.css";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);