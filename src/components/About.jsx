import { motion } from "framer-motion";
import {
  FiCode,
  FiLayers,
  FiDatabase,
  FiArrowUpRight,
} from "react-icons/fi";

const stats = [
  {
    number: "05+",
    label: "Projects Built",
  },
  {
    number: "10+",
    label: "Technologies",
  },
  {
    number: "01+",
    label: "Years Learning",
  },
];

const focusCards = [
  {
    icon: <FiCode />,
    title: "Frontend Development",
    text: "Building responsive and interactive user interfaces with React and modern CSS.",
  },
  {
    icon: <FiLayers />,
    title: "Full Stack Development",
    text: "Creating complete web applications with frontend, backend APIs and database integration.",
  },
  {
    icon: <FiDatabase />,
    title: "API & Database",
    text: "Working with REST APIs, authentication, Supabase, MongoDB and data-driven applications.",
  },
];

function About() {
  return (
    <section className="about-section" id="about">

      <div className="section-heading">
        <motion.p
          className="section-label"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          ABOUT ME
        </motion.p>

        <motion.h2
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.1 }}
        >
          Turning ideas into
          <span> digital experiences.</span>
        </motion.h2>
      </div>

      <div className="about-grid">

        <motion.div
          className="about-text"
          initial={{ opacity: 0, x: -40 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
        >
          <p className="about-intro">
            I'm a passionate Full Stack Developer who enjoys transforming
            ideas into clean, functional and engaging web applications.
          </p>

          <p>
            I work with modern technologies across the frontend and backend,
            focusing on responsive interfaces, API integration, authentication,
            databases and user-friendly experiences.
          </p>

          <p>
            My goal is to continuously learn, build meaningful projects and
            create digital products that are both visually appealing and
            technically reliable.
          </p>

          <a href="#projects" className="about-link">
            Explore my projects
            <FiArrowUpRight />
          </a>
        </motion.div>

        <motion.div
          className="stats-container"
          initial={{ opacity: 0, x: 40 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
        >
          {stats.map((stat, index) => (
            <motion.div
              className="stat-card"
              key={stat.label}
              whileHover={{ y: -6 }}
              transition={{ duration: 0.2 }}
            >
              <strong>{stat.number}</strong>
              <span>{stat.label}</span>
            </motion.div>
          ))}
        </motion.div>

      </div>

      <div className="focus-grid">

        {focusCards.map((card, index) => (
          <motion.div
            className="focus-card"
            key={card.title}
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{
              duration: 0.6,
              delay: index * 0.15,
            }}
            whileHover={{ y: -8 }}
          >
            <div className="focus-icon">
              {card.icon}
            </div>

            <h3>{card.title}</h3>

            <p>{card.text}</p>
          </motion.div>
        ))}

      </div>

    </section>
  );
}

export default About;