import React from 'react';
import { cx } from 'emotion';
import { Phablet } from '../utils/responsive';

const LayoutSection = ({ className, children }) => (
  <Phablet>
    {(isMobile) => (
      <section
        className={cx(
          'container',
          { 'grid-lg': !isMobile },
          { 'grid-sm': isMobile },
          className,
        )}
      >
        {children}
      </section>
    )}
  </Phablet>
);

export default LayoutSection;
