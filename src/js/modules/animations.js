import Typed from 'typed.js';
import VanillaTilt from 'vanilla-tilt';

export function initAnimations() {
  // Typing animation
  new Typed('#typed-text', {
    strings: [
      'Desarrollador Web Full Stack',
      'UI/UX Designer',
      'Problem Solver',
      'Tech Enthusiast'
    ],
    typeSpeed: 50,
    backSpeed: 30,
    loop: true
  });

  // Initialize project cards tilt effect
  VanillaTilt.init(document.querySelectorAll('.project-card'), {
    max: 25,
    speed: 400,
    glare: true,
    'max-glare': 0.5
  });
}