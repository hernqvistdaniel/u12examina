import React from 'react';
import StickyFooter from 'react-sticky-footer';

const Footer = () => {
  return (
    <StickyFooter
      className="footer"
      bottomThreshold={50}
      normalStyles={{
        backgroundColor: '#999999',
        padding: '2rem',
        visibility: 'visible'
      }}
      stickyStyles={{
        backgroundColor: 'rgba(255,255,255,.8)',
        padding: '2rem',
        visibility: 'hidden'
      }}
    >
      Add any footer markup here
    </StickyFooter>
  );
};

export default Footer;
