import React from 'react'

export default function CertificateItem({certificate}) {
  const {title,imgSrc}= certificate
  return (
    <div className="col-xl-4 col-md-6 mb-3">
    <div className="card">
      <img
        src={imgSrc}
        className="card-img-top"
        alt="..."
        style={{maxHeight: "250px"}}
      />
      <div className="card-body">
        <h5 className="card-title">{title}</h5>             
      </div>
    </div>
  </div>

  )
}
