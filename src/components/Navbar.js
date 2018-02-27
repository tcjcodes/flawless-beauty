import { css } from 'emotion';
import Link from 'gatsby-link';
import React from 'react';
import logo from '../img/logo.png';
import './_navbar.scss';

const Navbar = () => (
  <header className="fb-navbar navbar">
    <section className="navbar-section">
      <Link className='navbar-brand' to="/">
        <figure className="image">
          <img
            src={logo}
            alt="Flawless Beauty"
            className={css`
              width: 400px;
            `}
          />
        </figure>
      </Link>
      <Link className="btn btn-link" to="/products">
        Products
      </Link>
      <a className="btn btn-link" href="http://www.google.com" target="_self">
        Shop
      </a>
      <Link className="btn btn-link" to="/about">
        About Us
      </Link>
      <Link className="mx-1 btn btn-link" to="/products">
        Contact
      </Link>
    </section>
  </header>
);

export default Navbar;
