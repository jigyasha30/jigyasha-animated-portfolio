import { FiGithub, FiLinkedin, FiArrowUp } from "react-icons/fi";

function Footer() {
  return (
    <footer className="footer">
      <div className="footer-container">

        <div className="footer-brand">
          <h2>JIGYASHA.</h2>

          <p>
            Full Stack Developer building modern, functional and
            user-focused web applications.
          </p>
        </div>

        <div className="footer-links">
          <a href="#home">Home</a>
          <a href="#about">About</a>
          <a href="#skills">Skills</a>
          <a href="#projects">Projects</a>
          <a href="#contact">Contact</a>
        </div>

        <div className="footer-social">
          <a
            href="https://github.com/jigyasha30"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="GitHub"
          >
            <FiGithub />
          </a>

          <a
            href="https://www.linkedin.com/in/jigyasha-%E2%9C%A8-12072637b"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="LinkedIn"
          >
            <FiLinkedin />
          </a>

          <a
            href="#home"
            aria-label="Back to top"
          >
            <FiArrowUp />
          </a>
        </div>

      </div>

      <div className="footer-bottom">
        <p>© 2026 Jigyasha. All rights reserved.</p>

        <p>Designed &amp; built with React.</p>
      </div>
    </footer>
  );
}

export default Footer;