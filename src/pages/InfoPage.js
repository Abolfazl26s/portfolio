import React, { useEffect, useState } from "react";
import CareerHistory from "./../components/careerHistory/CareerHistory";
import { useTranslation } from "react-i18next";

export default function InfoPage() {
  const { t, i18n } = useTranslation();
  const [careerHistory, setCareerHistory] = useState([]);
  const getAllSkill = async () => {
    try {
      const res = await fetch(
        "https://abolfazl26s.github.io/project_data/data/db.json"
      );
      const data = await res.json();
      setCareerHistory(data.myCareerHistory);
    } catch (error) {
      console.error("Error fetching career history:", error);
    }
  };

  useEffect(() => {
    getAllSkill();
  }, []);

  const currentLanguage = i18n.language;

  return (
    <div className="content">
      <div className="mb-3">
        <h1 className="mainTitle ">
          {currentLanguage === "fa" ? "درباره من" : "About Me"}
        </h1>
        <h5 className="mainDes">
          {currentLanguage === "fa"
            ? `من به عنوان یک توسعه‌دهنده فرانت‌اند، با علاقه زیاد به ساخت تجربه‌های کاربری ساده، قابل دسترس و جذاب، تلاش می‌کنم تا پُلی باشم بین دنیای طراحی و فناوری. از این چالش لذت می‌برم که مشکلات پیچیده را به رابط‌های کاربری زیبا و کاربرپسند تبدیل کنم که کاربران واقعاً از کار کردن با آن‌ها خوشحال باشند.`
            : `As a Front-End Developer with a passion for creating clean, accessible, and engaging user experiences, I thrive on bridging the gap between design and technology. I love the challenge of transforming complex problems into beautiful, intuitive interfaces that users genuinely enjoy interacting with.`}
        </h5>
      </div>
      <div className="mySkills">
        <h2 className="mb-4 fw-bold">
          {currentLanguage === "fa" ? "سابقه کاری" : "Career History"}
        </h2>
        {/* زبان فعلی را به کامپوننت CareerHistory ارسال می‌کنیم */}
        <CareerHistory
          careerHistory={careerHistory}
          currentLanguage={currentLanguage}
        />
      </div>
    </div>
  );
}
