// import i18n from "i18next";
// import { initReactI18next } from "react-i18next";
// import enTranslation from "./locales/en/translation.json";
// import faTranslation from "./locales/fa/translation.json";

// const resources = {
//   en: {
//     translation: enTranslation,
//   },
//   fa: {
//     translation: faTranslation,
//   },
// };

// i18n.use(initReactI18next).init({
//   resources,
//   lng: "fa", // زبان پیش‌فرض را تنظیم کنید
//   fallbackLng: "en",
//   interpolation: {
//     escapeValue: false,
//   },
// });

// export default i18n;

import i18n from "i18next";
import { initReactI18next } from "react-i18next";
import HttpApi from "i18next-http-backend";
import LanguageDetector from "i18next-browser-languagedetector";

const apiURL = process.env.REACT_APP_API_URL;

i18n
  .use(HttpApi)
  .use(LanguageDetector)
  .use(initReactI18next)
  .init({
    lng: "fa",
    fallbackLng: "en",
    debug: true,
    interpolation: {
      escapeValue: false,
    },
    backend: {
      loadPath: apiURL,
    },
    onLanguageChanged: (lng) => {
      // این تابع با تغییر زبان اجرا می‌شود
      // و استایل و جهت صفحه را تغییر می‌دهد
      document.body.dir = lng === "fa" ? "rtl" : "ltr";
      // اضافه کردن کلاس به body برای تغییر فونت
      document.body.className = lng;
    },
  });

export default i18n;
