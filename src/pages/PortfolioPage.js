import React from "react";
import PortfolioCards from "../components/portfolio/PortfolioCards";
import { useTranslation } from "react-i18next";

export default function PortfolioPage() {
  const { t } = useTranslation();

  return (
    <div className="content">
      <div className="mb-3">
        <h1 className="mainTitle ">{t("portfolio_page_title")}</h1>
      </div>

      <PortfolioCards />
    </div>
  );
}
