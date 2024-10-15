import React, { FC } from 'react';
import classNames from 'classnames';

interface IProps {
  mainclass?: string;
  title: string;
  titleclass?: string;
}

const Button: FC<IProps> = ({ mainclass, title, titleclass }) => {
  return (
    <button
      className={classNames('bg-Primary Semibold-20 !text-TextColor px-5 py-2 rounded-lg', mainclass)}
    >
      <h3 className={classNames('Semibold-20 !text-TextColor', titleclass)}>
        {title}
      </h3>
    </button>
  );
};

export default Button;
