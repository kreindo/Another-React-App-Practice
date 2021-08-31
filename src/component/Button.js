import React from 'react';
import PropTypes from 'prop-types';

const Button = (props) => {
  return (
    <div>
      <button className={props.className}>{props.value}</button>
    </div>
  );
};

Button.propTypes = {
  value: PropTypes.string,
  className: PropTypes.string,
};

export default Button;
