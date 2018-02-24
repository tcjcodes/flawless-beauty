import { css } from 'emotion';
import PropTypes from 'prop-types';
import React from 'react';
import styled from 'react-emotion';
import { ThemeProvider } from 'emotion-theming';
import Helmet from 'react-helmet';
import theme from '../utils/theme';
import Navbar from '../components/Navbar';
import './all.sass';

const twContainer = css`
  border: 1px solid gray;
`;

const Wrapper = styled('div')`
  background: ${({ theme }) => theme.white};
  height: 100vh;
`;

const TemplateWrapper = ({ data, children }) => (
  <ThemeProvider theme={theme}>
    <Wrapper>
      <Helmet title={data.site.siteMetadata.title} />
      <div className={`container grid-lg ${twContainer}`}>
        <Navbar />
        <div>{children()}</div>
      </div>
    </Wrapper>
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
