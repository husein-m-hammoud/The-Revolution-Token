// Libraries
import React, { useState, useEffect } from 'react';
//import './ParallaxSlide.scss';

function ParallaxSlide() {

  /**
   *
   */
  return (
    <section className="container parallax-section position-relative">
      <div className="wrapper">
        <div className="outer">
          <div className="card card1">
            <div className="content">
              <div className="details">
                <span className="name">Sumit Kapoor</span>
                <p>Frontend Developer</p>
              </div>
            </div>
            <a href="#">Follow</a>
          </div>
          <div className="card card2">
            <div className="content">
              <div className="details">
                <span className="name">Andrew Neil</span>
                <p>YouTuber & Blogger</p>
              </div>
            </div>
            <a href="#">Follow</a>
          </div>
          <div className="card card3">
            <div className="content">
              <div className="details">
                <span className="name">Jasmine Carter</span>
                <p>Freelancer & Vlogger</p>
              </div>
            </div>
            <a href="#">Follow</a>
          </div>
          <div className="card card4">
            <div className="content">
              <div className="details">
                <span className="name">Justin Chung</span>
                <p>Backend Developer</p>
              </div>
            </div>
            <a href="#">Follow</a>
          </div>
          <div className="card card4">
            <div className="content">
              <div className="details">
                <span className="name">Adrina Calvo</span>
                <p>Teacher & Advertiser</p>
              </div>
            </div>
            <a href="#">Follow</a>
          </div>
        </div>
      </div>
    </section>
  );
}
export default ParallaxSlide;
