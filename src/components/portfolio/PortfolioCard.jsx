import React from "react";
import PropTypes from "prop-types"; // 1. ایمپورت کردن PropTypes برای تعریف نوع پراپ‌ها
import ShapeMonitor from "./ShapeMonitor";

/**
 * کامپوننت PortfolioCard برای نمایش یک آیتم از پورتفولیو.
 * این کامپوننت اطلاعات یک پروژه را دریافت کرده و به صورت یک کارت نمایش می‌دهد.
 * @param {{ project: { link: string, imgSrc: string, name: string, time: string } }} props
 */
export default function PortfolioCard({ project }) {
  // 2. شرط isDone از کامپوننت حذف شد. فیلتر کردن دیتا باید در کامپوننت والد انجام شود.
  return (
    <div className="col-xl-4 col-md-6 mb-3 d-flex flex-column align-items-center justify-content-center">
      
      <a
        href={project.link}
        target="_blank" 
        rel="noopener noreferrer" 
        className="text-decoration-none" 
      >
        <ShapeMonitor imgSrc={project.imgSrc} projectName={project.name} />
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
            <span className="ms-1">{project.name}</span>
          </a>
        </p>

        <p>
          <i className="fas fa-clock"></i>
          <span className="text-dark ms-1">{project.time}</span>
        </p>
      </div>
    </div>
  );
}

// 5. تعریف PropTypes برای اطمینان از صحت داده‌های ورودی (پراپ‌ها)
PortfolioCard.propTypes = {
  project: PropTypes.shape({
    link: PropTypes.string.isRequired,
    imgSrc: PropTypes.string.isRequired,
    name: PropTypes.string.isRequired,
    time: PropTypes.string.isRequired,
    isDone: PropTypes.bool, // این پراپ دیگر در منطق کامپوننت استفاده نمی‌شود اما تعریف آن خوب است
  }).isRequired,
};
