import React, { useEffect, useState } from 'react';
import PropTypes from 'prop-types';



const PPageWrapper = (props) => {
  // const shape = {
  //   radius: 10,
  //   diameter() {
  //     return this.radius * 2;
  //   },
  //   perimeter: () => 2 * Math.PI * this.radius
  // };

  // console.log(shape.diameter());
  // console.log(shape.perimeter());


  const className = ['page-wrapper'];
  if (props.className) {
    className.push(props.className);
  }
  if (props.mainPage) {
    className.push('background-main');
  } else {
    className.push('background-sub');
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
  mainPage: PropTypes.bool,
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