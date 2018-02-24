import Link from 'gatsby-link';
import React from 'react';
import logo from '../img/logo.svg';

const Navbar = () => (
  <header className='navbar'>
    <section className='navbar-section' />
    <section className='navbar-center'>
      <Link className='btn btn-link' to='/about'>
        Products
      </Link>
      <Link className='btn btn-link' to='/about'>
        Shop
      </Link>
      <Link to='/' className='navbar-brand mr-2'>
        <figure className='image'>
          <img src={logo} alt='Kaldi' style={{ width: '88px' }} />
        </figure>
      </Link>
      <Link className='btn btn-link' to='/404'>
        About Us
      </Link>
      <Link className='btn btn-link mr-2' to='/products'>
        Contact
      </Link>
    </section>
    <section className='navbar-section' />
  </header>
);

export default Navbar;
