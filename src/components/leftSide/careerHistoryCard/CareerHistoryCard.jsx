import React from 'react'

import './CareerHistoryCard.scss'
const logoCompony = 'images/1655882802188.jpeg'


export default function CareerHistoryCard() {
  return (
    <div className="careerHistory__card mb-3">
      <div className="card">
        <div className="careerHistory__card_img">
          <img src={logoCompony} alt="" />
        </div>        
        <div className="careerHistory__card_desc">
          <h3 className="componyName">ایده گستران ثمین پارس</h3>
          <h5 className="jobTitle">برنامه نویس فرانت اند</h5>
          <h6 className="CooperationStartDate">07 / 05 / 1400</h6>
          <h6 className="EndDateOfCooperation">07 / 05 / 1401</h6>
        </div>
        <h1 className="EndOfDate">1401</h1>
      </div>
    </div>
  );
}
