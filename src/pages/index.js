import { css, cx } from 'emotion';
import styled from 'react-emotion';
import React from 'react';
import Script from 'react-load-script';
import goldBg from '../img/goldgradient.jpeg';
import bg0 from '../img/eyeshadow.jpeg';
import bg3 from '../img/eyesense.jpeg';
import bg1 from '../img/redlips2.jpeg';
import bg2 from '../img/katemaxlips.jpg';
import './_index-page.scss';

import './index';

const GridRow = ({ children }) => (
  <div className="flex-container">{children}</div>
);

const GoldText = styled('div')`
  position: relative;
  color: #c3a343;
  text-fill-color: transparent;
  background: linear-gradient(transparent, transparent),
    url(${goldBg}) center repeat;
  -webkit-background-clip: text;
`;

const GridItem = ({ fontSize, className, children, bg }) => (
  <div
    className={cx(
      `text-center flex-cell m-2`,
      css`
        background-color: lightgray;
        background: url(${bg}) center no-repeat;
        background-size: cover;
        font-size: ${fontSize};
      `,
      { 'text-box': !bg }
    )}
  >
    <div className="flex-item">
      <GoldText>{children}</GoldText>
    </div>
  </div>
);

export default class IndexPage extends React.Component {
  handleScriptLoad() {
    if (typeof window !== `undefined` && window.netlifyIdentity) {
      window.netlifyIdentity.on('init', (user) => {
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
      <section className="fb-index-page ">
        <Script
          url="https://identity.netlify.com/v1/netlify-identity-widget.js"
          onLoad={() => this.handleScriptLoad()}
        />
        <div className="row-container container grid-lg">
          <GridRow>
            <GridItem bg={bg0} />
            <GridItem fontSize="2em">
              Shop<br />All
            </GridItem>
            <GridItem bg={bg1} />
            <GridItem fontSize="1.75em">
              What<br />is it?
            </GridItem>
          </GridRow>
          <GridRow>
            <GridItem fontSize="2.25em">LIPS</GridItem>
            <GridItem bg={bg2} />
            <GridItem fontSize="2.25em">EYES</GridItem>
            <GridItem bg={bg3} />
          </GridRow>
        </div>
      </section>
    );
  }
}
