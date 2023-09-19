// Libraries
import React , { useState, useEffect } from 'react';
import { isMobile, browserName } from "react-device-detect";
import {
  BrowserRouter as Router,
  Routes,
  Route
} from 'react-router-dom';

// Pages
import { HomePage } from './pages/HomePage';
import { LaunchpadPage } from './pages/LaunchpadPage';
import { LearnToEarn } from './pages/LearnToEarn';
import  PrivacyPolicyPage  from './pages/PrivacyPolicyPage/PrivacyPolicyPage';

// Style
import './App.css';

function App() {

  return (

    <div className="App">
    <Router>
    <Routes>

    <Route
    path="/"
    exact
    element={ <HomePage /> }
    />
    <Route
    path="/launchpad"
    exact
    element={ <LaunchpadPage /> }
    />
    <Route
    path="/learn-to-earn"
    exact
    element={ <LearnToEarn /> }
    />
    <Route
    path="/privacy-policy"
    exact
    element={ <PrivacyPolicyPage /> }
    />

    </Routes>
    </Router>
    </div>
  );
}

export default App;
