import React, { useEffect, useState } from "react";
import CareerHistory from "./../components/careerHistory/CareerHistory";
import axios from "axios";

export default function InfoPage() {
  const [careerHistory, setCareerHistory] = useState([]);
  // const [loading, setLoading] = useState(true);

  const getAllSkill = async () => {
    // axios
    //   .get('https://abolfazl26s.github.io/project_data/data/db.json')
    //   .then(function (response) {
    //     // handle success
    //     setCareerHistory(response.data.myCareerHistory);
    //     // setLoading(false)

    //   })
    const res = await fetch(
      "https://abolfazl26s.github.io/project_data/data/db.json"
    );
    const data = await res.json();
    setCareerHistory(data.myCareerHistory);
  };

  useEffect(() => {
    getAllSkill();
  }, []);

  return (
    <div className="content">
      <div className="mb-3">
        <h1 className="mainTitle ">درباره من</h1>
        <h4 className="mainDes">
          سلام!!!
          <br />
          ابوالفضل سعیدآبادی هستم، طراح رابط کاربری وب و موبایل و برنامه نویس
          فرانت اند در زمینه وب هستم
        </h4>
      </div>
      <div className="mySkills">
        <h2 className="mb-4">سوابق شغلی من</h2>

        <CareerHistory careerHistory={careerHistory} />
      </div>
    </div>
  );
}
