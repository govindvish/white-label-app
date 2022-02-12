import React, { Fragment } from 'react';

import 'Header.css';

const Header = ({ headerTitle, headerMenus, headerLogo }) => {
  return (
    <>
      <header className='blog-header py-3'>
        <div className='row flex-nowrap justify-content-between align-items-center'>
          <div className='col-12 text-center'>
            <img
              src={headerLogo}
              alt={headerTitle}
              width='600px'
              height='100%'
            />
          </div>
        </div>
      </header>

      <div className='nav-scroller py-1 mb-2'>
        <nav className='nav d-flex justify-content-between'>
          {headerMenus.map((menu) => (
            <Fragment key={menu.name}>
              <a key={menu.name} className='p-2 menu-item' href='#'>
                {menu.name}
              </a>
            </Fragment>
          ))}
        </nav>
      </div>
    </>
  );
};

export default Header;
