import { css, cx } from 'emotion';
import { ThemeProvider } from 'emotion-theming';
import PropTypes from 'prop-types';
import React from 'react';
import Helmet from 'react-helmet';
import { Footer } from '../components/Footer';
import Navbar from '../components/Navbar';
import { PhabletRange } from '../utils/responsive';
import theme from '../utils/theme';
import './_index.scss';

const sidebarId = 'sidebarNav';

const SidebarNavButton = ({ onClick }) => (
  <a
    href={`#${sidebarId}`}
    className="show-md off-canvas-toggle btn btn-primary btn-action"
    onClick={onClick}
  >
    <i className="icon icon-menu" />
  </a>
);

const displayBlock = css`display: block;`;

const OffCanvasOverlay = ({ onClick, isDisplaying }) => (
  <div
    onClick={onClick}
    className={cx(`off-canvas-overlay`, { 'fb-d-block': isDisplaying })}
  />
);


const OffCanvasSidebar = () => (
  <div id={sidebarId} className="off-canvas-sidebar p-2">
    <ul className="nav">
      <li className="nav-item">Home</li>
      <li className="nav-item">Home</li>
    </ul>
  </div>
);

class OffCanvasContainer extends React.Component {
  constructor(props) {
    super(props);
    this.state = { sidebarOpen: false };
    this.toggleSidebar = this.toggleSidebar.bind(this);
  }

  componentDidMount() {
    this.setState({ sidebarOpen: window.location.hash === `#${sidebarId}`});
  }

  toggleSidebar() {
    this.setState(({ sidebarOpen }) => ({ sidebarOpen: !sidebarOpen }));
  }

  render() {
    return (
      <PhabletRange>
        {(isPhablet) => (
          <div
            className={cx(`fb-tw-container off-canvas`, {
              'off-canvas-sidebar-show': isPhablet && this.state.sidebarOpen,
            })}
          >
            <SidebarNavButton onClick={this.toggleSidebar} />
            <OffCanvasOverlay onClick={this.toggleSidebar} isDisplaying={this.state.sidebarOpen} />
            <OffCanvasSidebar isOpen={this.state.sidebarOpen} />

            {this.props.children}
          </div>
        )}
      </PhabletRange>
    );
  }
}

const TemplateWrapper = ({ data, children }) => (
  <ThemeProvider theme={theme}>
    <div className="flawless-beauty fb-template-wrapper">
      <Helmet title={data.site.siteMetadata.title} />
      <OffCanvasContainer>
        <div className="off-canvas-content">
          <Navbar />
          <div>{children()}</div>
          <Footer />
        </div>
      </OffCanvasContainer>
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
