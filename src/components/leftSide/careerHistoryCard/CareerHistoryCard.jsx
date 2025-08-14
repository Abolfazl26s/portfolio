import React from "react";
import "./CareerHistoryCard.scss";
import { useTranslation } from "react-i18next";

export default function CareerHistoryCard({ careerItem, currentLanguage }) {
  const { t } = useTranslation();

  const getEndOfDate = (date) => {
    // از یک شرط برای اطمینان از اینکه date یک رشته معتبر است استفاده می‌کنیم
    if (typeof date === "string" && date.length > 0) {
      return date.substring(9, 14); // سال را از 1400 استخراج می‌کند
    }
    return "";
  };

  // از کلیدهای چندزبانه برای نمایش متن‌ها استفاده می‌کنیم
  const jobTitle =
    currentLanguage === "fa" ? careerItem.jobTitle_fa : careerItem.jobTitle_en;
  const componyName =
    currentLanguage === "fa"
      ? careerItem.componyName_fa
      : careerItem.componyName_en;
  const startDate =
    currentLanguage === "fa"
      ? careerItem.CooperationStartDate_fa
      : careerItem.CooperationStartDate_en;
  const endDate =
    currentLanguage === "fa"
      ? careerItem.EndDateOfCooperation_fa
      : careerItem.EndDateOfCooperation_en;

  return (
    <div className="careerHistory__card mb-3">
      <div className="card">
        <div className="careerHistory__card_img">
          <img src={careerItem.logoSrc} alt={componyName} />
        </div>
        <div className="careerHistory__card_desc">
          <h3 className="componyName">{componyName}</h3>
          <h5 className="jobTitle">{jobTitle}</h5>
          <h6 className="CooperationStartDate">{startDate}</h6>
          <h6 className="EndDateOfCooperation">{endDate}</h6>
        </div>
        <h1 className="EndOfDate">{getEndOfDate(endDate)}</h1>
      </div>
    </div>
  );
}
