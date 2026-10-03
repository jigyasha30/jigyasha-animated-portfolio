import { useState } from "react";
import emailjs from "@emailjs/browser";
import { motion } from "framer-motion";
import {
  FiMail,
  FiMapPin,
  FiPhone,
  FiArrowUpRight,
} from "react-icons/fi";

function Contact() {
  const [isSending, setIsSending] = useState(false);
  const [status, setStatus] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();

    setIsSending(true);
    setStatus("");

    try {
      await emailjs.sendForm(
        "service_qrxdq1l",
        "template_060pm1h",
        e.target,
        "ZiznYxhGE26ZWdfhV"
      );

      setStatus("Message sent successfully!");
      e.target.reset();
    } catch (error) {
      console.error("EmailJS Error:", error);
      setStatus("Failed to send message. Please try again.");
    } finally {
      setIsSending(false);
    }
  };

  return (
    <section className="contact-section" id="contact">
      <div className="contact-wrapper">
        <motion.div
          className="contact-heading"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <p className="section-label">GET IN TOUCH</p>

          <h2>
            Let's build something
            <span> meaningful.</span>
          </h2>

          <p className="contact-intro">
            Have a project idea, collaboration opportunity, or just want
            to connect? Feel free to reach out.
          </p>
        </motion.div>

        <div className="contact-content">
          <motion.div
            className="contact-info"
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <a
              href="mailto:kholajigyasha@gmail.com"
              className="contact-item"
            >
              <span className="contact-icon">
                <FiMail />
              </span>

              <div>
                <small>Email</small>
                <p>kholajigyasha@gmail.com</p>
              </div>

              <FiArrowUpRight className="contact-arrow" />
            </a>

            <a
              href="tel:+918571849479"
              className="contact-item"
            >
              <span className="contact-icon">
                <FiPhone />
              </span>

              <div>
                <small>Phone</small>
                <p>+91 85718 49479</p>
              </div>

              <FiArrowUpRight className="contact-arrow" />
            </a>

            <div className="contact-item">
              <span className="contact-icon">
                <FiMapPin />
              </span>

              <div>
                <small>Location</small>
                <p>India</p>
              </div>
            </div>
          </motion.div>

          <motion.form
            className="contact-form"
            onSubmit={handleSubmit}
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <div className="form-row">
              <div className="form-group">
                <label htmlFor="name">Name</label>

                <input
                  type="text"
                  id="name"
                  name="name"
                  placeholder="Your name"
                  required
                />
              </div>

              <div className="form-group">
                <label htmlFor="email">Email</label>

                <input
                  type="email"
                  id="email"
                  name="email"
                  placeholder="Your email"
                  required
                />
              </div>
            </div>

            <div className="form-group">
              <label htmlFor="subject">Subject</label>

              <input
                type="text"
                id="subject"
                name="subject"
                placeholder="What would you like to discuss?"
                required
              />
            </div>

            <div className="form-group">
              <label htmlFor="message">Message</label>

              <textarea
                id="message"
                name="message"
                rows="6"
                placeholder="Tell me about your project..."
                required
              />
            </div>

            <button
              type="submit"
              className="contact-submit"
              disabled={isSending}
            >
              {isSending ? "Sending..." : "Send Message"}
              {!isSending && <FiArrowUpRight />}
            </button>

            {status && (
              <p className="contact-status">
                {status}
              </p>
            )}
          </motion.form>
        </div>
      </div>
    </section>
  );
}

export default Contact;