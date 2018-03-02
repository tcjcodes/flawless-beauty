import { css } from 'emotion';
import Link from 'gatsby-link';
import React from 'react';
import logo from '../img/logosm.png';
import './_navbar.scss';
import LayoutSection from './LayoutSection';

const navbarFlex = css`
  justify-content: center;
`;

const Navbar = () => (
  <div className="fb-navbar-wrapper">
    <LayoutSection
      className="fb-navbar navbar fb-bold">
      <section className={`navbar-section centered ${navbarFlex}`}>
        <div className="bordered py-1 d-flex left-nav">
          <a
            className="hide-md mx-2 btn btn-link"
            href="http://www.google.com"
            target="_self"
          >
            Shop
          </a>
          <Link className="hide-md mx-2 btn btn-link" to="/products">
            Products
          </Link>
        </div>
        <Link className="navbar-brand mx-2" to="/">
          <figure className="image">
            <img
              src={logo}
              alt="Flawless Beauty"
              className="fb-logo"
            />
          </figure>
        </Link>
        <div className="bordered py-1 d-flex">
          <Link className="hide-md mx-2 btn btn-link" to="/what">
            What Is It?
          </Link>
          <Link className="hide-md mx-2 btn btn-link" to="/about">
            About Us
          </Link>
        </div>
      </section>
    </LayoutSection>
  </div>
);

export default Navbar;
