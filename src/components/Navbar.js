import Link from 'gatsby-link';
import React from 'react';
import './_navbar.scss';

const Navbar = () => (
  <header className='fb-navbar navbar'>
    <section className='navbar-section'>
      <div className='flex-cols navbar-flex'>
        <div className='logo-wrapper'>
          <Link to='/'>
            {/*<figure className='image'>*/}
              {/*<img src={logo} alt='Flawless Beauty' className={css`width: 300;`} />*/}
            {/*</figure>*/}
            <h1 className='fb-script'>Flawless Beauty</h1>
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
