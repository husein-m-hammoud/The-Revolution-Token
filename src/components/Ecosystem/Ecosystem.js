// Libraries
import { useState } from "react";
import Slider from "react-slick";

// Components

// Style
import './Ecosystem.scss';

function Ecosystem() {
   const settings = {
      dots: true,
      infinite: true,
      speed: 500,
      slidesToShow: 1,
      slidesToScroll: 1
    };

  return (
      <div className="trt-ecosystem">
     <div id="trt-ecosystem" className="container">
        <h1 className="text-center pt-5 pb-4 trt-ecosystem--title">ECOSYSTEM</h1>
        <Slider {...settings}>
          <div>
            <h3>TRT Swap & Staking</h3>
            <p>A location where our community can swap & stake their tokens in order to receive rewards.</p>
          </div>
          <div>
            <h3>Workspace</h3>
            <p>A resource for skilled individuals within the crypto-space to list their skills for hire, so they're able to be used by holders to find freelance work and more!</p>
          </div>
          <div>
            <h3>Launchpad</h3>
            <p>A platform where future tokens will have the chance to launch their projects directly on the Revolution Launchpad.</p>
          </div>
          <div>
            <h3>The RevolVerse</h3>
            <p>TRT will have its own exclusive space inside the Metaverse, thus allowing people to meet & work together. The workspace will be deployed into the metaverse.</p>
          </div>
        </Slider>
      </div>
      </div>
  );
}

export default Ecosystem;


function Flip({ card }) {
  const [showBack, setShowBack] = useState(true);

  function handleClick() {
      setShowBack(!showBack);

  }
var n = Date.now();
  return (
    <>
    {showBack
      ?
    <div className="flip-card-outer bg_1" style={{backgroundImage: `url(${card.background})`}}
        onClick={handleClick}
        onMouseEnter={handleClick}
        onMouseLeave={handleClick}
          >
    </div>
      :
    <div className="flip-card-outer bg_1 ss" style={{backgroundImage: `url(${card.background_play}?ver=${n})`}}
        onClick={handleClick}
        onMouseEnter={handleClick}
        onMouseLeave={handleClick}
          >
    </div>
    }
    </>

  );
}

