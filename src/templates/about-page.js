import React from 'react';
import graphql from 'graphql';
import Content, { HTMLContent } from '../components/Content';
import img from '../img/aboutus.jpeg';
import './_about.scss';
import styled from 'react-emotion';

const BoxContainer = styled('div')`
  display: inline-block;
  position: relative;
  margin-top: 1.5em;

  &:before {
    display: block;
    content: '';
    position: absolute;
    top: -10px;
    right: -10px;
    bottom: 10px;
    left: 10px;

    border: 2px solid ${props => props.theme.gold};
  }
`;
const BoxImage = styled('img')`
  vertical-align: middle;
  width: 300px;
`;

const Avatar = () => (
  <BoxContainer>
    <BoxImage src={img} />
  </BoxContainer>
);

export const AboutPageTemplate = ({ title, content, contentComponent }) => {
  const PageContent = contentComponent || Content;
  return (
    <div className="fb-about-page fb-section container">
      <div className="columns">
        <div className="column col-4 col-ml-auto">
          <Avatar img={img}/>
        </div>
        <div className="column col-6 col-mr-auto">
          <h1 className="fb-page-title">About Us</h1>

          <h3 className="fb-script">Edilene</h3>
          <p>
            Single-origin coffee is coffee grown within a single known
            geographic origin. Sometimes, this is a single farm or a specific
            collection of beans from a single country. The name of the coffee is
            then usually the place it was grown to whatever degree available.
          </p>

          <h3 className="fb-script">Christine</h3>
          <p>
            Coffee is a small tree or shrub that grows in the forest understory
            in its wild form, and traditionally was grown commercially under
            other trees that provided shade. The forest-like structure of shade
            coffee farms provides habitat for a great number of migratory and
            resident species.
          </p>
        </div>
      </div>
    </div>
  );
};

export default ({ data }) => {
  const { markdownRemark: post } = data;

  return (
    <AboutPageTemplate
      contentComponent={HTMLContent}
      title={post.frontmatter.title}
      content={post.html}
    />
  );
};

export const aboutPageQuery = graphql`
  query AboutPage($path: String!) {
    markdownRemark(frontmatter: { path: { eq: $path } }) {
      html
      frontmatter {
        path
        title
      }
    }
  }
`;
