import React from 'react';
interface Props {
  value?: string;
}
const ShopCard = (props: Props) => {
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
