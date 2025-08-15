import React, { useState } from "react";
import "./TopNav.scss";
import LanguageSwitcher from "../changeLanguage/LanguageSwitcher";
import { useTranslation } from "react-i18next";

const TopNav = () => {
  const { i18n } = useTranslation();
  const currentLanguage = i18n.language;
  const [theme, setTheme] = useState(true);

  if (theme) {
    document.querySelector("body").setAttribute("data-theme", "light");
  } else {
    document.querySelector("body").setAttribute("data-theme", "dark");
  }

  const changeTheme = () => {
    setTheme((prevState) => !prevState);
    if (theme) {
      document.querySelector("body").setAttribute("data-theme", "light");
    } else {
      document.querySelector("body").setAttribute("data-theme", "dark");
    }
  };

  return (
    <div className="row">
      <div className="col-12">
        <div className="topNav">
          <div className="topNav__logo">
            {/* <img src="images/mylogo-ai.png" alt="" className="mainLogo" /> */}
            <h2 className="topNav__title">
              {currentLanguage === "fa" ? "خوش آمدید" : "Wellcome"}
            </h2>
          </div>
          <div className="topNav__actionBtn">
            <button onClick={changeTheme} className="btn btnDrakMode topNavBtn">
              {theme ? (
                <i className="fas fa-moon" />
              ) : (
                <i className="fas fa-sun"></i>
              )}
            </button>
            <div className="btn topNavBtn">
              <i className="fas fa-language" />
            </div>
            <LanguageSwitcher />
          </div>
        </div>
      </div>
    </div>
  );
};

export default TopNav;
