import React from "react";
import PropTypes from "prop-types";
import ShapeMonitor from "./ShapeMonitor";
import { useTranslation } from "react-i18next";

/**
 * کامپوننت PortfolioCard برای نمایش یک آیتم از پورتفولیو.
 * این کامپوننت اطلاعات یک پروژه را دریافت کرده و به صورت یک کارت نمایش می‌دهد.
 * @param {{ project: { link: string, imgSrc: string, name_fa: string, name_en: string, time_fa: string, time_en: string } }} props
 */
export default function PortfolioCard({ project }) {
  const { i18n } = useTranslation();

  const currentLanguage = i18n.language;
  const projectName =
    currentLanguage === "fa" ? project.name_fa : project.name_en;
  const projectTime =
    currentLanguage === "fa" ? project.time_fa : project.time_en;

  return (
    <div className="col-xl-4 col-md-6 mb-3 d-flex flex-column align-items-center justify-content-center">
      <a
        href={project.link}
        target="_blank"
        rel="noopener noreferrer"
        className="text-decoration-none"
      >
        {/* از نام ترجمه شده پروژه در alt استفاده می‌کنیم */}
        <ShapeMonitor imgSrc={project.imgSrc} projectName={projectName} />
      </a>

      <div className="pt-4 pb-3 d-flex flex-column align-items-start justify-content-center">
        <p className="text-wrap fw-bolder">
          <a
            href={project.link}
            target="_blank"
            rel="noopener noreferrer"
            className="text-dark text-decoration-none"
          >
            <i className="fas fa-link"></i>
            <span className="ms-1">{projectName}</span>
          </a>
        </p>

        <p>
          <i className="fas fa-clock"></i>
          <span className="text-dark ms-1">{projectTime}</span>
        </p>
      </div>
    </div>
  );
}

// تعریف PropTypes برای اطمینان از صحت داده‌های ورودی (پراپ‌ها)
PortfolioCard.propTypes = {
  project: PropTypes.shape({
    link: PropTypes.string.isRequired,
    imgSrc: PropTypes.string.isRequired,
    name_fa: PropTypes.string.isRequired,
    name_en: PropTypes.string.isRequired,
    time_fa: PropTypes.string.isRequired,
    time_en: PropTypes.string.isRequired,
    isDone: PropTypes.bool,
  }).isRequired,
};
