import { css, cx } from 'emotion';
import Link from 'gatsby-link';
import React from 'react';
import styled from 'react-emotion';
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
  render() {
    return (
      <section className="fb-index-page ">
        <LayoutSection className="row-container">
          <GridRow>
            <GridItem bg={bg0} />
            <Link to="/products">
              <GridItem fontSize="2em">
                View<br />All
              </GridItem>
            </Link>
          </GridRow>
          <GridRow>
            <GridItem bg={bg1} />
            <Link to="/what">
              <GridItem fontSize="1.75em">
                What<br />is it?
              </GridItem>
            </Link>
          </GridRow>
          <GridRow>
            <Link to="/products#lips">
              <GridItem fontSize="2.25em">Lips</GridItem>
            </Link>
            <GridItem bg={bg2} />
          </GridRow>
          <GridRow>
            <Link to="/products#eyes">
              <GridItem fontSize="2.25em">Eyes</GridItem>
            </Link>
            <GridItem bg={bg3} />
          </GridRow>
        </LayoutSection>
      </section>
    );
  }
}
