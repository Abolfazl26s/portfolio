import React, { useEffect, useState } from "react";
import CertificateItem from "./CertificateItem";
import LoadMoreButton from "../layout/LoadMoreButton";
import "./CertificateItems.scss";
import axios from "axios";
import { useTranslation } from "react-i18next"; // استفاده از useTranslation

export default function CertificateItems() {
  const { i18n } = useTranslation(); // فراخوانی هوک useTranslation
  const [certificates, setCertificates] = useState([]);
  const [showMore, setShowMore] = useState(4);

  const getAllcertificates = () => {
    axios
      .get("https://abolfazl26s.github.io/project_data/data/db.json")
      .then(function (response) {
        setCertificates(response.data.certificates);
      })
      .catch(function (error) {
        console.error("Error fetching certificates:", error);
      });
  };

  const showMoreItems = () => {
    setShowMore((prevValue) => prevValue + 4);
  };

  useEffect(() => {
    getAllcertificates();
  }, []);

  const currentLanguage = i18n.language; // دریافت زبان فعلی

  return (
    <div className="row">
      {certificates.slice(0, showMore).map((certificate) => (
        <CertificateItem
          key={certificate.id}
          certificate={certificate}
          currentLanguage={currentLanguage} // ارسال زبان فعلی به کامپوننت فرزند
        />
      ))}

      <div className="col-12 d-none">
        {showMore - 4 >= certificates.length ? (
          ""
        ) : (
          <LoadMoreButton showMore={showMoreItems} />
        )}
      </div>
    </div>
  );
}
