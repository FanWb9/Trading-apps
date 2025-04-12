import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';
import languageDetector from 'i18next-browser-languagedetector';
import enTranslation from './locales/en/translation.json';
import idTranslation from './locales/id/translation.json';

i18n
  .use(languageDetector) // Auto-detect language
  .use(initReactI18next) // Init i18next with react
  .init({
    resources: {
      en: {
        translation: enTranslation,
      },
      id: {
        translation: idTranslation,
      },
    },
    fallbackLng: 'en', // Fallback language when the selected language is not available
    debug: true, // Enable debug to see logs in the console
    interpolation: {
      escapeValue: false, // React already escapes values
    },
  });

export default i18n;
