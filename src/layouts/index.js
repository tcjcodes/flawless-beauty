import { cx } from 'emotion';
import { ThemeProvider } from 'emotion-theming';
import PropTypes from 'prop-types';
import React from 'react';
import Helmet from 'react-helmet';
import { Footer } from '../components/Footer';
import Navbar from '../components/Navbar';
import { PhabletRange } from '../utils/responsive';
import theme from '../utils/theme';
import './_index.scss';
import Link from 'gatsby-link';

const sidebarId = 'sidebarNav';

const SidebarNavButton = ({ onClick }) => (
  <button
    className="show-md off-canvas-toggle btn btn-primary btn-action"
    onClick={onClick}
  >
    <i className="icon icon-menu" />
  </button>
);

const OffCanvasOverlay = ({ onClick, isDisplaying }) => (
  <div
    onClick={onClick}
    className={cx(`off-canvas-overlay`, { 'fb-d-block': isDisplaying })}
  />
);

const navItems = [
  { name: 'Products', to: '/products' },
  { name: 'What Is It?', to: '/what' },
  { name: 'About Us', to: '/about' },
  { name: 'Contact', to: '#contact' },
];
const OffCanvasSidebar = ({ isOpen }) => (
  <div
    id={sidebarId}
    className={cx(
      'off-canvas-sidebar p-2',
      { 'show-sidebar': isOpen }
    )}
  >
    <ul className="nav">
      {navItems.map(({ name, to }) => (
        <li className="nav-item">
          <Link className="px-2 mx-2" to={to}>
            {name}
          </Link>
        </li>
      ))}
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
    this.setState({ sidebarOpen: window.location.hash === `#${sidebarId}` });
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
            <OffCanvasOverlay
              onClick={this.toggleSidebar}
              isDisplaying={this.state.sidebarOpen}
            />
            <OffCanvasSidebar
              isOpen={this.state.sidebarOpen} />
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
