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
            Kontakta Rcycld <a href="mailto:dhernqvist@gmail.com">här!</a>
          </p>
          <h1>
            <i className="fas fa-recycle"></i> Rcycld
          </h1>
        </div>
        <div className="footerItem">
          <p>
            Det här projektet finns att se på GitHub om du klickar{' '}
            <a href="https://github.com/hernqvistdaniel/devhub" target="_blank" rel="noopener noreferrer">här!</a>
          </p>
        </div>
        <div className="footerItem">
          <p>
            Kartor hämtas med Google.Maps.
          </p>
          <br />
          <p>
            Rapporteringsknappen leder till
            FTI:s hemsida för avfalls-stations-rapportering.
          </p>
        </div>
      </div>
    </StickyFooter>
  );
};

export default Footer;
