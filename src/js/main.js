import { initGameIntro } from './modules/gameIntro.js';
import { initAnimations } from './modules/animations.js';
import { initTheme } from './modules/theme.js';
import { initI18n } from './modules/i18n.js';
import { initSections } from './modules/sections.js';
import { initContact } from './modules/contact.js';
import { initNavigation } from './modules/navigation.js';

// Initialize AOS
AOS.init({
  duration: 1000,
  once: true,
  offset: 100
});

// Initialize game intro
initGameIntro();

// Initialize other modules after game intro
document.addEventListener('gameIntroComplete', () => {
  initAnimations();
  initTheme();
  initI18n();
  initNavigation();
  initSections();
  initContact();
});