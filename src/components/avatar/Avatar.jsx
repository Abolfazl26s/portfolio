import React, { useEffect, useState } from "react";
import { useTranslation } from "react-i18next";
import axios from "axios";

const Avatar = () => {
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

  // این آرایه شامل اندیس‌های مورد نظر شماست
  const desiredIndices = [0, 5];

  // ابتدا آرایه را فیلتر می‌کنیم
  const filteredItems= Info.filter((item, index) => {
    return desiredIndices.includes(index);
  });

  const currentLanguage = i18n.language;
  return (
    <div>
      {filteredItems.map((item) => (
        <div>
          <div className="avatar">
            <img
              src={item.urlAvatar}
              alt={item.title}
              className="avatar__image"
            />
          </div>

          <div className="avatar_info">
            <h1 className="fullName">
              {currentLanguage === "fa" ? item.fullName_fa : item.fullName_en}
            </h1>
            <p className="mb-3 small">
              {currentLanguage === "fa" ? item.job_title_fa : item.job_title_en}
            </p>
          </div>
        </div>
      ))}
    </div>
  );
};

export default Avatar;
