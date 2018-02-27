import FontAwesomeIcon from '@fortawesome/react-fontawesome';
import { ThemeProvider } from 'emotion-theming';
import PropTypes from 'prop-types';
import React from 'react';
import Helmet from 'react-helmet';
import Navbar from '../components/Navbar';
import theme from '../utils/theme';
import './_index.scss';
import { faFacebookSquare, faInstagram } from '@fortawesome/fontawesome-free-brands';

const TemplateWrapper = ({ data, children }) => (
  <ThemeProvider theme={theme}>
    <div className="fb-template-wrapper">
      <Helmet title={data.site.siteMetadata.title} />
      <div className="fb-tw-container container grid-lg">
        <Navbar />
        <div>{children()}</div>
        <footer className="fb-footer">
          <div className="d-flex text-center centered">
            <a className='social-icon text-light mx-1' href="#" target="_blank">
              <FontAwesomeIcon size='2x' icon={faFacebookSquare} />
            </a>
            <a className='social-icon text-light mx-1' href="#" target="_blank">
              <FontAwesomeIcon size='2x' icon={faInstagram} />
            </a>
          </div>
        </footer>
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
