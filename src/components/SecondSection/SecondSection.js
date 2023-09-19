// Libraries
import React from 'react';

// Components
import { CopyIcon } from '../CopyIcon';

// Style
import './SecondSection.scss';

function SecondSection() {

  const address = '0x69C275C3Cbd7Edf5e6942149266CE8505C65baF8';
  return (
    <div id="sec2" className="second-section">
      <div className="container">
       <CopyIcon  address = {address}/>

        <h1 className="text-center pt-5 pb-4 second-section--title">THE CHANCE FOR CHANGE</h1>
        <div data-aos="zoom-in-up">
        <p className="text-center second-section--text">The world is jumping through crises. From wars to pandemics, people are not getting a chance to breathe. A small percentage of people are controlling the world's resources, and they hold the key to war and peace</p>
        <p className="text-center second-section--text">Rich people are getting richer, and the middle class is becoming poor, and quickly headed down the road of despair.</p>
        <p className="text-center second-section--text">This is where The Revolution Token is going to make a difference by providing a platform that will help society begin to control their careers, whether they are in technology, engineering, farming, hospitality, etc.</p>
        <p className="text-center second-section--text">Our main goal is to increase the percentage of individuals who are educated in crypto. The Revolution Token wants to connect people of different skills and backgrounds, to help them collaborate with each other inside the crypto-space. </p>
        <p className="text-center second-section--text text-uppercase">By doing this we will be creating new foundations of knowledge and experience within the crypto community.</p>
    </div>
      </div>
    </div>
  );
}

export default SecondSection;
