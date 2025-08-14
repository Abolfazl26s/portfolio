import React from "react";
import SkillItems from "../components/skills/SkillItems";
import { useTranslation } from "react-i18next";

export default function SkillPage() {
  const { t } = useTranslation();

  return (
    <div className="content">
      <div className="col-12 mb-3">
        <h1 className="mainTitle ">{t("skills_page_title")}</h1>
      </div>
      <SkillItems />
    </div>
  );
}
