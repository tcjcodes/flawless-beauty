import React from 'react';
import { cx } from 'emotion';
import { Phablet } from '../utils/responsive';

const SmallButton = ({ className, ...otherProps }) => (
  <Phablet>
    {(isMobile) => (
      <button
        {...otherProps}
        className={cx('btn', { 'btn-sm': !isMobile }, className)}
      />
    )}
  </Phablet>
);

export default SmallButton;
