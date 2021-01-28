import React from 'react';
import './Footer.css';

function Footer() {
  let today = new Date().getFullYear();

  return (
    <div className='footer'>
      <footer>
        <p>Copyright ⓒ {today}</p>
      </footer>
    </div>
  );
}

export default Footer;
