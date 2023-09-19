// Libraries
import React, { useState } from 'react';

// Style
import './Tokenomics.scss';

import { PieChart } from '../PieChart/';

function Tokenomics() {
    var data1 = [["Team 2%", 20.0],["Operations 1%", 10.0],["Buyback 1%", 10.0] ];
    var data2 = [["Uniswap 50%", 50.0],["Reserve 30%", 30.0],["Staking 20%", 20.0] ];

  /**
   *
   */
  return (
    <div className="tokenomics container" id="tokenomics">
      <img src={process.env.PUBLIC_URL+'/img/hand.svg'} />
      <div className="tokenomics-relative">
      <div className="tokenomics-block">
      <p className="tokenomics-title">Tokenomics</p>
      <p className="tokenomics-text-main">
    The Revolution Token launched on the ERC20 Network. It is available through Uniswap.
    </p>
    <div className="row">
    <div className="col-md-12 text-center">
        We have instituted a 4% buy/sell tax,
      and it is detailed <br/> as follows:
      <ul className="tokenomics-list">
      <br/>
        <li>Team Wallet: 2% (Ethereum)</li>
        <li>Operations: 1% (Ethereum)</li>
        <li>Buyback/Burn/Staking: 1% (Ethereum)</li>
    (0.5% Buyback/Burn and 0.5% Staking Platform)
      </ul>
    </div>
    </div>


    <div className="row">
    <div className="col-md-6">
    <h3 className="mt-4 mb-0">Tax Distribution</h3>
    <PieChart data = {data1} />
    </div>
    <div className="col-md-6">
    <h3 className="mt-4 mb-0">Initial Token Distribution</h3>
    <PieChart data = {data2} />
    </div>
    </div>

      <ul className="tokenomics-list">
        <li>Total Supply: 100 Billion</li>
        <li>Max Wallet - 1%</li>
        <li>Max Transaction - 0.33%</li>
      </ul>
    </div>
    </div>
    </div>
  );
}
export default Tokenomics;
