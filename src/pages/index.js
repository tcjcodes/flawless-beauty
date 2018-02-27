import { css, cx } from 'emotion';
import styled from 'react-emotion';
import React from 'react';
import Script from 'react-load-script';
import goldBg from '../img/goldgradient.jpeg';
import bg1 from '../img/eyes.jpeg';
import bg3 from '../img/eyesense.jpeg';
import bg0 from '../img/lips.jpeg';
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

const GridItem = ({ className, children, color, bg }) => (
  <div
    className={cx(
      `flex-cell landing-box m-2 box-${color}`,
        css`
          background-color: lightgray;
          background: url(${bg}) center no-repeat;
          background-size: cover;
        `,
      className,
    )}
  >
    <div className={cx(`flex-item flex-${color}`)}><GoldText>{children}</GoldText></div>
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
      <section className="fb-index-page section">
        <Script
          url="https://identity.netlify.com/v1/netlify-identity-widget.js"
          onLoad={() => this.handleScriptLoad()}
        />
        <div className="container text-center">
          <GridRow>
            <GridItem color="gray" bg={bg0} />
            <GridItem
              className={css`
                font-size: 1.75em;
              `}
              color="pink"
            >
              Shop
            </GridItem>
            <GridItem color="gray" bg={bg1} />
            <GridItem
              className={css`
                font-size: 1.25em;
              `}
              color="pink"
            >
              What is it?
            </GridItem>
          </GridRow>
          <GridRow>
            <GridItem
              className={css`
                font-size: 1.5em;
              `}
              color="pink"
            >
              LipSense
            </GridItem>
            <GridItem color="gray" bg={bg2} />
            <GridItem
              className={css`
                font-size: 1.5em;
              `}
              color="pink">Shadow Sense
            </GridItem>
            <GridItem color="gray" bg={bg3} />
          </GridRow>
        </div>
      </section>
    );
  }
}
