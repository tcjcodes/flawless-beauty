import React from 'react';
import graphql from 'graphql';
import Content, { HTMLContent } from '../components/Content';
import './_what.scss';
import shadowsenseImg from '../img/eyesense.jpeg';
import lipsenseImg from '../img/jessoshiilipsense.jpg';
import { css, cx } from 'emotion';
import styled from 'react-emotion';

const BorderedImageBox = styled('div')`
  width: 300px;
  height: 300px;
  position: relative;
  background: url(${(props) => props.bg}) center no-repeat;
  background-size: cover;
`;

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
    <div className="fb-what-page">
      <div className={cx(`container grid-lg`, css`margin-bottom: 4em; background: #fff;  height: 100%;`)}>
        <h1 className='text-center center-block fb-page-title'>{title}</h1>
        <div className="columns">
          <div className={`column col-4 mr-2 pr-2`}>
            <BorderedImageBox bg={lipsenseImg}>
              <BorderBox margin="-10px 10px" />
            </BorderedImageBox>
          </div>
          <div className={cx(`ml-2 column col-6 d-flex ${flexRowVAlign}`)}>
            <div>
              <h2 className="fb-script">LipSense</h2>
              <p>
                Coffee is a small tree or shrub that grows in the forest
                understory in its wild form, and traditionally was grown
                commercially under other trees that provided shade. The
                forest-like structure of shade coffee farms provides habitat for a
                great number of migratory and resident species.
              </p>
            </div>
          </div>
        </div>
        <div className="columns">
          <div
            className={cx(
              `column col-6 col-ml-auto d-flex px-2 ${flexRowVAlign}`,
            )}
          >
            <div>
              <h2 className="fb-script">ShadowSense</h2>
              <p>
                Single-origin coffee is coffee grown within a single known
                geographic origin. Sometimes, this is a single farm or a specific
                collection of beans from a single country. The name of the coffee
                is then usually the place it was grown to whatever degree
                available.
              </p>
            </div>
          </div>
          <div className={`column col-4 px-2`}>
            <BorderedImageBox bg={shadowsenseImg}>
              <BorderBox margin="-10px -10px" />
            </BorderedImageBox>
          </div>
        </div>
      </div>
    </div>
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
