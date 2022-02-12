import React from 'react';

import 'Footer.css';

const Footer = ({ footerContent }) => {
  return (
    <>
      <footer className='footer mt-auto py-3 blog-footer'>
        <p className='mb-0'>
          {footerContent}{' '}
          <a href='https://github.com/govindvish/white-label-app'>
            PoweredBy @WhiteLabel React App
          </a>
        </p>
      </footer>
    </>
  );
};

export default Footer;
