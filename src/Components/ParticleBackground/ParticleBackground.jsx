import './ParticleBackground.css';

/**
 * Ambient page ground: a fine dot grid plus two very low-opacity accent
 * washes. Pure CSS — replaces the old rAF particle-network canvas, which
 * ran a nested O(n^2) link pass every frame for the life of the page.
 */
const ParticleBackground = () => (
  <div className="page-ground" aria-hidden="true">
    <div className="page-ground__grid" />
    <div className="page-ground__wash" />
  </div>
);

export default ParticleBackground;
