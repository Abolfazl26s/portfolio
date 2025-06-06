import React from 'react';

const LoadMoreButton = ({showMore}) => {

  const styleBtn = {
    position: 'relative',
    marginBottom: '2em',
    margin: ' 0 auto',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    gap: '10px',
    borderRadius: '5em',
    width: '12em',
    padding: '1em',
    backgroundImage: 'linear-gradient(90deg, #de2774, #f95a5e)',
    color: '#ffffff',
    transition: 'all 3ms cubic-bezier(0.075, 0.82, 0.165, 1)',
  };

 

  return (
    <button
      className='btn btn-success-1'
      onClick={()=> showMore()}
      style={styleBtn}
    >
      نمایش بیشتر
    </button>
  );
};

export default LoadMoreButton;
