import Logo from 'assets/images/Logo.png';
import PropTypes from 'prop-types';
import React from 'react';

export default function CompanyLogo(settings) {
  return (
    <div>
      <div>
        <img src={Logo} alt="company-logo" width={settings.lebar} />
      </div>
    </div>
  );
}

CompanyLogo.propTypes = {
  settings: PropTypes.string,
  prefix: PropTypes.string.isRequired,
  lebar: PropTypes.string,
};
