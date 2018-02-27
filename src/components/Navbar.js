import { css } from 'emotion'
import Link from 'gatsby-link'
import React from 'react'
import logo from '../img/logo.png'
import './_navbar.scss'

const navbarFlex = css`
  justify-content: center;
`

const Navbar = () => (
  <div className="fb-navbar">
    <header className="navbar fb-bold container grid-lg">
      <section className={`navbar-section centered ${navbarFlex}`}>
        <div className="bordered py-1">
          <a
            className="mr-2 btn btn-link"
            href="http://www.google.com"
            target="_self"
          >
            Shop
          </a>
          <Link className="mx-2 btn btn-link" to="/products">
            Products
          </Link>
        </div>
        <Link className="navbar-brand mx-2" to="/">
          <figure className="image">
            <img
              src={logo}
              alt="Flawless Beauty"
              className={css`
                width: 310px;
              `}
            />
          </figure>
        </Link>
        <div className="bordered py-1">
          <Link className="mx-2 btn btn-link" to="/what">
            What Is It?
          </Link>
          <Link className="btn btn-link" to="/about">
            About Us
          </Link>
        </div>
      </section>
    </header>
  </div>
)

export default Navbar
