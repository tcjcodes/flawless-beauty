import { css, cx } from 'emotion';
import Link from 'gatsby-link';
import React from 'react';
import styled from 'react-emotion';
import LayoutSection from '../components/LayoutSection';
import shadowsenseImg from '../img/eyesense.jpeg';
import lipsenseImg from '../img/jessoshiilipsense.jpg';
import './_what.scss';

const BorderedImageBox = ({ bg, children }) => (
  <div
    className={cx(
      'bordered-image-box',
      css`
        background: url(${bg}) center no-repeat;
        background-size: cover;
        margin: 0 auto;
      `
    )}
  >
    {children}
  </div>
);

const BorderBox = styled('div')`
  width: 100%;
  height: 100%;
  margin: ${(props) => props.margin};
  border: 2px solid ${(props) => props.theme.white};
  position: absolute;
`;

const flexRowVAlign = css`
  align-items: center;
`;

export const WhatPage = () => (
  <LayoutSection className="fb-what-page">
    <div className="container grid-md">
      <h1 className="text-center center-block fb-page-title">What is it?</h1>
      <div className="columns">
        <div className={`column col-4 col-md-12 mx-2 px-2 d-flex image-col`}>
          <div>
            <BorderedImageBox bg={lipsenseImg}>
              <BorderBox margin="-10px 10px" />
            </BorderedImageBox>
          </div>
        </div>
        <div
          className={cx(
            `column col-7 col-md-12 d-flex text-col-right ${flexRowVAlign}`
          )}
        >
          <div>
            <h2 className="fb-script">LipSense</h2>
            <p>
              <strong>LipSense</strong> is gluten-free, vegan, kosher, non-GMO,
              and contains no lead or animal by-products. SeneGence only uses the
              highest quality ingredients and is made in the USA.
            </p>
            <strong>Is LipSense all natural?</strong>
            <p>
              Yes! LipSense is made of true, <strong>natural</strong> pigments,
              natural Botanicals, raw Shea Butter, and Simulated Bee's Wax.
            </p>
            <p>
              LipSense® and <strong>all</strong> our Shea butter glosses are Vegan (no animal
              emulsifiers or animal by-products) and nothing we sell is ever
              tested on animals.
            </p>
            <div className="text-center">
              <Link to="/products#lips" className="btn btn-primary">
                View Lip Products
              </Link>
            </div>
          </div>
        </div>
      </div>
      <div className="columns eye-row">
        <div className={`column col-md-12 col-4 px-2 image-col`}>
          <div>
            <BorderedImageBox bg={shadowsenseImg}>
              <BorderBox margin="-10px -10px" />
            </BorderedImageBox>
          </div>
        </div>
        <div
          className={cx(
            `column col-7 col-md-12 col-mx-auto d-flex text-col-left ${flexRowVAlign}`
          )}
        >
          <div>
            <h2 className="fb-script">ShadowSense</h2>
            <p>
              Experience <strong>long-lasting,</strong> rich eye shadow shades that start as a
              crème and finish as a powder on the eyes. Shades can be worn
              separately or blended to create new colors and looks.
            </p>
            <div className="text-center">
              <Link to="/products#eyes" className="btn btn-primary">
                View Eye Products
              </Link>
            </div>
          </div>
        </div>
      </div>

      <div className="centered text-center my-2 py-2" />
    </div>
  </LayoutSection>
);

export default WhatPage;
