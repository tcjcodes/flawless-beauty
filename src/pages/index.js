import React from 'react';
import Script from 'react-load-script';
import './_index-page.scss';

import './index';

const GridRow = ({ children }) => (<div className='flex-container'>{children}</div>);

const GridItem = ({ children, color }) => (
  <div className={`flex-cell landing-box box-${color}`}>
    <div className='flex-item landing-box-cell'>
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
            <GridItem color='pink'>LipSense</GridItem>
            <GridItem color='gray' />
            <GridItem color='pink'>ShadowSense</GridItem>
          </GridRow>
          <GridRow>
            <GridItem color='gray' />
            <GridItem color='pink'>Shop</GridItem>
            <GridItem color='gray' />
          </GridRow>
        </div>
      </section>
    );
  }
}
