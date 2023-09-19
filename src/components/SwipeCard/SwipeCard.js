import React, { useState, useEffect } from "react";
import { Stack } from "./components/Stack"
import styled from "@emotion/styled"
import { Modal } from '../../components/Modal';

import { BsArrowCounterclockwise } from "react-icons/bs";

import './SwipeCard.scss';
// Components
import { CopyIcon } from '../CopyIcon';

export default function SwipeCard() {
  const [isOpen, setIsOpen] = useState(false);
  const [cards, setCards] = useState([]);

   useEffect(() => {
  let cards_tmp = [];
  fetch(`https://therevolutiontoken.com/backend/api/tokens`)
   .then((response) => response.json())
     .then(data => {

cards_tmp.push({});
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
    };
    console.log(image_src)
    cards_tmp.push(tmp);
  }
  console.log('response',data);
    setCards(cards_tmp);
  }
     );

 }, []);


  const Wrapper = styled(Stack)`
    background: #FFF0;
  `

  const Item = styled.div`
    background: #f9fafb;
    width: 300px;
    height: 450px;
    display: flex;
    align-items: center;
    justify-content: center;
    text-shadow: 0 10px 10px #d1d5db;
    box-shadow: 0 0 20px rgba(0, 0, 0, 0.15);
    border-radius: 1px;
    transform: ${() => {
      let rotation = Math.random() * (5 - -5) + -5
      return `rotate(${rotation}deg)`
    }};
  `
      /*
      const cards = [
        {
        },
        {
          id: 1,
          name: "BTC",
          address: "Bitcoin is a digital currency which operates free of any central control or the oversight of banks or governments. Instead it relies on peer-to-peer software and cryptography.",
          image: "https://www.freeiconspng.com/thumbs/bitcoin-icon-png/black-bitcoin-icon-6.png",
          base_url: "https://bitcoin.org/en/",
          graph_url: "https://www.tradingview.com/symbols/LINKBTC/",
        },
        {
          id: 2,
          name: "Ethereum",
          address: "Bitcoin is a digital currency which operates free of any central control or the oversight of banks or governments. Instead it relies on peer-to-peer software and cryptography.",
          image: "https://www.logo.wine/a/logo/Ethereum/Ethereum-Logo.wine.svg",
          base_url: "https://bitcoin.org/en/",
          graph_url: "https://www.tradingview.com/symbols/LINKBTC/",
        },
        {
          id: 3,
          name: "Zilliqa",
          address: "Bitcoin is a digital currency which operates free of any central control or the oversight of banks or governments. Instead it relies on peer-to-peer software and cryptography.",
          image: "https://cryptologos.cc/logos/zilliqa-zil-logo.png?v=022",
          base_url: "https://bitcoin.org/en/",
          graph_url: "https://www.tradingview.com/symbols/LINKBTC/",
        },
      ];
      */

    function reload() {
      setIsOpen(!isOpen);
    }



  return (
    <div className="" style ={{position:'relative'}}>
    <p className="tokenomics-title">Tokens</p>
      <Wrapper onVote={(item, vote) => console.log(item.props, vote)}>
        {cards.map(token => (
          <>
          {!token.id
          ? < div  onClick={reload} > reload <BsArrowCounterclockwise/></div>
          :
          <Item data-value="donuts" whileTap={{ scale: 1.15 }}>
          <div className= 'token_inner_card'>
          <img src={token.image}  className="token_image"/>
          <h1  className ="token_name">{token.name}</h1>
            <div className = "token_address">
           <CopyIcon  address = {token.address} color="#000"/>
            </div>
         {token.base_url && <a href={token.base_url} className="token_link" target="_blank">Base url</a>}
        {token.graph_url == 'uniswap' && <a href='https://app.uniswap.org/#/swap?chain=mainnet' className="token_link" target="_blank" >Uniswap</a>}
        {token.graph_url == 'pancakeswap' && <a href='https://pancakeswap.finance/swap' className="token_link" target="_blank" >PancakeSwap</a>}
          </div>
          </Item>
          }
          </>
        ))}
      </Wrapper>
    </div>
  )
}

