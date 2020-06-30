import React, { useEfect, useState } from 'react';
import PropTypes from 'prop-types';

const MenuItem = (props) => {
  return (
    <li>
			<a href='#' className='section-toggle' data-section='intro' >
				Home
			</a>
		</li>
  );
}

MenuItem.propTypes = {
 // 
}
export default MenuItem;