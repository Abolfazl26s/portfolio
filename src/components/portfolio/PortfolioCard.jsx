import React from "react";
import ShapeMonitor from "./ShapeMonitor";
import { Link } from "react-router-dom";

export default function PortfolioCard({ project }) {
  if (project.isDone)
    return (
      <div className="col-xl-4 col-md-6 mb-3 d-flex align-items-center justify-content-center flex-column">
        <Link to={project.link}>
          <ShapeMonitor imgSrc={project.imgSrc} projectName={project.name} />
        </Link>
        <div className="pt-4 pb-3 d-flex flex-column align-items-start justify-content-center">
          <p className="text-wrap fw-bolder">
            <Link to={project.link}>
              <i className="fas fa-link"></i>
              <span className="text-dark ms-1">{project.name}</span>
            </Link>
          </p>
          <p>
            <i className="fas fa-clock"></i>
            <span className="text-dark ms-1">{project.time}</span>
          </p>
          {/* <p>
            <i className='fas fa-caret-down'></i> 
            توضیحات
            </p> */}
        </div>
      </div>
    );
}
