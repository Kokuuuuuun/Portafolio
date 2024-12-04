import { initNavigation } from './navigation.js';
import { initAnimations } from './animations.js';
import { initParticles } from './particles.js';
import { initDarkMode } from "./js/darkMode";

document.addEventListener('DOMContentLoaded', () => {
  initNavigation();
  initAnimations();
  initParticles();
  initDarkMode();
  
  // Formulario de contacto
  const form = document.querySelector('.contact-form');
  if (form) {
    form.addEventListener('submit', (e) => {
      e.preventDefault();
      console.log('Form submitted');
    });
  }
});