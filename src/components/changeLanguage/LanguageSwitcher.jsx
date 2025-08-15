import React, { useState, useEffect } from "react";
import { useTranslation } from "react-i18next";

const DirectionSwitcher = () => {
  const { i18n } = useTranslation();
  const [isRTL, setIsRTL] = useState(i18n.language === "fa");

  // useEffect برای اعمال تغییرات به تگ <body> و هماهنگی با i18n
  useEffect(() => {
    document.body.dir = isRTL ? "rtl" : "ltr";
  }, [isRTL]);

  const toggleDirectionAndLanguage = () => {
    const newLanguage = i18n.language === "fa" ? "en" : "fa";
    i18n.changeLanguage(newLanguage);
    setIsRTL(newLanguage === "fa");
  };

  return (
      <div className="btn topNavBtn" onClick={toggleDirectionAndLanguage}>
        <i className="fas fa-language" />
      </div>
  );
};

export default DirectionSwitcher;
