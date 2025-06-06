import React, { useEffect, useState } from 'react'
import CertificateItem from './CertificateItem';
import LoadMoreButton from '../layout/LoadMoreButton';
import './CertificateItems.scss'
import axios from 'axios';

export default function CertificateItems() {
  const [certificates, setCertificates] = useState([]);
  const [showMore, setShowMore] = useState(4);

  const getAllcertificates = () => {
    axios
    .get('https://abolfazl26s.github.io/project_data/data/db.json')
    .then(function (response) {
      // handle success
      setCertificates(response.data.certificates);
      // setLoading(false)
      console.log(response.data)
    })
    
    };

 const showMoreItems = () => {
  setShowMore((prevValue) => prevValue + 4)
 };

  useEffect(() => {
    getAllcertificates();
  },[]);

 
    
  return (
      <div className="row">
        {certificates.slice(0, showMore).map((certificate) => (
          <CertificateItem key={certificate.id} certificate={certificate} />
        ))}

<div className="col-12 d-none">
          {(showMore - 4) === certificates.length ? "" : <LoadMoreButton showMore={showMoreItems} />}          
        </div>
      </div>
  );
}
