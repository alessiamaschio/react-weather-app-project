import React from "react";

export default function Footer() {
  return (
    <footer>
      {" "}
      <div>
        Coded with <i className="far fa-heart"></i> by{" "}
        <a
          className="linkedin-link"
          href="https://www.linkedin.com/in/alessia-maschio-a8317734/"
          target="_blank"
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
        >
          <i class="fab fa-github"></i> GitHub
        </a>
      </div>
    </footer>
  );
}
