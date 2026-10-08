import { useRef } from 'react'
import { motion, useInView } from 'framer-motion'
import AnchorLink from 'react-anchor-link-smooth-scroll'
import './Footer.css'

const links = [
  { label: 'About', href: '#about' },
  { label: 'Work', href: '#work' },
  { label: 'Experience', href: '#experience' },
  { label: 'Contact', href: '#contact' },
]

const Footer = () => {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: '-80px' })

  return (
    <motion.footer
      className="footer"
      ref={ref}
      initial={{ opacity: 0 }}
      animate={isInView ? { opacity: 1 } : {}}
      transition={{ duration: 0.6 }}
    >
      <div className="container footer__inner">
        <div className="footer__brand">
          <span className="footer__mark">SS</span>
          <div>
            <p className="footer__name">Shaheer Suhaib</p>
            <p className="footer__role">Software engineer, Islamabad</p>
          </div>
        </div>

        <nav className="footer__links" aria-label="Footer">
          {links.map((l) => (
            <AnchorLink key={l.href} href={l.href}>{l.label}</AnchorLink>
          ))}
          <a href="https://github.com/shaheer-suhaib" target="_blank" rel="noreferrer">
            GitHub <span aria-hidden="true">&#8599;</span>
          </a>
        </nav>
      </div>

      <div className="container footer__bottom">
        <p>&copy; {new Date().getFullYear()} Shaheer Suhaib</p>
        <p>Built with React &amp; Vite</p>
      </div>
    </motion.footer>
  )
}

export default Footer
