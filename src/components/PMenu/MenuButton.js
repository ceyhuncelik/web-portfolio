import React, { useEfect, useState } from 'react';
import PropTypes from 'prop-types';

const MenuButton = (props) => {
  return (
    <>
      <button onClick={props.onClick} className='btn menu-btn' >
				<span className='lines' >
					<span className='l1' ></span>
					<span className='l2' ></span>
					<span className='l3' ></span>
				</span>
			</button>
    </>
  )
}

MenuButton.propTypes = {
 onClick: PropTypes.func.isRequired,
}
export default MenuButton;