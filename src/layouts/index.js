import PropTypes from 'prop-types';
import React from 'react';
import Helmet from 'react-helmet';

import Navbar from '../components/Navbar';
import './all.sass';

const TemplateWrapper = ({ data, children }) => (
  <div>
    <Helmet title={data.site.siteMetadata.title} />
    <Navbar />
    <div>{children()}</div>
  </div>
);

export const pageQuery = graphql`
  query TemplateWrapperQuery {
    site {
      siteMetadata {
        title
      }
    }
  }
`;

TemplateWrapper.propTypes = {
  data: PropTypes.any,
  children: PropTypes.func,
};

export default TemplateWrapper;
