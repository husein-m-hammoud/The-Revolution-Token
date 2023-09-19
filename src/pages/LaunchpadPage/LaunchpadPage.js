// Libraries
import React , { useState, useEffect } from 'react';
import { isMobile, browserName } from "react-device-detect";

// Components

import { Logo } from '../../components/Logo';
import { Particles } from '../../components/Particles';
import { Header } from '../../components/Header';
import { Footer } from '../../components/Footer';
import { TinderCard } from '../../components/TinderCard';
import { TokenSlider } from '../../components/TokenSlider';
import { PriceToBar } from '../../components/PriceToBar';
import { ContactUs } from '../../components/ContactUs';

function LaunchpadPage() {

  useEffect(() => {
    window.history.scrollRestoration = 'manual'
    window.addEventListener('scroll', handleScroll, true);
  }, []);

  const handleScroll = () => {
    if (!isMobile) {
      if (document.body.scrollTop > 100 || document.documentElement.scrollTop > 100) {
        document.getElementById("navbar").style.padding = "50px 10px 0px";
        document.getElementById("navbar").classList.add('scrolling');
        document.getElementById("sec2").style.marginTop = "320px";
        document.getElementById("navbar").style.color = "#fff";
        document.getElementById("navbar").style.backgroundColor = "#000";
        document.getElementById("logo").classList.remove('gif_logo_box-image');
        document.getElementById("logo").classList.add('fixLogo');

      } else {
        document.getElementById("navbar").classList.remove('scrolling');
        document.getElementById("sec2").style.marginTop = "0px";
        document.getElementById("navbar").style.color = "#fff";
        document.getElementById("navbar").style.padding = "40px 10px";
        document.getElementById("navbar").style.backgroundColor = "rgba(128,128,128,0)";
        document.getElementById("logo").classList.remove('fixLogo');
      }
    }
    else {
      if (document.body.scrollTop > 150 || document.documentElement.scrollTop > 150) {
        document.getElementById("sec2").style.marginTop = "300px";
        document.getElementById("menuToggle").classList.remove('mt-3');;
        document.getElementById("logo").classList.remove('gif_logo_box-image');
        document.getElementById("logo").classList.add('fixLogo_mobile');
        document.getElementsByClassName("logo_front")[0].style['width'] = '80px';

      } else {
        document.getElementById("sec2").style.marginTop = "0px";
        document.getElementById("menuToggle").classList.add('mt-3');;
        document.getElementById("logo").classList.remove('fixLogo_mobile');
        document.getElementsByClassName("logo_front")[0].style['width'] = '250px';
      }
    }
  }

  return (
    <div className="App" >
      <PriceToBar />
      <Header />
      <Logo />
      <Particles />
      <div id="sec2">
    {isMobile && <TinderCard />}
    {!isMobile && <TokenSlider/>}
    </div>
      <ContactUs />
      <Footer />
    </div>
  );
}

export default LaunchpadPage;
