import React from 'react';
import Footer from '../../component/Footer';

const FooterWrapper = () => {
  const footerContent =
    'Copyright © 2022 Bennett, Coleman & Co. Ltd. All rights reserved. For reprint rights: Times Syndication Service';

  return (
    <>
      <Footer footerContent={footerContent} />
    </>
  );
};

export default FooterWrapper;
