import { css, cx } from 'emotion';
import Link from 'gatsby-link';
import React from 'react';
import styled from 'react-emotion';
import Script from 'react-load-script';
import LayoutSection from '../components/LayoutSection';
import bg3 from '../img/eyesense.jpeg';
import bg0 from '../img/eyeshadow.jpeg';
import goldBg from '../img/goldgradient.jpeg';
import bg2 from '../img/katemaxlips.jpg';
import bg1 from '../img/redlips2.jpeg';
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

const GridItem = ({ fontSize, children, bg }) => (
  <div
    className={cx(
      `fb-grid-item text-center flex-cell m-2`,
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
        <LayoutSection className="row-container">
          <GridRow>
            <GridItem bg={bg0} />
            <GridItem fontSize="2em">
              <Link to="/products">View<br/>All</Link>
            </GridItem>
          </GridRow>
          <GridRow>
            <GridItem bg={bg1} />
            <GridItem fontSize="1.75em">
              <Link to="/what">What<br />is it?</Link>
            </GridItem>
          </GridRow>
          <GridRow>
            <GridItem fontSize="2.25em">
              <Link to="/products#lips">Lips</Link>
            </GridItem>
            <GridItem bg={bg2} />
          </GridRow>
          <GridRow>
            <GridItem fontSize="2.25em">
              <Link to="/products#eyes">Eyes</Link>
            </GridItem>
            <GridItem bg={bg3} />
          </GridRow>
        </LayoutSection>
      </section>
    );
  }
}
