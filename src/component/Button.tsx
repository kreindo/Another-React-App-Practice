import React from 'react';
interface Props {
  className?: string;
  value?: string;
}
const Button = (props: Props) => {
  return (
    <div>
      <button className={props.className}>{props.value}</button>
    </div>
  );
};

export default Button;
