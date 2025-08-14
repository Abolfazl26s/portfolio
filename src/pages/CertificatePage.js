import React from "react";
import CertificateItems from "./../components/certificates/CertificateItems";
import { useTranslation } from "react-i18next";

export default function CertificatePage() {
  const { t } = useTranslation();

  return (
    <div className="content">
      <div className="col-12 mb-3">
        <h1 className="mainTitle ">{t("certificates_page_title")}</h1>

        <CertificateItems />
      </div>
    </div>
  );
}
