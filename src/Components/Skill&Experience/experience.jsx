import { useRef } from "react";
import { motion, useInView } from "framer-motion";
import "./experience.css";
import SkillIcon from "../SkillIcons/SkillIcon";
import psychiatraiLogo from "../../assets/psychiatrai_logo.jfif";
import careLogo from "../../assets/care.jfif";

const roles = [
  {
    period: "2025 — Present",
    title: "Full Stack Engineer",
    company: "Zapply",
    stack: ["JavaScript", "React", "Express", "Chrome Extensions", "Docker", "Git", "Cloudflare"],
    points: [
      "Helped in development of autofill extension on 300+ websites.",
      "Helped automating QA testing reducing testing time by more than 80%.",
      "Helped extension product for Chrome,Firefox and Safari Browsers.",
      "Helped executives by leading 3 developers under me.",
    ],
  },
  {
    period: "2025",
    title: "Full Stack AI Intern",
    company: "Psychiatrai",
    logo: psychiatraiLogo,
    stack: ["LangGraph", "LangChain", "React", "Python"],
    points: [
      "Developed a mental-health chatbot grounded in Cognitive Behavioural Therapy to run structured therapeutic sessions.",
      "Engineered the backend for CBT conversation flows with LangGraph nodes and LangChain components for context-aware interactions.",
      "Deployed LangGraph on self-hosted infrastructure via LangGraph Server APIs and wired it to responsive React front-ends.",
    ],
  },
  {
    period: "2025",
    title: "AI / ML Intern",
    company: "Care",
    logo: careLogo,
    stack: ["Model research", "Medical imaging", "Technical writing"],
    points: [
      "Ran model research and selection for machine-learning applications in the healthcare domain.",
      "Evaluated the fetal CLIP architecture for medical imaging analysis.",
      "Documented findings, performance metrics, selection criteria and recommendations.",
    ],
  },
];

const skillCategories = [
  { title: "Languages", skills: ["Python", "Java", "C++", "JavaScript"] },
  { title: "Frontend & UI", skills: ["HTML5", "CSS3", "React.js"] },
  {
    title: "Backend & AI",
    skills: ["Node.js", "Express.js", "LangChain", "LangGraph", "TensorFlow", "CrewAI"],
  },
  { title: "Databases", skills: ["MongoDB", "SQL Server", "MySQL", "Supabase", "Redis"] },
  { title: "Cloud & DevOps", skills: ["Docker", "Vercel", "Render", "Microsoft Azure"] },
  { title: "Version control", skills: ["Git", "GitHub"] },
];

const Experience = () => {
  const expRef = useRef(null);
  const skillRef = useRef(null);
  const expIn = useInView(expRef, { once: true, margin: "-120px" });
  const skillIn = useInView(skillRef, { once: true, margin: "-120px" });

  return (
    <>
      <section id="experience" className="section exp" ref={expRef}>
        <div className="container">
          <motion.div
            className="sec-head"
            initial={{ opacity: 0, y: 20 }}
            animate={expIn ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6 }}
          >
            <span className="sec-index">03 &mdash; Experience</span>
            <h2 className="sec-title">Where I&rsquo;ve been shipping</h2>
          </motion.div>

          <ol className="exp__list">
            {roles.map((role, i) => (
              <motion.li
                className="exp__row"
                key={role.title + role.company}
                initial={{ opacity: 0, y: 24 }}
                animate={expIn ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.6, delay: i * 0.1, ease: [0.22, 1, 0.36, 1] }}
              >
                <div className="exp__period">
                  <span className="eyebrow">{role.period}</span>
                </div>

                <div className="exp__card">
                  <header className="exp__cardHead">
                    <div>
                      <h3 className="exp__role">{role.title}</h3>
                      <p className="exp__company">{role.company}</p>
                    </div>
                    {role.logo && (
                      <img className="exp__logo" src={role.logo} alt={`${role.company} logo`} />
                    )}
                  </header>

                  <ul className="exp__points">
                    {role.points.map((p) => (
                      <li key={p}>{p}</li>
                    ))}
                  </ul>

                  <ul className="exp__stack">
                    {role.stack.map((s) => (
                      <li key={s}>{s}</li>
                    ))}
                  </ul>
                </div>
              </motion.li>
            ))}
          </ol>
        </div>
      </section>

      <section id="stack" className="section stack" ref={skillRef}>
        <div className="container">
          <motion.div
            className="sec-head"
            initial={{ opacity: 0, y: 20 }}
            animate={skillIn ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6 }}
          >
            <span className="sec-index">04 &mdash; Stack</span>
            <h2 className="sec-title">Tools I reach for</h2>
          </motion.div>

          <div className="stack__grid">
            {skillCategories.map((category, i) => (
              <motion.div
                className="stack__group"
                key={category.title}
                initial={{ opacity: 0, y: 20 }}
                animate={skillIn ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.55, delay: i * 0.06, ease: [0.22, 1, 0.36, 1] }}
              >
                <h3 className="stack__groupTitle eyebrow">{category.title}</h3>
                <ul className="stack__items">
                  {category.skills.map((skill) => (
                    <li className="skill-item" key={skill}>
                      <SkillIcon name={skill} className="skill-item__icon" />
                      <span>{skill}</span>
                    </li>
                  ))}
                </ul>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
};

export default Experience;
