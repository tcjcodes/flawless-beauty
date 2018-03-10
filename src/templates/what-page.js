import { css, cx } from 'emotion';
import Link from 'gatsby-link';
import graphql from 'graphql';
import React from 'react';
import styled from 'react-emotion';
import Content, { HTMLContent } from '../components/Content';
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

export const WhatPageTemplate = ({ title, content, contentComponent }) => {
  const PageContent = contentComponent || Content;

  return (
    <LayoutSection className="fb-what-page">
      <div className="container grid-md">
        <h1 className="text-center center-block fb-page-title">{title}</h1>
        <div className="columns">
          <div className={`column col-4 col-md-12 mx-2 px-2`}>
            <BorderedImageBox bg={lipsenseImg}>
              <BorderBox margin="-10px 10px" />
            </BorderedImageBox>
          </div>
          <div
            className={cx(
              `column col-7 col-md-12 d-flex text-col-right ${flexRowVAlign}`
            )}
          >
            <div>
              <h2 className="fb-script">LipSense</h2>
              <p>
                Coffee is a small tree or shrub that grows in the forest
                understory in its wild form, and traditionally was grown
                commercially under other trees that provided shade. The
                forest-like structure of shade coffee farms provides habitat for
                a great number of migratory and resident species.
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
          <div className={`column col-md-12 col-4 px-2`}>
            <BorderedImageBox bg={shadowsenseImg}>
              <BorderBox margin="-10px -10px" />
            </BorderedImageBox>
          </div>
          <div
            className={cx(
              `column col-7 col-md-12 col-mx-auto d-flex text-col-left ${flexRowVAlign}`
            )}
          >
            <div>
              <h2 className="fb-script">ShadowSense</h2>
              <p>
                Single-origin coffee is coffee grown within a single known
                geographic origin. Sometimes, this is a single farm or a
                specific collection of beans from a single country. The name of
                the coffee is then usually the place it was grown to whatever
                degree available.
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
};

export default ({ data }) => {
  const { markdownRemark: post } = data;

  return (
    <WhatPageTemplate
      contentComponent={HTMLContent}
      title={post.frontmatter.title}
      content={post.html}
    />
  );
};

export const whatPageQuery = graphql`
  query WhatPage($path: String!) {
    markdownRemark(frontmatter: { path: { eq: $path } }) {
      html
      frontmatter {
        path
        title
      }
    }
  }
`;
