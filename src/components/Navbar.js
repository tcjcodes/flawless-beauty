import { css, cx } from 'emotion';
import Link from 'gatsby-link';
import React from 'react';
// import logo from '../img/logo_lg.png';
import { flexCols, scriptFont } from '../utils/commonStyles';

const navbarFlex = css`
  justify-content: flex-end;
  align-items: center;
  width: 100%;
`;

const logoWrapper = css`
  margin-top: 3em;
`

const Navbar = () => (
  <header className='navbar'>
    <section className='navbar-section'>
      <div className={cx(flexCols, navbarFlex)}>
        <div className={logoWrapper}>
          <Link to='/'>
            {/*<figure className='image'>*/}
              {/*<img src={logo} alt='Flawless Beauty' className={css`width: 300;`} />*/}
            {/*</figure>*/}
            <h1 className={scriptFont}>Flawless Beauty</h1>
          </Link>
        </div>

        <div className={``}>
          <Link className='mx-1 btn btn-link' to='/products'>
            Products
          </Link>
          <a className='mx-1 btn btn-link' href='http://www.google.com' target='_self'>
            Shop
          </a>
          <Link className='mx-1 btn btn-link' to='/about'>
            About Us
          </Link>
          <Link className='mx-1 btn btn-link' to='/products'>
            Contact
          </Link>
        </div>
      </div>
    </section>
  </header>
);

export default Navbar;
