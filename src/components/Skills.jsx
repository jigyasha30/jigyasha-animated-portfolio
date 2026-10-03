import { motion } from "framer-motion";
import {
  FiCode,
  FiServer,
  FiDatabase,
  FiGitBranch,
} from "react-icons/fi";

const skillCategories = [
  {
    icon: <FiCode />,
    title: "Frontend Development",
    description: "Creating responsive and interactive user interfaces.",
    skills: ["HTML", "CSS", "JavaScript", "React.js"],
  },
  {
    icon: <FiServer />,
    title: "Backend Development",
    description: "Building APIs and server-side applications.",
    skills: ["Node.js", "Express.js", "REST APIs"],
  },
  {
    icon: <FiDatabase />,
    title: "Database & Cloud",
    description: "Working with databases and cloud-based services.",
    skills: ["MongoDB", "Supabase", "Database Integration"],
  },
  {
    icon: <FiGitBranch />,
    title: "Tools & Workflow",
    description: "Using modern tools for development and project management.",
    skills: ["Git", "GitHub", "VS Code", "API Integration"],
  },
];

function Skills() {
  return (
    <section className="skills-section" id="skills">

      <div className="section-heading">
        <motion.p
          className="section-label"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          MY SKILLS
        </motion.p>

        <motion.h2
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.1 }}
        >
          Technologies I use to
          <span> build ideas.</span>
        </motion.h2>
      </div>

      <div className="skills-grid">

        {skillCategories.map((category, index) => (
          <motion.div
            className="skill-card"
            key={category.title}
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{
              duration: 0.6,
              delay: index * 0.12,
            }}
            whileHover={{ y: -8 }}
          >

            <div className="skill-icon">
              {category.icon}
            </div>

            <h3>{category.title}</h3>

            <p>{category.description}</p>

            <div className="skill-list">
              {category.skills.map((skill) => (
                <span key={skill}>
                  {skill}
                </span>
              ))}
            </div>

          </motion.div>
        ))}

      </div>

    </section>
  );
}

export default Skills;