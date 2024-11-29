import i18next from 'i18next';
import LanguageDetector from 'i18next-browser-languagedetector';
import en from './translations/en.js';
import es from './translations/es.js';

i18next
  .use(LanguageDetector)
  .init({
    resources: {
      en: { translation: en },
      es: { translation: es }
    },
    fallbackLng: 'es',
    interpolation: {
      escapeValue: false
    }
  });

export default i18next;