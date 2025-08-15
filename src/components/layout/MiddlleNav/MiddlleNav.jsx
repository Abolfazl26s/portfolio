import React, { useEffect, useState } from "react";
import { NavLink } from "react-router-dom";
import "./MiddlleNav.scss";
import axios from "axios";
import { useTranslation } from "react-i18next";

export default function MiddlleNav() {
  const { i18n } = useTranslation();
  const [menuItems, setMenuItems] = useState([]);
  const [menuMobileIsActive, setMenuMobileIsActive] = useState(false);

  const getMenuItems = async () => {
    try {
      const response = await axios.get(
        "https://abolfazl26s.github.io/project_data/data/db.json"
      );
      setMenuItems(response.data.menuItems);
    } catch (error) {
      console.error("Error fetching menu items:", error);
    }
  };

  const toggleMenu = () => {
    setMenuMobileIsActive((prevState) => !prevState);
  };

  // تابع جدید برای بستن منو و اسکرول به صفحه
  const handleNavLinkClick = (id) => {
    // بستن منو
    setMenuMobileIsActive(false);

    // اسکرول به لینک مورد نظر با استفاده از JavaScript
    // برای این کار، باید id هر بخش در صفحه اصلی شما با لینک منو مطابقت داشته باشد.
    const element = document.getElementById(id);
    console.log(id)
    console.log(id)
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  useEffect(() => {
    getMenuItems();
  }, []);

  const currentLanguage = i18n.language;

  return (
    <div className="row mb-5">
      <div className="col-12">
        <div className={`navBar ${menuMobileIsActive ? "activeMobile" : ""}`}>
          <button onClick={toggleMenu} className="btnToggleMenu btn">
            {menuMobileIsActive ? (
              <i className="fas fa-circle-xmark"></i>
            ) : (
              <i className="fas fa-bars-staggered"></i>
            )}
          </button>
          {menuItems.length > 0 &&
            menuItems.map((item) => (
              <NavLink
                key={item.id}
                className="btn navBtn"
                to={item.link}
                // استفاده از تابع جدید برای بستن منو و اسکرول
                onClick={() => handleNavLinkClick(item.link.substring(1))}
              >
                <i className={item.icon} />
                {currentLanguage === "fa" ? item.title_fa : item.title_en}
              </NavLink>
            ))}
        </div>
      </div>
    </div>
  );
}
