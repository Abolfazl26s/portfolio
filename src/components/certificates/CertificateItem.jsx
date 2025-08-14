import React from "react";
import { useTranslation } from "react-i18next";

export default function CertificateItem({ certificate, currentLanguage }) {
  const { imgSrc, title_fa, title_en } = certificate;

  return (
    <div className="col-xl-4 col-md-6 mb-3">
      <div className="card">
        <img
          src={imgSrc}
          className="card-img-top"
          alt={currentLanguage === "fa" ? title_fa : title_en}
          style={{ maxHeight: "250px" }}
        />
        <div className="card-body">
          <h5 className="card-title">
            {currentLanguage === "fa" ? title_fa : title_en}
          </h5>
        </div>
      </div>
    </div>
  );
}
