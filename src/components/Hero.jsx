import { motion } from "framer-motion";
import { FiArrowUpRight, FiGithub, FiLinkedin } from "react-icons/fi";

function Hero() {
  const nodes = [
    { className: "node-one" },
    { className: "node-two" },
    { className: "node-three" },
    { className: "node-four" },
    { className: "node-five" },
    { className: "node-six" },
  ];

  return (
    <section className="hero" id="home">
      <div className="hero-glow glow-one"></div>
      <div className="hero-glow glow-two"></div>

      <motion.div
        className="hero-content"
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.9 }}
      >
        <motion.p
          className="hero-label"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.3 }}
        >
          ✦ FULL STACK DEVELOPER
        </motion.p>

        <h1>
          Building digital
          <span> experiences</span>
          <br />
          that stand out.
        </h1>

        <p className="hero-description">
          I'm Jigyasha, a Full Stack Developer passionate about creating
          modern, responsive and interactive web applications.
        </p>

        <div className="hero-actions">
          <a href="#projects" className="primary-btn">
            View My Work
            <FiArrowUpRight />
          </a>

          <a href="#contact" className="secondary-btn">
            Contact Me
          </a>
        </div>

        <div className="social-links">
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
        </div>
      </motion.div>

      <motion.div
        className="developer-visual"
        initial={{ opacity: 0, scale: 0.85 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 1.2, delay: 0.3 }}
      >
        <div className="visual-glow"></div>

        <motion.div
          className="developer-grid"
          animate={{
            y: [0, -12, 0],
            rotateX: [0, 2, 0],
            rotateY: [0, -2, 0],
          }}
          transition={{
            duration: 7,
            repeat: Infinity,
            ease: "easeInOut",
          }}
        >
          <div className="grid-line horizontal h1"></div>
          <div className="grid-line horizontal h2"></div>
          <div className="grid-line horizontal h3"></div>
          <div className="grid-line horizontal h4"></div>

          <div className="grid-line vertical v1"></div>
          <div className="grid-line vertical v2"></div>
          <div className="grid-line vertical v3"></div>
          <div className="grid-line vertical v4"></div>

          <div className="code-card card-main">
            <div className="card-top">
              <span></span>
              <span></span>
              <span></span>
            </div>

            <div className="code-content">
              <p>
                <i>const</i> developer = {"{"}
              </p>

              <p className="code-indent">
                name: <b>"Jigyasha"</b>,
              </p>

              <p className="code-indent">
                role: <b>"Full Stack"</b>,
              </p>

              <p className="code-indent">
                stack: <b>"MERN"</b>,
              </p>

              <p className="code-indent">
                passion: <b>"Building"</b>
              </p>

              <p>{"}"}</p>
            </div>
          </div>

          <motion.div
            className="floating-tech tech-react"
            animate={{ y: [0, -10, 0], rotate: [0, 3, 0] }}
            transition={{
              duration: 4,
              repeat: Infinity,
              ease: "easeInOut",
            }}
          >
            React
          </motion.div>

          <motion.div
            className="floating-tech tech-node"
            animate={{ y: [0, 10, 0], rotate: [0, -3, 0] }}
            transition={{
              duration: 4.5,
              repeat: Infinity,
              ease: "easeInOut",
            }}
          >
            Node.js
          </motion.div>

          <motion.div
            className="floating-tech tech-api"
            animate={{ y: [0, -8, 0] }}
            transition={{
              duration: 3.8,
              repeat: Infinity,
              ease: "easeInOut",
            }}
          >
            API
          </motion.div>

          {nodes.map((node, index) => (
            <motion.span
              key={node.className}
              className={`network-node ${node.className}`}
              animate={{
                opacity: [0.35, 1, 0.35],
                scale: [0.8, 1.15, 0.8],
              }}
              transition={{
                duration: 2.5 + index * 0.25,
                repeat: Infinity,
                ease: "easeInOut",
              }}
            />
          ))}

          <div className="network-line line-one"></div>
          <div className="network-line line-two"></div>
          <div className="network-line line-three"></div>
          <div className="network-line line-four"></div>
          <div className="network-line line-five"></div>
        </motion.div>
      </motion.div>

      <motion.div
        className="scroll-indicator"
        animate={{ y: [0, 10, 0] }}
        transition={{
          duration: 1.8,
          repeat: Infinity,
        }}
      >
        <span></span>
        Scroll to explore
      </motion.div>
    </section>
  );
}

export default Hero;