import Slider from "react-slick";
import React, { useState, useEffect } from "react";
import ReactTooltip from "react-tooltip";

import { FaAngleRight, FaAngleLeft } from "react-icons/fa";

// Components
import { CopyIcon } from '../CopyIcon';


import './Tokenslider.scss';

function TokenSlider() {

  const [cards, setCards] = useState([]);


  useEffect(() => {
    let cards_tmp = [];
    fetch(`https://therevolutiontoken.com/backend/api/tokens`)
      .then((response) => response.json())
      .then(data => {

        for (let i = 0; i < data.tokens.length; i++) {
          var item = data.tokens[i];
          var image_src = 'https://therevolutiontoken.com/backend/Image/'+item.logo;
          var tmp = {
            id: item.id,
            name: item.name,
            address: item.address,
            image: image_src,
            base_url: item.base_url,
            graph_url: item.graph_url,
            color: item.color,
            bg_color: item.bg_color,
          };
    if(!item.color){
      tmp['color'] = '#000';
    }
    if(!item.bg_color){
      tmp['bg_color'] = '#fff';
    }
          console.log(image_src)
          cards_tmp.push(tmp);
        }
        console.log('response',data);
        setCards(cards_tmp);
      }
      );

  }, []);

  const [imgIndex,setImgIndex] = useState(0)
  const NextArrow = ({onClick}) => {
    return (
      <div className="arrow next" onClick={onClick}>
      <FaAngleRight />
      </div>
    )
  }

  const PrevArrow = ({onClick}) => {
    return (
      <div className="arrow prev" onClick={onClick}>
      <FaAngleLeft />
      </div>
    )
  }

  const settings = {
    infinite:true, //to allow the slides to show infinitely
    lazyLoad: true,
    speed: 300, //this is the speed of slider in ms
    slidesToShow:3, //number of slides to show up on screen
    centerMode: true,
    centerPadding: 0,
    swipeToSlide: true,
    nextArrow: <NextArrow />, //imported from 'react-icons'
    prevArrow: <PrevArrow />, //imported from 'react-icons'
    beforeChange: (current, next) => setImgIndex(next),
  };

  const changeIndex = (id) =>{
    //setImgIndex(id);

  }

  return (
    <div className="slider_center">
    <p className="tokenomics-title">Tokens</p>
    <Slider {...settings}>
    {cards.map((card, idx) => (

      <div className={idx === imgIndex ? "slide activeSlide" : "slide"} onClick={()=> changeIndex(idx)} >
      <div className="silder_card" style={{ backgroundColor: card.bg_color }} >

      <img src={card.image} alt={idx} />
      <h1  className ="token_name" style={{ color: card.color }} >{card.name}</h1>
            <div className = "token_address">
           <CopyIcon place="left"  address = {card.address} color={card.color} key_id={`${idx}_hussein`}/>
      </div>
      {card.base_url && <a href={card.base_url} className="token_link" target="_blank" style={{ color: card.color }}>Base url</a>}
      {card.graph_url == 'uniswap' && <a href='https://app.uniswap.org/#/swap?chain=mainnet' className="token_link" target="_blank" style={{ color: card.color }} >Uniswap</a>}
      {card.graph_url == 'pancakeswap' && <a href='https://pancakeswap.finance/swap' className="token_link" target="_blank"style={{ color: card.color }} >PancakeSwap</a>}
      </div>
      </div>
    ))}
    </Slider>
    </div>
  );

}

export default TokenSlider;
