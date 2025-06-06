import React from 'react'

import spinnerImg from './spinner.gif';

export default function Spinner() {
  return (
    <>
        <img src={spinnerImg} alt="Loading" style={{width: '200px', margin: "auto" , display: "block"}} />
    </>
  )
}
