import React, { useEffect, useState } from 'react'
import { connect } from 'react-redux';

import SkillItem from './SkillItem'
import axios from 'axios';
import Spinner from './../layout/spinner/Spinner';
import './SkillItems.scss'

function SkillItems() {
    const [skills, setSkills] =useState([])
    const [loading, setLoading] = useState(true);

    const getAllSkill = () => {
        axios
          .get('https://abolfazl26s.github.io/project_data/data/db.json')
          .then(function (response) {
            // handle success
            
            setSkills(response.data.skills);
            setLoading(false)
          })
          
        };

        useEffect(()=>{
            getAllSkill();
        },[])

        if(loading) <Spinner/>

  return (
    <>
<ul className="progressSec">
    
{skills.map((item)=> (
    <SkillItem key={item.id} skillItems={item}/>
))}

</ul>



<svg width={0} height={0}>
  <defs>
    <linearGradient id="cl1" gradientUnits="objectBoundingBox" x1={0} y1={0} x2={1} y2={1}>
      <stop stopColor="#618099" />
      <stop offset="100%" stopColor="#8e6677" />
    </linearGradient>
    <linearGradient id="cl2" gradientUnits="objectBoundingBox" x1={0} y1={0} x2={0} y2={1}>
      <stop stopColor="#8e6677" />
      <stop offset="100%" stopColor="#9b5e67" />
    </linearGradient>
    <linearGradient id="cl3" gradientUnits="objectBoundingBox" x1={1} y1={0} x2={0} y2={1}>
      <stop stopColor="#9b5e67" />
      <stop offset="100%" stopColor="#9c787a" />
    </linearGradient>
    <linearGradient id="cl4" gradientUnits="objectBoundingBox" x1={1} y1={1} x2={0} y2={0}>
      <stop stopColor="#9c787a" />
      <stop offset="100%" stopColor="#817a94" />
    </linearGradient>
    <linearGradient id="cl5" gradientUnits="objectBoundingBox" x1={0} y1={1} x2={0} y2={0}>
      <stop stopColor="#817a94" />
      <stop offset="100%" stopColor="#498a98" />
    </linearGradient>
    <linearGradient id="cl6" gradientUnits="objectBoundingBox" x1={0} y1={1} x2={1} y2={0}>
      <stop stopColor="#498a98" />
      <stop offset="100%" stopColor="#618099" />
    </linearGradient>
  </defs>
</svg>

    </>
  )
}


export default connect()(SkillItems);