import i18next from './i18n/i18n.js';

export function initLanguage() {
  const langToggles = document.querySelectorAll('#lang-toggle, #lang-toggle-mobile');
  
  // Set initial state based on current language
  const isEnglish = i18next.language === 'en';
  langToggles.forEach(toggle => toggle.checked = isEnglish);

  // Language toggle handler
  langToggles.forEach(toggle => {
    toggle.addEventListener('change', () => {
      const newLang = toggle.checked ? 'en' : 'es';
      i18next.changeLanguage(newLang).then(() => {
        updateContent();
        // Sync other toggle
        langToggles.forEach(otherToggle => {
          if (otherToggle !== toggle) {
            otherToggle.checked = toggle.checked;
          }
        });
      });
    });
  });

  // Initial content update
  updateContent();
}

function updateContent() {
  document.querySelectorAll('[data-i18n]').forEach(element => {
    const key = element.getAttribute('data-i18n');
    element.textContent = i18next.t(key);
  });
}