import { motion } from "framer-motion";
import {
  FiExternalLink,
  FiGithub,
  FiArrowUpRight,
} from "react-icons/fi";

const projects = [
  {
    number: "01",
    title: "AI Phishing Detection Platform",
    description:
      "A web-based security platform designed to analyze URLs, emails and messages, identify potential phishing threats and present risk information through an interactive dashboard.",
    technologies: [
      "React.js",
      "Node.js",
      "Express.js",
      "Supabase",
      "REST APIs",
    ],
    category: "Cybersecurity · Full Stack",
    github:
      "https://github.com/jigyasha30/AI-Phishing-Detection-Platform",
  },
  {
    number: "02",
    title: "Quiz Management & Online Assessment",
    description:
      "A complete online assessment platform with quiz management, question handling, authentication and an interactive experience for users taking assessments.",
    technologies: [
      "React.js",
      "Node.js",
      "Express.js",
      "MongoDB",
      "JWT",
    ],
    category: "Education · Full Stack",
    github:
      "https://github.com/jigyasha30/Quiz-Management-Platform",
  },
  {
    number: "03",
    title: "CloudSpace — Cloud Media Storage",
    description:
      "A cloud-based media storage platform for uploading, organizing, managing and sharing files and folders with authentication and cloud storage integration.",
    technologies: [
      "React.js",
      "Node.js",
      "Express.js",
      "Supabase",
      "Cloud Storage",
    ],
    category: "Cloud Storage · Full Stack",
    github:
      "https://github.com/jigyasha30/CloudSpace",
  },
  {
    number: "04",
    title: "Insurance Management System",
    description:
      "A web-based management application designed to organize insurance-related information and provide a structured digital workflow for managing application data.",
    technologies: [
      "React.js",
      "Node.js",
      "Express.js",
      "Database",
      "REST APIs",
    ],
    category: "Management System · Full Stack",
    github:
      "https://github.com/jigyasha30/Insurance-Management-System",
  },
  {
    number: "05",
    title: "Blog Application",
    description:
      "A responsive full stack blog application with authentication and protected CRUD functionality for creating, editing and managing blog posts.",
    technologies: [
      "React.js",
      "Node.js",
      "Express.js",
      "MongoDB",
      "JWT",
    ],
    category: "Web Application · Full Stack",
    github:
      "https://github.com/jigyasha30/Syntecxhub_Blog_Application",
  },
];

function Projects() {
  return (
    <section className="projects-section" id="projects">

      {/* SECTION HEADING */}
      <div className="section-heading">
        <motion.p
          className="section-label"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          SELECTED WORK
        </motion.p>

        <motion.h2
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.1 }}
        >
          Projects built with
          <span> purpose.</span>
        </motion.h2>
      </div>

      {/* PROJECTS */}
      <div className="projects-list">

        {projects.map((project, index) => (
          <motion.article
            className="project-card"
            key={project.title}
            initial={{ opacity: 0, y: 45 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{
              duration: 0.65,
              delay: index * 0.1,
            }}
          >

            {/* PROJECT NUMBER */}
            <div className="project-number">
              {project.number}
            </div>

            {/* PROJECT CONTENT */}
            <div className="project-main">

              <span className="project-category">
                {project.category}
              </span>

              <h3>{project.title}</h3>

              <p>{project.description}</p>

              <div className="project-tech">
                {project.technologies.map((technology) => (
                  <span key={technology}>
                    {technology}
                  </span>
                ))}
              </div>

            </div>

            {/* PROJECT LINK */}
            <div
              className="project-action"
              style={{
                position: "relative",
                zIndex: 9999,
                pointerEvents: "auto",
              }}
            >
              <a
                href={project.github}
                target="_blank"
                rel="noopener noreferrer"
                aria-label={`View ${project.title} on GitHub`}
                title={`View ${project.title} on GitHub`}
                style={{
                  position: "relative",
                  zIndex: 10000,
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  pointerEvents: "auto",
                  cursor: "pointer",
                }}
              >
                <FiArrowUpRight />
              </a>
            </div>

          </motion.article>
        ))}

      </div>

      {/* GITHUB FOOTER */}
      <motion.div
        className="projects-footer"
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
      >

        <p>
          More projects and code are available on my GitHub.
        </p>

        <a
          href="https://github.com/jigyasha30"
          target="_blank"
          rel="noopener noreferrer"
          className="github-link"
        >
          <FiGithub />
          View GitHub
          <FiExternalLink />
        </a>

      </motion.div>

    </section>
  );
}

export default Projects;