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
          "forecastTitle" : "2 weeks Forecast",
          "footerPolicy" : "All rights of this site are reserved for Nadin Sadr Aria Engineering Company.",
          "searchLabel" : "Search Your Location",
          "WeatherDashboard" : "WeatherDashboard",
          "contactUs" : "contact us",
          "monday": "Mon",
          "tuesday": "Tue",
          "wednesday": "Wed",
          "thursday": "Thu",
          "friday": "Fri",
          "saturday": "Sat",
          "sunday": "Sun",
          "maxTemp" : "High",
          "minTemp": "Low",
          "feelsLike" : "Feels Like"



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
          "searchLabel" : "مکان مورد نظر را جستجو کنید",
          "WeatherDashboard" : "داشبورد آب و هوا",
          "forecastTitle" : "پیش بینی 2 هفته",
          "contactUs" : "تماس با ما ",
          "footerPolicy" : "همه حقوق این سایت برای شرکت مهندسی نادین صدر آریا محفوظ است.",
          "monday": "دوشنبه",
          "tuesday": "سه‌شنبه",
          "wednesday": "چهارشنبه",
          "thursday": "پنج‌شنبه",
          "friday": "جمعه",
          "saturday": "شنبه",
          "sunday": "یکشنبه",
          "maxTemp" : "بیشینه",
          "minTemp": "کمینه",
          "feelsLike" : " درجه احساس می شود"

        }
        },
    },
  });

export default i18n;
