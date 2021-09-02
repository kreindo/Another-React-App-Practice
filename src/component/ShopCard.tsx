import React from 'react';
const ShopCard = (props: any) => {
  return (
    <div>
      <div className="shopcard-container">
        {props?.value}
        <div className="monstr-svg"></div>
      </div>
    </div>
  );
};

export default ShopCard;
