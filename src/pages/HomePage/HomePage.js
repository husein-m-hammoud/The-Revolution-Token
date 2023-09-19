// Libraries
import React, { useEffect } from 'react';
import { isMobile, browserName } from "react-device-detect";
import AOS from 'aos';
import 'aos/dist/aos.css';

// Components
import { Logo } from '../../components/Logo';
import { Particles } from '../../components/Particles';
import { SecondSection } from '../../components/SecondSection';
import { CardGrid } from '../../components/CardGrid';
import { Header } from '../../components/Header';
import { Timeline } from '../../components/Timeline';
import { RoadMap } from '../../components/RoadMap';
import { Tokenomics } from '../../components/Tokenomics';
import { Footer } from '../../components/Footer';
import { FlipCard } from '../../components/FlipCard';
import { LitePaper } from '../../components/LitePaper';
import { Founders } from '../../components/Founders';
import { Ecosystem } from '../../components/Ecosystem';
import { TokenSlider } from '../../components/TokenSlider';
import { SwipeCard } from '../../components/SwipeCard';
import { ContactUs } from '../../components/ContactUs';


function HomePage() {
  AOS.init(
    {
      duration: 2000,
      offset: -250, // offset (in px) from the original trigger point
      // Settings that can be overridden on per-element basis, by `data-aos-*` attributes:
      once: false, // whether animation should happen only once - while scrolling down
      mirror: true,
      delay: 0, // values from 0 to 3000, with step 50ms
    }
  );

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
      <Header />
      <Logo />
      <Particles />
      <SecondSection />
      <Ecosystem />
      <Tokenomics />
      <RoadMap />
      <LitePaper />
      <Founders />
      <ContactUs />
      <Footer />
    </div>
  );
}

export default HomePage;
