import React from 'react'
import RightSide from './../rightSide/RightSide';
import LeftSide from '../leftSide/LeftSide';

export default function MainContent() {
  return (
    <div className="row">
        <RightSide />
        <LeftSide />
    </div>
  );
}
