import React from 'react';
import StickyFooter from 'react-sticky-footer';

const Footer = () => {
  return (
    <StickyFooter
      className="footer"
      bottomThreshold={50}
      normalStyles={{
        backgroundColor: '#42474c',
        padding: '2rem',
        visibility: 'visible',
      }}
      stickyStyles={{
        backgroundColor: 'rgba(255,255,255,.8)',
        padding: '2rem',
        visibility: 'hidden',
        display: 'flex',
        flexDirection: 'row',
      }}
    >
      <div className="footerContent">
        <div className="footerItem">
          <p>
            Kontakta Rcycld <a href="google.com">här!</a>
          </p>
          <h1>
            <i className="fas fa-recycle"></i> Rcycld
          </h1>
        </div>
        <div className="footerItem">
          <p>
            github för det här projektet kan hämtas{' '}
            <a href="github.com">här!</a>
          </p>
        </div>
        <div className="footerItem">
          <p>
            Kartor hämtas med google.maps och rapporteringsknappen leder till
            FTI:s hemsida för avfalls-stations-rapportering
          </p>
        </div>
      </div>
    </StickyFooter>
  );
};

export default Footer;
