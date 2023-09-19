// Libraries
import React from 'react';

// Components
import { FirstSection } from './components/FirstSection';
import { Header } from './components/Header';
import { GifLogo } from './components/GifLogo';
import { Carousel } from './components/Carousel';
import { ParallaxSlide } from './components/ParallaxSlide';
import { CardGrid } from './components/CardGrid';

// Style
import './App.css';

function App() {

  /**
   *
   */
  const handleScroll = () => {
    if (document.body.scrollTop > 80 || document.documentElement.scrollTop > 80) {
      document.getElementById("navbar").style.padding = "20px 10px";
      document.getElementById("logo").style.fontSize = "25px";
      document.getElementById("logo").style.display = "block";
      document.getElementById("navbar").style.backgroundColor = "#fff";
    } else {
      document.getElementById("navbar").style.padding = "40px 10px";
      document.getElementById("logo").style.display = "none";
      document.getElementById("navbar").style.backgroundColor = "rgba(128,128,128,0)";
    }
  }

  return (
    <div className="App" onWheel={() => handleScroll()}>
      <Header />
      <GifLogo />
     <ParallaxSlide />
      <FirstSection />
      <CardGrid />
      <Carousel />
    </div>
  );
}

export default App;
