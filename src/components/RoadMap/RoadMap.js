// Libraries
import React from 'react';

// Style
import './RoadMap.scss';


function RoadMap() {

  /**
   *
   */
  return (
    <div className="container" id="roadmap">
      <h1 className="text-center pt-5 pb-4 second-section--title">ROADMAP</h1>
<ol className="ol-cards">
    <li clssName="f1">
        <div className="icon"><i class="fa-duotone fa-check"></i></div>
        <div className="title">Phase One</div>
        <div className="descr">

        <ul>
          <li >V1 Website Launch</li>
          <li>Create Social Media</li>
          <li>Contract Creation Through Brewlabs</li>
          <li>Contract Testing & Audit Through Brewlabs</li>
          <li>Third-Party Contract Audit</li>
          <li>Lite Paper Release</li>
        </ul>
    </div>
    </li>
    <li clssName="f2">
        <div className="icon"><i class="fa-solid fa-loader"></i></div>
        <div className="title">Phase Two</div>
        <div className="descr">
        <ul>
          <li className="check">Social Media Marketing</li>
          <li className="check">Regular AMA's</li>
          <li className="check">TRT Fair Launch on UniSwap</li>
          <li className="check">Staking Available Through Brewlabs Platform</li>
          <li className="check">CoinGecko Listing </li>
          <li>Shibaswap Listing</li>
          <li>CoinMarketCap Listing</li>
          <li>Low-Tier Exchange Listing(s)</li>
        </ul>
    </div>
    </li>
    <li clssName="f1">
        <div className="icon"><i class="fa-solid fa-loader"></i></div>
        <div className="title">Phase Three</div>
        <div className="descr">

        <ul>
          <li>V2 Website Launch</li>
          <li>Development Of TRT Swap & Staking Platform</li>
          <li>TRT Swap & Staking Platform Audit</li>
          <li>TRT Swap & Staking Platform Launch</li>
          <li>White Paper Release</li>
          <li>Development Of TRT Launchpad</li>
        </ul>
    </div>
    </li>
    <li clssName="f1">
        <div className="icon"><i class="fa-solid fa-loader"></i></div>
        <div className="title">Phase Four</div>
        <div className="descr">

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
    </li>
</ol>
    </div>
  );
}
export default RoadMap;
