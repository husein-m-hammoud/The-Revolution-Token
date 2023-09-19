// Libraries
import React from 'react';

// Style
import './Timeline.scss';


function Timeline() {

  /**
   *
   */
  return (
    <div className="container" id="roadmap">
    <main className="time_line">
      <h1 className="text-center pt-5 pb-4 second-section--title">ROADMAP</h1>
    <p>
    <div data-aos="fade-left">
    <div className="phase-title">
    Phase One
    </div>
        <ul>
          <li>V1 Website Launch</li>
          <li>Create Social Media</li>
          <li>Contract Creation Through Brewlabs</li>
          <li>Contract Testing & Audit Through Brewlabs</li>
          <li>Third-Party Contract Audit</li>
          <li>Lite Paper Release</li>
        </ul>
    </div>
    </p>

    <p>
    <div data-aos="fade-right">
    <div className="phase-title">
    Phase Two
    </div>
        <ul>
          <li>Social Media Marketing</li>
          <li>Regular AMA's</li>
          <li>TRT Fair Launch on UniSwap</li>
          <li>Shibaswap Listing</li>
          <li>Staking Available Through Brewlabs Platform</li>
          <li>CoinGecko Listing </li>
          <li>CoinMarketCap Listing</li>
          <li>Low-Tier Exchange Listing(s)</li>
        </ul>
    </div>
    </p>


    <p>
    <div data-aos="fade-left">
    <div className="phase-title">
    Phase Three
    </div>
        <ul>
          <li>V2 Website Launch</li>
          <li>Development Of TRT Swap & Staking Platform</li>
          <li>TRT Swap & Staking Platform Audit</li>
          <li>TRT Swap & Staking Platform Launch</li>
          <li>White Paper Release</li>
          <li>Development Of TRT Launchpad</li>
        </ul>
    </div>
    </p>

    <p>
    <div data-aos="fade-right">
    <div className="phase-title">
      Phase Four
    </div>
        <ul>
          <li>TRT Launchpad Goes Live</li>
          <li>The Workspace Development</li>
          <li>Workspace Contract Audit</li>
          <li>The Workspace Launch</li>
          <li>Implementing The Workspace In The Metaverse</li>
          <li>All Taxes Reduced To ZERO In Preparation For Top 5 Exchange Listings</li>
          <li>Renounce Contract</li>
        </ul>
    </div>
    </p>

   </main>

    </div>
  );
}
export default Timeline;
