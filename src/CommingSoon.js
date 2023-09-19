// Libraries
import React from 'react';

// Components
import { FirstSection } from './components/FirstSection';
import { Header } from './components/Header';
import { GifLogo } from './components/GifLogo';
import { ParallaxSlide } from './components/ParallaxSlide';

// Style
import './App.css';

function App() {


  return (
    <div className="App" style= {{backgroundColor:"#000000b8"}} >

      <FirstSection />
    <div className="container">

<div className="gif_logo_box">
    <img src={process.env.PUBLIC_URL+'/img/PYBr.gif'}i className="gif_logo_box-image" alt="loading..." />
    </div>

    </div>
    </div>
  );
}

export default App;
