import React from "react";
import { useTranslation } from "react-i18next";
import CareerItem from "./CareerItem";

export default function CareerHistory({ careerHistory }) {
  // هوک useTranslation را فراخوانی می‌کنیم تا به زبان دسترسی داشته باشیم
  const { i18n } = useTranslation();

  return (
    <div className="row justify-content-center">
      {careerHistory.map((careerItem) => (
        // به جای careerItems، یک شیء تکی به نام careerItem ارسال می‌کنیم
        <CareerItem
          key={careerItem.id}
          careerItem={careerItem}
          currentLanguage={i18n.language}
        />
      ))}
    </div>
  );
}
