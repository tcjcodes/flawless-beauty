import { cx } from 'emotion';
import React from 'react';
import { Phablet } from '../utils/responsive';
import './_layout-section.scss';

const LayoutSection = ({ className, children }) => (
  <Phablet>
    {(isMobile) => (
      <section
        className={cx(
          'fb-layout-section',
          'container',
          { 'grid-lg': !isMobile },
          { 'grid-sm': isMobile },
          className
        )}
      >
        {children}
      </section>
    )}
  </Phablet>
);

export default LayoutSection;
