import { css } from 'emotion';
import Link from 'gatsby-link';
import React from 'react';
import logo from '../img/logo.png';
import './_navbar.scss';

const Navbar = () => (
  <header className="fb-navbar navbar container grid-lg">
    <section className="navbar-section">
      <Link className='navbar-brand' to="/">
        <figure className="image">
          <img
            src={logo}
            alt="Flawless Beauty"
            className={css`
              width: 250px;
            `}
          />
        </figure>
      </Link>
    </section>
    <section className="navbar-section">
      <a className="mr-1 btn btn-link" href="http://www.google.com" target="_self">
        Shop
      </a>
      <Link className="mr-1 btn btn-link" to="/products">
        Products
      </Link>
      <Link className="mr-1 btn btn-link" to="/what">
        What Is It?
      </Link>
      <Link className="btn btn-link" to="/about">
        About Us
      </Link>
    </section>
  </header>
);

export default Navbar;
