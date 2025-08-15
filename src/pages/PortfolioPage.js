import React from "react";
import PortfolioCards from "../components/portfolio/PortfolioCards";
import { useTranslation } from "react-i18next";

export default function PortfolioPage() {
  const { i18n } = useTranslation();
  const curLang = i18n.language;

  return (
    <div className="content">
      <div className="mb-3">
        <h1 className="mainTitle ">
          {curLang === "fa" ? " پروژه ها" : "Projects"}
        </h1>
      </div>

      <PortfolioCards />
    </div>
  );
}
