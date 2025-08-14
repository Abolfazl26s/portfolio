import React, { useState } from "react";
import { useTranslation } from "react-i18next";
import "./LanguageSwitcher.css";

const LanguageSwitcher = () => {
  const { i18n } = useTranslation();
  const [isOpen, setIsOpen] = useState(false);

  // تابعی برای تغییر زبان و بستن دراپ‌دون
  const changeLanguage = (lang) => {
    i18n.changeLanguage(lang);
    setIsOpen(false);
  };

  return (
    <div className="dropdown-container">
      <button onClick={() => setIsOpen(!isOpen)} className="dropdown-button">
        {i18n.language === "fa" ? "فارسی" : "English"}
      </button>
      {isOpen && (
        <div className="dropdown-menu">
          <button
            onClick={() => changeLanguage("fa")}
            className="dropdown-item"
          >
            فارسی
          </button>
          <button
            onClick={() => changeLanguage("en")}
            className="dropdown-item"
          >
            English
          </button>
        </div>
      )}
    </div>
  );
};

export default LanguageSwitcher;
