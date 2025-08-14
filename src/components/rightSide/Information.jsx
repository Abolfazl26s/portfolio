import { useTranslation } from "react-i18next";
import React, { useEffect, useState } from "react";
import axios from "axios";
export default function Information() {
  const { i18n } = useTranslation();
  const [Info, setInfo] = useState([]);

  const getInfo = async () => {
    try {
      const apiUrl = process.env.REACT_APP_API_URL;
      const response = await axios.get(apiUrl);
      // پس از دریافت موفقیت‌آمیز داده‌ها، آن‌ها را در state ذخیره می‌کنیم
      setInfo(response.data.StaticInfo);
    } catch (error) {
      // در صورت بروز خطا، آن را در کنسول نمایش می‌دهیم
      console.error("Error fetching menu items:", error);
    }
  };

  useEffect(() => {
    getInfo();
  }, []);

  const currentLanguage = i18n.language;
  return (
    <div className="information">
      {Info.slice(1, 4).map((item) => (
        <div className="information__card">
          <span className="infoIcon">
            <i className="fas fa-phone-flip" />
          </span>
          <div className="infoContent">
            <p className="infoTitle">
              {currentLanguage === "fa" ? item.title_fa : item.title_en}
            </p>
            <p href="tel:+447776890129" dir="ltr" className="infoText">
              {currentLanguage === "fa" ? item.value_fa : item.value_en}
            </p>
          </div>
        </div>
      ))}
    </div>
  );
}
