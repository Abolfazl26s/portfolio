import React, { useEffect, useState } from 'react';

import PortfolioCard from './PortfolioCard';
import LoadMoreButton from '../layout/LoadMoreButton';

import Spinner from '../layout/spinner/Spinner';
import axios from 'axios';
export default function PortfolioCards() {
  const [projects, setProjects] = useState([]);
  const [showMore, setShowMore] = useState(6);
  const [loading, setLoading] = useState(true);

  const getAllProjects = () => {
    axios
      .get('https://abolfazl26s.github.io/project_data/data/db.json')
      .then(function (response) {
        // handle success
        setProjects(response.data.projectTemplate)
        setLoading(false)
      })
      
    };

 const showMoreItems = () => {
  setShowMore((prevValue) => prevValue + 4)
 };

  useEffect(() => {
    getAllProjects();
  },[]);

  if(loading) {
   return <Spinner />
  }else{

    return (
      <div className="row">
        {projects.slice(0, showMore).map((project) => (
          <PortfolioCard key={project.id} project={project} />
        ))}
  
        <div className="col-12">
          {(showMore - 6) === projects.length ? "" : <LoadMoreButton showMore={showMoreItems} />}          
        </div>
      </div>
    );
  }


}
