import React, { useState } from "react";
import styles from "./ContactForm.module.css";
import {
  FaPhone,
  FaEnvelope,
  FaMapMarkerAlt,
  FaFacebook,
  FaTwitter,
  FaInstagram,
  FaLinkedin,
} from "react-icons/fa";

const ContactSection = () => {
  const [formData, setFormData] = useState({
    email: "",
    name: "",
    phone: "",
    subject: "",
    reason: "",
    message: "",
  });
  const [errors, setErrors] = useState({});
  const [loading, setLoading] = useState(false);
  const [successMessage, setSuccessMessage] = useState("");
  const [messageLength, setMessageLength] = useState(0);

  const validateForm = () => {
    const newErrors = {};
    if (!formData.email.includes("@"))
      newErrors.email = "Invalid email address";
    if (formData.name.length < 3)
      newErrors.name = "Name must be at least 3 characters";
    if (formData.phone.length < 10) newErrors.phone = "Invalid phone number";
    if (formData.subject.length < 3)
      newErrors.subject = "Subject must be at least 3 characters";
    if (formData.message.length < 10)
      newErrors.message = "Message must be at least 10 characters";
    return newErrors;
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
    if (name === "message") setMessageLength(value.length);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const validationErrors = validateForm();
    if (Object.keys(validationErrors).length === 0) {
      setLoading(true);
      // Simulate sending data
      setTimeout(() => {
        setLoading(false);
        setSuccessMessage("Your message has been sent successfully!");
        setFormData({
          email: "",
          name: "",
          phone: "",
          subject: "",
          reason: "",
          message: "",
        });
      }, 2000);
    } else {
      setErrors(validationErrors);
    }
  };

  return (
    <div className={styles.contactSection}>
      <h2 className={styles.sectionTitle}>Kontakt</h2>
      <div className={styles.contactInfo}>
        <div className={styles.infoCard}>
          <FaMapMarkerAlt className={styles.icon} />
          <h4>Adresse</h4>
          <p>Fürstenfeldbruck, München, Deutschland</p>
        </div>
        <div className={styles.infoCard}>
          <FaPhone className={styles.icon} />
          <h4>Telefonnummer</h4>
          <p>+49 123 456 789</p>
        </div>
        <div className={styles.infoCard}>
          <FaEnvelope className={styles.icon} />
          <h4>Email</h4>
          <p>info@alexdeveloper.com</p>
        </div>
      </div>

      <div className={styles.contactFormSection}>
        <form className={styles.contactForm} onSubmit={handleSubmit}>
          <input
            type="email"
            name="email"
            placeholder="Email"
            required
            value={formData.email}
            onChange={handleChange}
          />
          {errors.email && (
            <span className={styles.errorMessage}>{errors.email}</span>
          )}

          <input
            type="text"
            name="name"
            placeholder="Name"
            required
            value={formData.name}
            onChange={handleChange}
          />
          {errors.name && (
            <span className={styles.errorMessage}>{errors.name}</span>
          )}

          <input
            type="text"
            name="phone"
            placeholder="Telefonnummer"
            required
            value={formData.phone}
            onChange={handleChange}
          />
          {errors.phone && (
            <span className={styles.errorMessage}>{errors.phone}</span>
          )}

          <input
            type="text"
            name="subject"
            placeholder="Betreff"
            required
            value={formData.subject}
            onChange={handleChange}
          />
          {errors.subject && (
            <span className={styles.errorMessage}>{errors.subject}</span>
          )}

          <select
            name="reason"
            required
            value={formData.reason}
            onChange={handleChange}
            className={styles.selectInput}
          >
            <option value="" disabled>
              Grund für Kontaktaufnahme
            </option>
            <option value="project">Projektanfrage</option>
            <option value="feedback">Feedback</option>
            <option value="support">Unterstützung</option>
          </select>

          <textarea
            name="message"
            placeholder="Nachricht"
            required
            maxLength={500}
            value={formData.message}
            onChange={handleChange}
          ></textarea>
          <span>{messageLength}/500 characters</span>
          {errors.message && (
            <span className={styles.errorMessage}>{errors.message}</span>
          )}

          <button
            type="submit"
            className={styles.submitButton}
            disabled={loading}
          >
            {loading ? "Sending..." : "Nachricht senden"}
          </button>
        </form>

        {successMessage && (
          <div className={styles.successMessage}>{successMessage}</div>
        )}

        <div className={styles.getInTouch}>
          <h3>Get in touch</h3>
          <p>
            Haben Sie Fragen oder möchten Sie ein Projekt besprechen? Schreiben
            Sie mir und ich werde so schnell wie möglich antworten.
          </p>
          <p>
            Egal, ob es sich um ein großes oder kleines Projekt handelt, ich bin
            hier, um Ihnen zu helfen. Lassen Sie uns gemeinsam herausfinden, wie
            ich Ihr nächstes Webprojekt unterstützen kann.
          </p>

          <div className={styles.socialIcons}>
            <button type="button" className={styles.socialLink}>
              <FaFacebook />
            </button>
            <button type="button" className={styles.socialLink}>
              <FaTwitter />
            </button>
            <button type="button" className={styles.socialLink}>
              <FaInstagram />
            </button>
            <button type="button" className={styles.socialLink}>
              <FaLinkedin />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ContactSection;
