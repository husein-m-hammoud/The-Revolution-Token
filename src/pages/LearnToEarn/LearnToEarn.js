// Libraries
import React , { useState, useEffect } from 'react';
import { isMobile, browserName } from "react-device-detect";

// Components

import { Particles } from '../../components/Particles';
import { Footer } from '../../components/Footer';
import { Spin } from '../../components/Spin';
import { Quiz } from '../../components/Quiz';
import { CircularProgressbar } from '../../components/CircularProgressbar';
import { HeaderFix } from '../../components/HeaderFix';
import { Video } from '../../components/Video';
import { PriceToBar } from '../../components/PriceToBar';
import { ContactUs } from '../../components/ContactUs';

function LearnToEarn() {


  return (
    <div className="App" >
      <Particles />
      <Quiz />
      <Footer />
    </div>
  );
}

export default LearnToEarn;
