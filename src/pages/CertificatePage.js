import React from "react";
import CertificateItems from "./../components/certificates/CertificateItems";
import { useTranslation } from "react-i18next";

export default function CertificatePage() {
  const { i18n } = useTranslation();
  const curLang = i18n.language;
  return (
    <div id="certificates" className="content">
      <div className="col-12 mb-3">
        <h1 className="mainTitle ">
          {curLang === "fa" ? "گواهی نامه ها" : "Certificates"}
        </h1>

        <CertificateItems />
      </div>
    </div>
  );
}
