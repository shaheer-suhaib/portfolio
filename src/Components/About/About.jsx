import { useRef } from "react";
import { motion, useInView } from "framer-motion";
import "./About.css";
import nust_img from "../../assets/NUST.webp";

const rail = [
  {
    label: "Education",
    title: "BS Computer Engineering",
    meta: "National University of Sciences & Technology (NUST) ISLAMABAD",
    logo: nust_img,
  },
  {
    label: "Now",
    title: "Full Stack Engineer",
    meta: "Zapply — 2025 to present",
  },
  // {
  //   label: "",
  //   title: "Full Stack AI Intern",
  //   meta: "Psychiatrai — CBT chatbot on LangGraph, 2025",
  // },
];

const About = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-120px" });

  const fade = {
    hidden: { opacity: 0, y: 20 },
    visible: (i = 0) => ({
      opacity: 1,
      y: 0,
      transition: { duration: 0.6, delay: i * 0.08, ease: [0.22, 1, 0.36, 1] },
    }),
  };

  return (
    <section id="about" className="section about" ref={ref}>
      <div className="container">
        <motion.div
          className="sec-head"
          variants={fade}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
        >
          <span className="sec-index">01 &mdash; About</span>
          <h2 className="sec-title">Curious by default, hands-on by habit.</h2>
        </motion.div>

        <div className="about__grid">
          <motion.div
            className="about__prose"
            variants={fade}
            custom={1}
            initial="hidden"
            animate={isInView ? "visible" : "hidden"}
          >
            <p className="about__lede">
              I&rsquo;m an engineering student who learns by building things that
              have to actually work — not demos that fall over the moment someone
              uses them.
            </p>
            <p>
              I spent my time in debugging codes, reproducing  and fix issues them  and making system efficient....
            </p>
            {/* <p>
                I like the parts other people skip — the merge conflicts, the
                mutation observers, the deployment that only fails on Tuesdays.
                That&rsquo;s usually where the interesting engineering is.
              </p> */}
          </motion.div>

          <motion.div
            className="about__rail"
            variants={fade}
            custom={2}
            initial="hidden"
            animate={isInView ? "visible" : "hidden"}
          >
            <div className="about__portrait">
              <img src="/images/side_img.webp" alt="Shaheer at work" />
            </div>

            <dl className="about__facts">
              {rail.map((item) => (
                <div className="about__fact" key={item.label}>
                  <dt className="eyebrow">{item.label}</dt>
                  <dd>
                    <span className="about__factTitle">
                      {item.logo && (
                        <img className="about__logo" src={item.logo} alt="" aria-hidden="true" />
                      )}
                      {item.title}
                    </span>
                    <span className="about__factMeta">{item.meta}</span>
                  </dd>
                </div>
              ))}
            </dl>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default About;
