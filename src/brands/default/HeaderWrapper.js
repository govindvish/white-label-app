import React from 'react';
import Header from '../../component/Header';
import headerLogo from 'toi.svg';

const HeaderWrapper = () => {
  const headerTitle = 'TOI';
  const headerMenus = [
    { name: 'Times Top 10' },
    { name: 'India' },
    { name: 'World' },
    { name: 'Technology' },
    { name: 'Design' },
    { name: 'Culture' },
    { name: 'Politics' },
    { name: 'Science' },
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
