import React from "react";
import "./Footer.css";

export default function Footer() {
  return (
    <footer>
      {" "}
      <div>
        Coded with <i className="far fa-heart"></i> by{" "}
        <a
          href="https://www.linkedin.com/in/alessia-maschio-a8317734/"
          target="_blank"
          rel="noopener noreferrer"
          className="footer-link"
        >
          Alessia
        </a>{" "}
        &copy;2021
      </div>
      <div>
        Open-source code on{" "}
        <a
          href="https://github.com/alessiamaschio/react-weather-app-project"
          target="_blank"
          rel="noopener noreferrer"
          className="footer-link"
        >
          <i className="fab fa-github"></i> GitHub
        </a>
      </div>
    </footer>
  );
}
