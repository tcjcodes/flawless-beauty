import { ThemeProvider } from 'emotion-theming';
import PropTypes from 'prop-types';
import React from 'react';
import Helmet from 'react-helmet';
import Navbar from '../components/Navbar';
import theme from '../utils/theme';
import './_index.scss';
import {Footer} from "../components/Footer";

const TemplateWrapper = ({ data, children }) => (
  <ThemeProvider theme={theme}>
    <div className="fb-template-wrapper">
      <Helmet title={data.site.siteMetadata.title} />
      <div className="fb-tw-container">
        <Navbar />
        <div>{children()}</div>
        <Footer/>
      </div>
    </div>
  </ThemeProvider>
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
