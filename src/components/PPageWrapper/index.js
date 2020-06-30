import React, { useEffect, useState } from 'react';
import PropTypes from 'prop-types';



const PPageWrapper = (props) => {
  const className = ['page-wrapper background-main'];
  if (props.className) {
    className.push(props.className);
  }
  return (
    <div className={className.join(' ')}>
      <div className="page-border-top" ></div>
      <div className="page-border-bottom" ></div>
      <div className="page-border-right" ></div>      
      <div className="page-border-left" ></div>
      {props.children}
  </div>
  );
}



PPageWrapper.propTypes = {
  children: PropTypes.oneOfType([PropTypes.object, PropTypes.array]),
  className: PropTypes.string,
};

export default PPageWrapper;

// scss selector 
// .page-wrapper {
// ....
//   .background-main, .background-sub {
//    .....

// <div className="page-wrapper">
//   <div className="background-main"></div>>
// </div>

// https://github.com/facebook/prop-types proptypes