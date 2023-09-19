// Libraries
import React from 'react';
import { isMobile, browserName } from "react-device-detect";
import { Logo } from '../Logo';
import { Header } from '../Header';

// Style
import './Launchpad.scss';


function Launchpad() {

  /**
   *
   */
  return (
    <div>
      <Header />
      <Logo />
      <h1 className="text-center pt-5 pb-4 second-section--title coming-soon">coming soon</h1>
    </div>
  );
}
export default Launchpad;
