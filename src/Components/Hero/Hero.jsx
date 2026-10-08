import { motion } from "framer-motion";
import "./Hero.css";

const RESUME_URL = import.meta.env.VITE_RESUME_URL;
const RESUME_DOWNLOAD_URL = import.meta.env.VITE_RESUME_DOWNLOAD_URL;

const facts = [
  { label: "Currently", value: "Full Stack Engineer, Zapply" },
  { label: "Focus", value: "Building full-stack systems" },
  { label: "Based in", value: "Islamabad, Pakistan" },
];

const rise = {
  hidden: { opacity: 0, y: 24 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.7, ease: [0.22, 1, 0.36, 1] } },
};

const Hero = () => {
  const openResume = () => {
    if (RESUME_URL) window.open(RESUME_URL, "_blank", "noopener");
    if (RESUME_DOWNLOAD_URL) {
      const link = document.createElement("a");
      link.href = RESUME_DOWNLOAD_URL;
      link.download = "shaheer-suhaib-resume.pdf";
      document.body.appendChild(link);
      link.click();
      link.remove();
    }
  };

  return (
    <section id="home" className="hero">
      <div className="container hero__inner">
        <motion.div
          className="hero__text"
          initial="hidden"
          animate="visible"
          transition={{ staggerChildren: 0.09 }}
        >
          <motion.p className="hero__status" variants={rise}>
            <span className="hero__dot" aria-hidden="true" />
            Available for work
          </motion.p>

          <motion.h1 className="hero__title" variants={rise}>
            Software engineer
            <br />
            building <em>efficient systems</em>
            <br />
            {/* and the products */}
            <br />
            {/* around them. */}
          </motion.h1>

          <motion.p className="hero__lede" variants={rise}>
            I&rsquo;m Shaheer Suhaib — I am a passionate and curious learner currently navigating the exciting world of engineering and software development. I love exploring new technologies — from
            machine learning to full-stack and app development — and bringing ideas to life through hands-on projects..
          </motion.p>

          <motion.div className="hero__actions" variants={rise}>
            <a className="btn btn-primary" href="#contact">
              Get in touch
            </a>
            <button className="btn btn-ghost" onClick={openResume} type="button">
              View résumé
              <span aria-hidden="true">&#8599;</span>
            </button>
          </motion.div>
        </motion.div>

        <motion.div
          className="hero__portrait"
          initial={{ opacity: 0, scale: 0.96 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.9, delay: 0.15, ease: [0.22, 1, 0.36, 1] }}
        >
          <div className="hero__frame">
            <img src="/images/face-cutout.webp" alt="Shaheer Suhaib" />
          </div>
          <span className="hero__caption">Shaheer Suhaib &mdash; 2026</span>
        </motion.div>
      </div>

      <div className="container">
        <motion.dl
          className="hero__facts"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.55 }}
        >
          {facts.map((f) => (
            <div className="hero__fact" key={f.label}>
              <dt className="eyebrow">{f.label}</dt>
              <dd>{f.value}</dd>
            </div>
          ))}
        </motion.dl>
      </div>
    </section>
  );
};

export default Hero;
