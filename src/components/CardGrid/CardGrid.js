// Libraries
import React, { useState } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';
//import './CardGrid.scss';



function CardGrid() {

  AOS.init(
    {
      duration: 2000
    }
  );


  /**
   *
   */
  return (
    <div id="trt-ecosystem" >
    <div className="container">
        <h1 className="text-center pt-5 pb-4 trt-ecosystem--title">Community-Driven</h1>
      <div className="hero-section">
        <div className="card-grid">
          <a className="card" href="#">
            <div className="card__background bg_1"></div>
            <div className="card__content">
              <h3 className="card__heading">TRT Swap & Staking</h3>
              <p className="card__category">A location where our
                community can swap &
                stake their tokens in
                order to receive rewards.</p>
            </div>
          </a>
          <a className="card" href="#">
            <div className="card__background bg_2"></div>
            <div className="card__content">
              <h3 className="card__heading">Workspace</h3>
              <p className="card__category">A resource for skilled
                individuals within the
                crypto-space to list their
                skills for hire, so they're
                able to be used by
                holders to find freelance
                work and more!
              </p>
            </div>
          </a>
          <a className="card" href="#">
            <div className="card__background bg_3"></div>
            <div className="card__content">
              <h3 className="card__heading">Launchpad</h3>
              <p className="card__category">A platform where future
                tokens will have the
                chance to launch their
                projects directly on the
                Revolution Launchpad.
              </p>
            </div>
          </a>
          <a className="card" href="#">
            <div className="card__background bg_4"></div>
            <div className="card__content">
              <h3 className="card__heading">The RevolVerse</h3>
              <p className="card__category">TRT will have its own
                exclusive space inside
                the Metaverse, thus
                allowingpeople to meet
                & work together. The
                workspace will be
                deployed into the
                metaverse.</p>
            </div>
          </a>
        </div>
      </div>
      </div>
      <div className="hero-white-bg"></div>
    </div>
  );
}
export default CardGrid;
