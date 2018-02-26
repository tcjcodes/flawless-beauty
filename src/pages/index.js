import { css, cx } from 'emotion';
import React from 'react';
import Script from 'react-load-script';
import bg0 from '../img/glossjarsm.jpeg';
import bg1 from '../img/brushes.jpeg';
import bg2 from '../img/bride.jpeg';
import bg3 from '../img/katemaxlips.jpg';
import './_index-page.scss';

import './index';

const GridRow = ({ children }) => (<div className='flex-container'>{children}</div>);

const GridItem = ({ className, children, color, bg }) => (
    <div className={cx(
      `flex-cell landing-box box-${color}`,
      { [css`
      background: url(${bg}) center no-repeat;
      background-size: cover;
    `]: !!bg },
      className
    )}>
      <div className={cx(`flex-item`)}>
        {children}
      </div>
    </div>
);

export default class IndexPage extends React.Component {
  handleScriptLoad() {
    if (typeof window !== `undefined` && window.netlifyIdentity) {
      window.netlifyIdentity.on('init', user => {
        if (!user) {
          window.netlifyIdentity.on('login', () => {
            document.location.href = '/admin/';
          });
        }
      });
    }
    window.netlifyIdentity.init();
  }

  render() {
    return (
      <section className='fb-index-page section'>
        <Script
          url='https://identity.netlify.com/v1/netlify-identity-widget.js'
          onLoad={() => this.handleScriptLoad()}
        />
        <div className='container text-center'>
          <GridRow>
            <GridItem color='gray' bg={bg0} />
            <GridItem className={css`font-size: 1.75em;`} color='pink'>Shop</GridItem>
            <GridItem color='gray' bg={bg1} />
            <GridItem className={css`font-size: 1.25em;`} color='pink'>What is it?</GridItem>

          </GridRow>
          <GridRow>
            <GridItem className={css`font-size: 1.5em;`} color='pink'>LipSense</GridItem>
            <GridItem color='gray' bg={bg2} />
            <GridItem color='pink'>ShadowSense</GridItem>
            <GridItem color='gray' bg={bg3} />

          </GridRow>
        </div>
      </section>
    );
  }
}
