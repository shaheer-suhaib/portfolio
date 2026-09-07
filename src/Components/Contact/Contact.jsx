import { useState, useRef } from "react";
import { motion, useInView } from "framer-motion";
import Icon from "../Icons/Icon";
import "./Contact.css";

const EMAIL = "sh5suhaib.pk@gmail.com";
// Allows overriding with custom FormSubmit token or alternate address via .env
const FORMSUBMIT_ENDPOINT =
  import.meta.env.VITE_FORMSUBMIT_URL ||
  `https://formsubmit.co/ajax/${import.meta.env.VITE_FORMSUBMIT_EMAIL || EMAIL}`;

const channels = [
  { icon: "phone", label: "Phone/WhatsApp", value: "+92 325 0368509", href: "tel:+923250368509" },
  { icon: "github", label: "GitHub", value: "shaheer-suhaib", href: "https://github.com/shaheer-suhaib" },
  //{ icon: "location", label: "Location", value: "Islamabad, Pakistan" },
];

const Contact = () => {
  const [form, setForm] = useState({ name: "", email: "", message: "" });
  const [status, setStatus] = useState("idle"); // "idle" | "submitting" | "success" | "error"
  const [statusMessage, setStatusMessage] = useState("");
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-120px" });

  const update = (e) => {
    setForm((f) => ({ ...f, [e.target.name]: e.target.value }));
    if (status === "error") {
      setStatus("idle");
      setStatusMessage("");
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!form.name.trim() || !form.email.trim() || !form.message.trim()) {
      return;
    }

    setStatus("submitting");
    setStatusMessage("");

    try {
      const response = await fetch(FORMSUBMIT_ENDPOINT, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Accept: "application/json",
        },
        body: JSON.stringify({
          name: form.name.trim(),
          email: form.email.trim(),
          message: form.message.trim(),
          _subject: `Portfolio inquiry from ${form.name.trim()}`,
          _replyto: form.email.trim(),
          _captcha: "false",
          _template: "table",
        }),
      });

      const data = await response.json().catch(() => null);

      if (response.ok && (data?.success === "true" || data?.success === true || response.status === 200)) {
        setStatus("success");
        setStatusMessage(
          "Thank you! Your message has been sent successfully. I will get back to you soon."
        );
        setForm({ name: "", email: "", message: "" });
      } else {
        throw new Error(
          data?.message || "Failed to deliver message. Please try again or email directly."
        );
      }
    } catch (err) {
      setStatus("error");
      setStatusMessage(
        err.message || "Failed to send message. Please check your connection or email directly."
      );
    }
  };

  const fade = {
    hidden: { opacity: 0, y: 22 },
    visible: (i = 0) => ({
      opacity: 1,
      y: 0,
      transition: { duration: 0.6, delay: i * 0.08, ease: [0.22, 1, 0.36, 1] },
    }),
  };

  return (
    <section id="contact" className="section contact" ref={ref}>
      <div className="container">
        <motion.div
          className="sec-head"
          variants={fade}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
        >
          <span className="sec-index">05 &mdash; Contact</span>
          <h2 className="sec-title">Let&rsquo;s build something</h2>
          <span className="sec-note">Usually replies within a day</span>
        </motion.div>

        <div className="contact__grid">
          <motion.div
            className="contact__left"
            variants={fade}
            custom={1}
            initial="hidden"
            animate={isInView ? "visible" : "hidden"}
          >
            <p className="contact__lede">
              Open for part time , freelance and startup oppurtunities.
            </p>

            <a className="contact__email" href={`mailto:${EMAIL}`}>
              {EMAIL}
              <span aria-hidden="true">&#8599;</span>
            </a>

            <ul className="contact__channels">
              {channels.map((c) => {
                const inner = (
                  <>
                    <span className="contact__icon">
                      <Icon name={c.icon} size={16} />
                    </span>
                    <span className="contact__channelText">
                      <span className="eyebrow">{c.label}</span>
                      <span className="contact__value">{c.value}</span>
                    </span>
                  </>
                );
                return (
                  <li key={c.label} className="contact-detail">
                    {c.href ? (
                      <a
                        href={c.href}
                        target={c.href.startsWith("http") ? "_blank" : undefined}
                        rel={c.href.startsWith("http") ? "noreferrer" : undefined}
                      >
                        {inner}
                      </a>
                    ) : (
                      <span>{inner}</span>
                    )}
                  </li>
                );
              })}
            </ul>
          </motion.div>

          <motion.form
            className="contact__form"
            onSubmit={handleSubmit}
            variants={fade}
            custom={2}
            initial="hidden"
            animate={isInView ? "visible" : "hidden"}
          >
            {/* Honeypot field for bot spam prevention */}
            <input
              type="text"
              name="_honey"
              style={{ display: "none" }}
              tabIndex={-1}
              autoComplete="off"
            />

            <label className="contact__field">
              <span className="eyebrow">Your name</span>
              <input
                type="text"
                name="name"
                value={form.name}
                onChange={update}
                placeholder="Jane Doe"
                disabled={status === "submitting"}
                required
              />
            </label>

            <label className="contact__field">
              <span className="eyebrow">Your email</span>
              <input
                type="email"
                name="email"
                value={form.email}
                onChange={update}
                placeholder="jane@company.com"
                disabled={status === "submitting"}
                required
              />
            </label>

            <label className="contact__field">
              <span className="eyebrow">Message</span>
              <textarea
                name="message"
                value={form.message}
                onChange={update}
                placeholder="What are you building?"
                rows={5}
                disabled={status === "submitting"}
                required
              />
            </label>

            {status === "success" && (
              <div className="contact__alert contact__alert--success" role="status">
                <svg
                  className="contact__alert-icon"
                  width="18"
                  height="18"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  aria-hidden="true"
                >
                  <path d="M22 11.08V12a10 10 0 1 1-5.93-9.14" />
                  <polyline points="22 4 12 14.01 9 11.01" />
                </svg>
                <span>{statusMessage}</span>
              </div>
            )}

            {status === "error" && (
              <div className="contact__alert contact__alert--error" role="alert">
                <svg
                  className="contact__alert-icon"
                  width="18"
                  height="18"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  aria-hidden="true"
                >
                  <circle cx="12" cy="12" r="10" />
                  <line x1="12" y1="8" x2="12" y2="12" />
                  <line x1="12" y1="16" x2="12.01" y2="16" />
                </svg>
                <div className="contact__alert-content">
                  <span>{statusMessage}</span>
                  <a
                    href={`mailto:${EMAIL}?subject=Portfolio%20Inquiry`}
                    className="contact__alert-fallback"
                  >
                    Send via email app instead &rarr;
                  </a>
                </div>
              </div>
            )}

            <button
              className="btn btn-primary contact__submit"
              type="submit"
              disabled={status === "submitting"}
            >
              {status === "submitting" ? (
                <>
                  <span className="contact__spinner" aria-hidden="true" />
                  <span>Sending...</span>
                </>
              ) : status === "success" ? (
                <span>Send another message</span>
              ) : (
                <span>Send message</span>
              )}
            </button>
            {/* <p className="contact__hint">
              Delivered directly to my inbox via FormSubmit &bull; No mail app needed.
            </p> */}
          </motion.form>
        </div>
      </div>
    </section>
  );
};

export default Contact;
