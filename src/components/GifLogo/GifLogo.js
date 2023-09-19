// Libraries
import React , { useState } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';

// Style
//import './GifLogo.scss';


function GifLogo() {
  // State
  const [transform, setTransform] = useState('');


  AOS.init(
    {
      duration : 2000
    }
  );
  var cards = document.querySelector(".card_move");
  var range = 40;

  // var calcValue = (a, b) => (((a * 100) / b) * (range / 100) -(range / 2)).toFixed(1);
  function calcValue(a, b) {
    return (a/b*range-range/2).toFixed(1)
  } // thanks @alice-mx

  let timeout;
  document.addEventListener('mousemove', ({x, y}) => {
    if (timeout) {
      window.cancelAnimationFrame(timeout);
    }

    timeout = window.requestAnimationFrame(() => {
      var yValue = calcValue(y, window.innerHeight);
      var xValue = calcValue(x, window.innerWidth);

      setTransform(`rotateX(${yValue}deg) rotateY(${xValue}deg)`);
    })
  });


  /**
   *
   */
  return (
    <div className="container" >

    <div className="gif_logo_box">
    <div className="card_move"  style={{transform:`${transform}`}}>
    <img src={process.env.PUBLIC_URL+'/img/amimated-gif-logo.gif'}i className="gif_logo_box-image" alt="loading..." />
    </div>
    </div>

    </div>
  );
}
export default GifLogo;
