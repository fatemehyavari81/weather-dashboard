import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';
import LanguageDetector from 'i18next-browser-languagedetector';

i18n
  .use(LanguageDetector)
  .use(initReactI18next)
  .init({
    fallbackLng: 'en',
    debug: true,
    interpolation: {
      escapeValue: false,
    },
    resources: {
      en: {
        translation: {
          "login": "Login",
          "loginPlaceholder": "Enter Your Name",
          "loginBtn": "LOGIN",
          "lan" : "Language",
          "lanEn" : "English",
          "lanFa" : "Persian",
          "footerPolicy" : "All rights of this site are reserved for Nadin Sadr Aria Engineering Company."


        }
      },
      fa: {
        translation: {
          "login": "ورود",
          "loginPlaceholder": "نام خود را وارد کنید",
          "loginBtn": "ورود",
          "lan" : "زبان",
          "lanEn" : "انگلیسی",
          "lanFa" : "فارسی",
        }
        },
    },
  });

export default i18n;
