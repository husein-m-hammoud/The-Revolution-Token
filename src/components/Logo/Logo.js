// Libraries
import React from 'react';
import { isMobile, browserName } from "react-device-detect";

// Style
import './Logo.scss';


function Logo() {

  /**
   *
   */
  return (
    <div className="container">

    <a href="/">
    <div id="logo"  className="logo_center gif_logo_box-image" >
    <img src={process.env.PUBLIC_URL+'/img/trt_new_logo.svg'} className="logo_front" alt="loading..." />
    </div>
    </a>
    </div>
  );
}
export default Logo;
