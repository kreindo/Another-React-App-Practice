import React from 'react';
import PropTypes from 'prop-types';

const Button = (props) => {
  return (
    <div>
      <button>{props.value}</button>
    </div>
  );
};

Button.propTypes = {
  value: PropTypes.string,
};

export default Button;
