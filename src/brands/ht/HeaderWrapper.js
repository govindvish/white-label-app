import React from 'react';
import Header from '../../component/Header';
import headerLogo from 'ht.svg';

const HeaderWrapper = () => {
  const headerTitle = 'HT';
  const headerMenus = [
    { name: 'HT Specials' },
    { name: 'India' },
    { name: 'World' },
    { name: 'Technology' },
    { name: 'Design' },
    { name: 'Culture' },
    { name: 'Politics' },
    { name: 'Science' },
    { name: 'Top 10' },
  ];

  return (
    <>
      <Header
        headerTitle={headerTitle}
        headerMenus={headerMenus}
        headerLogo={headerLogo}
      />
    </>
  );
};

export default HeaderWrapper;
