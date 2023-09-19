// Libraries
import React, { useEffect, useState, useRef, createRef } from 'react';

// Style
import './Header.scss';

function Header() {

  // State
  const [opened, setOpened] = useState(false);

  return (
    <>
      <div id="navbar">
        <div className="container p-0">
          <div id="navbar-left" className="highlightTextOut tab-container">
            <a alt="HOME" href={'/#tokenomics'}>TOKENOMICS</a>
            <a alt="ABOUT" href={"/#roadmap"}>ROADMAP</a>
            <a alt="ARTICLES" href={'/#lite-paper'}>WHITE PAPER</a>
          </div>
          <div id="navbar-right" className="highlightTextOut tab-container d-flex">
            <a alt="ARTICLES" href={'/learn-to-earn'}>LEARN TO EARN</a>
    {/*
            <div className="dropdown">
          <button className="btn btn-secondary dropdown-toggle" type="button" id="dropdownMenuButton" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
            staking
          </button>
          <div className="dropdown-menu" aria-labelledby="dropdownMenuButton">
            <a className="dropdown-item" href="https://earn.brewlabs.info/pools">earn.brewlabs.info</a>
          </div>
        </div>
        */}
            <a href="https://earn.brewlabs.info/pools" target="_blank" alt="CONTACT">STAKING</a>
            <a href="/launchpad" alt="CONTACT">LAUNCHPAD</a>
          </div>
        </div>
      </div>

      <nav role="navigation" className="mobile-nav">
        <div className="w-100">
          <div id="menuToggle" className="float-right mt-3">
            <input type="checkbox" checked={opened} onChange={() => setOpened(!opened)} />
            <span></span>
            <span></span>
            <span></span>
            <ul id="menu" className="menu-list">
              <li><a href={"/#tokenomics"} className="nav-link" onClick={() => setOpened(!opened)}>TOKENOMICS</a></li>
              <li><a href={"/#roadmap"} className="nav-link" onClick={() => setOpened(!opened)}>ROADMAP</a></li>
              <li><a href={"/#lite-paper"} className="nav-link" onClick={() => setOpened(!opened)}>WHITE PAPER </a></li>
              <li><a href={"/learn-to-earn"} className="nav-link" onClick={() => setOpened(!opened)}>LEARN TO EARN</a></li>
              <li><a href={"/#founders"} className="nav-link" onClick={() => setOpened(!opened)}>FOUNDERS</a></li>
              <li><a href="https://earn.brewlabs.info/pools" target="_blank" className="nav-link" onClick={() => setOpened(!opened)}>STAKING</a></li>
              <li><a href="/launchpad" className="nav-link">LAUNCHPAD</a></li>
            </ul>
          </div>
        </div>
      </nav>
    </>
  );
}

export default Header;
