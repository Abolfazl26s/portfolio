import React from "react";
import "./CareerItem.scss";
import { useTranslation } from "react-i18next";

export default function CareerItem({ careerItem, currentLanguage }) {
  const { t } = useTranslation();

  // destructuring را برای استفاده از کلیدهای چندزبانه به‌روز کردیم
  const {
    componyName_fa,
    componyName_en,
    EndDateOfCooperation_fa,
    EndDateOfCooperation_en,
    CooperationStartDate_fa,
    CooperationStartDate_en,
    jobTitle_fa,
    jobTitle_en,
    logoSrc,
  } = careerItem;

  const getEndOfDate = (date) => {
    // از یک شرط برای اطمینان از اینکه date یک رشته معتبر است استفاده می‌کنیم
    if (typeof date === "string" && date.length > 0) {
      // برای نمایش سال، تاریخ را از حالت شمسی به میلادی تبدیل و سپس سال را استخراج می‌کنیم
      // فرض می‌کنیم تاریخ‌ها به شکل yyyy/mm/dd هستند
      // در اینجا، با توجه به فرمت تاریخ شمسی شما، نیاز به substring دقیق‌تری داریم
      return date.substring(9, 14); // سال را از 1400 استخراج می‌کند
    }
    return ""; // یک رشته خالی یا یک مقدار پیش‌فرض برگردانید
  };

  return (
    <div className="careerHistory__card mb-3">
      <div className="card">
        <div className="careerHistory__card_img">
          {/* نام شرکت را بر اساس زبان فعلی در alt قرار می‌دهیم */}
          <img
            src={logoSrc}
            alt={currentLanguage === "fa" ? componyName_fa : componyName_en}
          />
        </div>
        <div className="careerHistory__card_desc">
          <h3 className="componyName">
            {/* نمایش نام شرکت بر اساس زبان */}
            {currentLanguage === "fa" ? componyName_fa : componyName_en}
          </h3>
          <h5 className="jobTitle">
            {/* نمایش عنوان شغل بر اساس زبان */}
            {currentLanguage === "fa" ? jobTitle_fa : jobTitle_en}
          </h5>
          <h6 className="CooperationStartDate">
            {/* نمایش تاریخ شروع بر اساس زبان */}
            {currentLanguage === "fa"
              ? CooperationStartDate_fa
              : CooperationStartDate_en}
          </h6>
          <h6 className="EndDateOfCooperation">
            {/* نمایش تاریخ پایان بر اساس زبان */}
            {currentLanguage === "fa"
              ? EndDateOfCooperation_fa
              : EndDateOfCooperation_en}
          </h6>
        </div>
        <h1 className="EndOfDate">
          {/* فراخوانی تابع getEndOfDate با کلید مناسب زبان */}
          {getEndOfDate(
            currentLanguage === "fa"
              ? EndDateOfCooperation_fa
              : EndDateOfCooperation_en
          )}
        </h1>
      </div>
    </div>
  );
}
