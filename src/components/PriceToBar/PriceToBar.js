// Libraries
import React, { useState, useEffect } from "react";

// Components

// Style
import './PriceToBar.scss';

function PriceToBar() {
   const [ETH, setETH] = useState([]);
   const [BNB, setBNB] = useState([]);
  const MINUTE_MS = 1000;
  useEffect(() => {
     const interval = setInterval(() => {
    fetch(`https://api.coingecko.com/api/v3/coins/markets?vs_currency=usd&order=market_cap_desc&per_page=10&page=1&sparkline=false&ids=ethereum`)
      .then((response) => response.json())
      .then(data => {
        setETH(data[0]);
      })
      .catch((error) => console.log(error));

    fetch(`https://api.coingecko.com/api/v3/coins/markets?vs_currency=usd&order=market_cap_desc&per_page=10&page=1&sparkline=false&ids=binancecoin`)
      .then((response) => response.json())
      .then(data => {
        setBNB(data[0]);
      })
      .catch((error) => console.log(error));
        }, MINUTE_MS);

  return () => clearInterval(interval);
  }, []);



  return (
    <div className="top_bar">

        <div className="container p-0">
          <div className="row">
          {ETH &&
            <div className="col-md-6"><img src={ETH['image']} className="coin_icon_eth" />{ETH['name']} {ETH.current_price}$ {ETH.market_cap_change_percentage_24h > 0 ? <i className="ml-2  mr-1 fa-solid fa-caret-up"></i> : <i className =" ml-2  mr-1 fa-solid fa-caret-down"></i>} {ETH.market_cap_change_percentage_24h}%</div>

          }
          {BNB &&
            <div className="col-md-6"><img src={BNB['image']} className="coin_icon_bnb" />{BNB['name']} {BNB.current_price}$ {BNB.market_cap_change_percentage_24h > 0 ? <i className="ml-2  mr-1 fa-solid fa-caret-up"></i> : <i className =" ml-2  mr-1 fa-solid fa-caret-down"></i>} {BNB.market_cap_change_percentage_24h}%</div>

          }
        </div>
        </div>
    </div>
  );
}

export default PriceToBar;
