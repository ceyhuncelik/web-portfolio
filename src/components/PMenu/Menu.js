import React, { useEffect, useState } from 'react';
import PropTypes from 'prop-types';

const Menu = (props) => {
  console.log(props.show, 'menu icinde propert show degeri');
  const className = ['menu'];
  
  if (props.show) {
    className.push('active');
  }
  
  return (
    <>
      <div className={className.join(' ')} >
				<div className='inner' >
					<ul className='menu-items' >
						{props.children}
					</ul>
				</div>
			</div>
    </>
  );
}

Menu.propTypes = {
 // 
}
export default Menu;