import { initNavigation } from './navigation.js';
import { initAnimations } from './animations.js';
import { initParticles } from './particles.js';

document.addEventListener('DOMContentLoaded', () => {
  initNavigation();
  initAnimations();
  initParticles();
  
  // Form handling
  const form = document.querySelector('.contact-form');
  if (form) {
    form.addEventListener('submit', (e) => {
      e.preventDefault();
      console.log('Form submitted');
    });
  }
});