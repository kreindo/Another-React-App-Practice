import React from 'react';
import Btn from 'component/Button';
import CompanyLogo from 'component/Logo.js';

const Card = () => {
  return (
    <div id="cardc" className="card">
      <div className="card-item">

        <CompanyLogo prefix="Feed the beast" lebar="240px"></CompanyLogo>
        <Btn value="Download"></Btn>
      </div>
    </div>
  );
};

export default Card;
