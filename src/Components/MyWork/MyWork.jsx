import { useRef } from "react";
import { useNavigate } from "react-router-dom";
import { motion, useInView } from "framer-motion";
import "./MyWork.css";
import work_data from "../../assets/mywork_data.js";

const MyWork = () => {
  const navigate = useNavigate();
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-120px" });

  const card = {
    hidden: { opacity: 0, y: 28 },
    visible: (i) => ({
      opacity: 1,
      y: 0,
      transition: { duration: 0.6, delay: i * 0.07, ease: [0.22, 1, 0.36, 1] },
    }),
  };

  const featured = work_data.slice(0, 4);

  return (
    <section id="work" className="section work" ref={ref}>
      <div className="container">
        <motion.div
          className="sec-head"
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
        >
          <span className="sec-index">02 &mdash; Work</span>
          <h2 className="sec-title">Selected projects</h2>
          <span className="sec-note">{work_data.length} shipped</span>
        </motion.div>

        <div className="work__grid">
          {featured.map((work, i) => (
            <motion.article
              key={work.w_no}
              className="work-item"
              custom={i}
              variants={card}
              initial="hidden"
              animate={isInView ? "visible" : "hidden"}
              onClick={() => navigate(`/projects/${work.w_no}`)}
              tabIndex={0}
              role="link"
              onKeyDown={(e) => {
                if (e.key === "Enter" || e.key === " ") {
                  e.preventDefault();
                  navigate(`/projects/${work.w_no}`);
                }
              }}
            >
              <div className="work-item__media">
                <img src={work.w_img} alt="" loading="lazy" />
                <span className="work-item__no">
                  {String(work.w_no).padStart(2, "0")}
                </span>
              </div>

              <div className="work-item__body">
                <h3 className="work-item__title">{work.w_name.trim()}</h3>
                <p className="work-item__desc">{work.description}</p>

                {work.technologies?.length > 0 && (
                  <ul className="work-item__tags">
                    {work.technologies.slice(0, 4).map((t) => (
                      <li key={t}>{t.trim()}</li>
                    ))}
                  </ul>
                )}

                <span className="work-item__cta">
                  Case study <span aria-hidden="true">&rarr;</span>
                </span>
              </div>
            </motion.article>
          ))}
        </div>

        <motion.button
          className="work__more"
          type="button"
          initial={{ opacity: 0 }}
          animate={isInView ? { opacity: 1 } : {}}
          transition={{ delay: 0.45, duration: 0.5 }}
          onClick={() => navigate("/projects")}
        >
          <span>View all projects</span>
          <span className="work__moreArrow" aria-hidden="true">&rarr;</span>
        </motion.button>
      </div>
    </section>
  );
};

export default MyWork;
