import React from 'react'
import './CareerItem.scss'


export default function CareerItem({careerItems}) {

    const {componyName,EndDateOfCooperation,CooperationStartDate,jobTitle,logoSrc}= careerItems;

    const getEndOfDate  =  (date) =>{
        const year= date.substring(9,14);
        return year

    }


  return (
    <div className="careerHistory__card mb-3">
      <div className="card">
        <div className="careerHistory__card_img">
          <img src={logoSrc} alt={componyName} />
        </div>        
        <div className="careerHistory__card_desc">
          <h3 className="componyName">{componyName}</h3>
          <h5 className="jobTitle">{jobTitle}</h5>
          <h6 className="CooperationStartDate">{CooperationStartDate}</h6>
          <h6 className="EndDateOfCooperation">{EndDateOfCooperation}</h6>
        </div>
        <h1 className="EndOfDate">{getEndOfDate(EndDateOfCooperation)}</h1>
      </div>
    </div>
  )
}
