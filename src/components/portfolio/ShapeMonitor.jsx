import React from 'react';
import './ShapeMonitor.scss';
export default function ShapeMonitor({ imgSrc, projectName}) {
  return (
    <div className='shapeMonitor'>
      <img src={imgSrc} alt={projectName} loading="lazy" />
      <div className='specker'></div>
    </div>
  );
}
