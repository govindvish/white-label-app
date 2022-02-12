import React from 'react';
import Footer from '../../component/Footer';

const FooterWrapper = () => {
  const footerContent =
    'Copyright © 2022 Hindustan Times. All rights reserved.';

  return (
    <>
      <Footer footerContent={footerContent} />
    </>
  );
};

export default FooterWrapper;
