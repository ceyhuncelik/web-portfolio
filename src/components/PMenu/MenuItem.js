import React, { useEfect, useState } from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';

const MenuItem = (props) => {
  return (
    <li>
			<Link to={props.to} className='section-toggle' data-section='intro' >
				{props.label}
			</Link>
		</li>
  );
}

MenuItem.propTypes = {
 // 
}
export default MenuItem;

// bununda link e cevrilmesi gerek arkadas 
