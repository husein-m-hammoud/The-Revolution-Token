// Libraries
import { useState } from "react";
import cn from "classnames";
import React from 'react';

// Components

// Style
//import './FlipCard.scss';

function FlipCard() {

  const cards_1 = [
    {
      id: "1",
      background: 'bg_1',
      variant: "hover",
      front: "",
      back: "A location where our community can swap & stake their tokens in order to receive rewards."
    },
    {
      id: "2",
      background: 'bg_2',
      variant: "hover",
      front: "",
      back: "A resource for skilled individuals within the crypto-space to list their skills for hire, so they're able to be used by holders to find freelance work and more!"
    }
  ];
  const cards_2 = [
    {
      id: "3",
      background: 'bg_3',
      variant: "hover",
      front: "",
      back: "A platform where future tokens will have the chance to launch their projects directly on the Revolution Launchpad."
    },
    {
      id: "4",
      background: 'bg_4',
      variant: "hover",
      front: "",
      back: "TRT will have its own exclusive space inside the Metaverse, thus allowing people to meet & work together. The workspace will be deployed into the metaverse."
    }
  ];


  return (
     <div id="trt-ecosystem" className="container">
        <h1 className="text-center pt-5 pb-4 trt-ecosystem--title">ECOSYSTEM</h1>
      <div className="row h-100">
        <div className="flip-card-grid  d-flex flex-column flex-md-row justify-content-around align-items-center">
          {cards_1.map((card) => (
              <Flip key={card.id} card={card} />
          ))}
        </div>
      </div>
      <div className="row h-100">
        <div className="flip-card-grid  d-flex flex-column flex-md-row justify-content-around align-items-center">
          {cards_2.map((card) => (
              <Flip key={card.id} card={card} />
          ))}
        </div>
      </div>
    </div>
  );
}

export default FlipCard;


function Flip({ card }) {
  const [showBack, setShowBack] = useState(false);

  function handleClick() {
    if (card.variant === "click") {
      setShowBack(!showBack);
    }
  }

  return (
    <div
      className="flip-card-outer"
      onClick={handleClick}
    >
      <div
        className={cn("flip-card-inner", {
          showBack,
          "hover-trigger": card.variant === "hover"
        })}
      >
        <div className={`card front ${card.background}`}>
          <div className="card-body d-flex justify-content-center align-items-center">
            <h3 className="card-text fs-1 fw-bold">{card.front}</h3>
          </div>
        </div>
        <div className="card back">
          <div className="card-body d-flex justify-content-center align-items-center">
            <p className="card-text fs-1 fw-bold">{card.back}</p>
          </div>
        </div>
      </div>
    </div>
  );
}

