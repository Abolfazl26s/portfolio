import React from "react";
import SkillItems from "../components/skills/SkillItems";
import { useTranslation } from "react-i18next";

export default function SkillPage() {
 const { i18n } = useTranslation();
   const curLang = i18n.language;

  return (
    <div className="content">
      <div className="mb-3">
        <h1 className="mainTitle ">
          {curLang === "fa" ? " مهارت ها" : "Skills"}
        </h1>
      </div>

      <SkillItems />
    </div>
  );
}
