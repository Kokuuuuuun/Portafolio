import i18next from 'i18next';
import { translations } from '../config/translations.js';

export function initI18n() {
  i18next.init({
    lng: 'es',
    resources: {
      es: { translation: translations.es },
      en: { translation: translations.en }
    }
  });

  const langToggle = document.getElementById('langToggle');
  
  langToggle.addEventListener('click', () => {
    const currentLang = i18next.language;
    const newLang = currentLang === 'es' ? 'en' : 'es';
    
    i18next.changeLanguage(newLang, (err, t) => {
      if (err) return console.error('Error changing language:', err);
      updatePageContent();
      langToggle.querySelector('.lang-text').textContent = newLang.toUpperCase();
    });
  });
}

function updatePageContent() {
  document.querySelectorAll('[data-i18n]').forEach(element => {
    const key = element.getAttribute('data-i18n');
    element.textContent = i18next.t(key);
  });
}