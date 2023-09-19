// Libraries
import React from 'react';

// Components

// Style
import './Footer.scss';

function Footer() {

  return (
    <footer>
      <img className="logo-footer" src={process.env.PUBLIC_URL + '/img/logo-footer.svg'} />
      <div className="d-flex justify-content-center">
         <div className="social"><a href="https://twitter.com/TrevolutionT?t=vt16LElCuURkFIVGMkDhMg&s=08" target="_blank"><i class="fab fa-twitter"></i></a></div>
         <div className="social"><a href="https://t.me/TheRevolutionTokenPORTAL" target="_blank"><i className="fa-brands fa-telegram"></i></a></div>
      </div>
      <div className="d-flex justify-content-center">
         <div className="social"><a href = "mailto: info@therevolutiontoken.com" target="_blank"><i className="fa fa-envelope"></i> info@therevolutiontoken.com</a></div>
      </div>
        <div><a href="/privacy-policy" >Privacy Policy</a></div>
      <p>© 2022 THE REVOLUTION TOKEN | Powered by <a href="https://cedarstechnologies.com/" target="_blank" >Cedars Technology</a>.</p>

    </footer>
  );
}

export default Footer;
