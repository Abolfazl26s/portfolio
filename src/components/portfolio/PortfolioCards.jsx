import React, { useEffect, useState } from "react";
import PortfolioCard from "./PortfolioCard";
import Spinner from "../layout/spinner/Spinner";
import axios from "axios";
import { useTranslation } from "react-i18next";

export default function PortfolioCards() {
  const { i18n } = useTranslation();
  const [projects, setProjects] = useState([]);
  const [loading, setLoading] = useState(true);
  const [currentPage, setCurrentPage] = useState(1);
  const itemsPerPage = 6;

  const getAllProjects = async () => {
    try {
      const apiUrl = process.env.REACT_APP_API_URL;
      const response = await axios.get(apiUrl);
      setProjects(response.data.projectTemplate);
    } catch (error) {
      console.error("Error fetching projects:", error);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    getAllProjects();
  }, []);

  const currentLanguage = i18n.language;
  const totalPages = Math.ceil(projects.length / itemsPerPage);
  const startIndex = (currentPage - 1) * itemsPerPage;
  const endIndex = startIndex + itemsPerPage;
  const currentProjects = projects.slice(startIndex, endIndex);

  const renderPageNumbers = () => {
    const pageNumbers = [];
    for (let i = 1; i <= totalPages; i++) {
      pageNumbers.push(
        <button
          key={i}
          className={`btn mx-1 ${
            i === currentPage ? "btn-primary" : "btn-secondary"
          }`}
          onClick={() => setCurrentPage(i)}
        >
          {i}
        </button>
      );
    }
    return pageNumbers;
  };

  if (loading) {
    return <Spinner />;
  }

  return (
    <div className="portfolio-container">
      <div className="row">
        {currentProjects.map((project) => (
          <PortfolioCard
            key={project.id}
            project={project}
            currentLanguage={i18n.language}
          />
        ))}
      </div>
      {totalPages > 1 && (
        <div className="pagination-controls d-flex justify-content-center my-4">
          <button
            className="btn btn-primary mx-2"
            onClick={() => setCurrentPage((prevPage) => prevPage - 1)}
            disabled={currentPage === 1}
          >
            {currentLanguage === "fa" ? "قبل" : "prev"}
          </button>

          {renderPageNumbers()}

          <button
            className="btn btn-primary mx-2"
            onClick={() => setCurrentPage((prevPage) => prevPage + 1)}
            disabled={currentPage === totalPages}
          >
            {currentLanguage === "fa" ? "بعدی" : "next"}
          </button>
        </div>
      )}
    </div>
  );
}
