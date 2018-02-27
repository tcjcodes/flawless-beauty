import React from 'react';
import graphql from 'graphql';
import Content, { HTMLContent } from '../components/Content';
import { cx } from 'emotion';
import cImg from '../img/flowerbrushes.jpeg';
import eImg from '../img/flowerbrushes.jpeg';
import './_about.scss';
import styled from 'react-emotion';

const CircleContainer = styled('div')`
  display: inline-block;
  position: relative;
  margin-bottom: 1em;

  &:before {
    display: block;
    content: '';
    position: absolute;
    top: 6px;
    right: 6px;
    bottom: 6px;
    left: 6px;
    
    border: 1px solid white;
    border-radius: 50%;
  }
`;
const CircleImage = styled('img')`
  vertical-align: middle;
  width: 250px;
  height: 250px;
  border-radius: 50%;
`;

const Avatar = ({ img }) => (
  <CircleContainer>
    <CircleImage src={img} />
  </CircleContainer>
);

const ColumnCard = ({ name, img, children }) => (
  <div className={cx('d-flex', 'column col-5 col-mx-auto')}>
    <div className="card">
      <div className="card-body">
        <Avatar img={img} />
        <div>
          <h3 className="fb-script">{name}</h3>
          <div>{children}</div>
        </div>
      </div>
    </div>
  </div>
);

export const AboutPageTemplate = ({ title, content, contentComponent }) => {
  const PageContent = contentComponent || Content;
  return (
    <div className="fb-about-page container grid-md text-center">
      <h1 className="fb-page-title">About Us</h1>
      <div className="columns">
        <ColumnCard name="Edilene" img={eImg}>
          <p>
            Single-origin coffee is coffee grown within a single known
            geographic origin. Sometimes, this is a single farm or a specific
            collection of beans from a single country. The name of the coffee is
            then usually the place it was grown to whatever degree available.
          </p>
        </ColumnCard>

        <ColumnCard name="Christine" img={cImg}>
          <p>
            Coffee is a small tree or shrub that grows in the forest understory
            in its wild form, and traditionally was grown commercially under
            other trees that provided shade. The forest-like structure of shade
            coffee farms provides habitat for a great number of migratory and
            resident species.
          </p>
        </ColumnCard>
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
