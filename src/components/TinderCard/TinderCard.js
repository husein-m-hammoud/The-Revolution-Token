// Libraries
import React, { useState, useEffect, useMemo, useRef} from "react";
import TinderCard from 'react-tinder-card'
import { BsArrowCounterclockwise } from "react-icons/bs";

// Components
import { CopyIcon } from '../CopyIcon';

// Style
import './TinderCard.scss';

function TinderCardRender() {

  const [lastDirection, setLastDirection] = useState()
  // used for outOfFrame closure
  const [isOpen, setIsOpen] = useState(false);
  const [cards, setCards] = useState([]);
    const [currentIndex, setCurrentIndex] = useState(cards.length - 1)
  const currentIndexRef = useRef(currentIndex)

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


  const childRefs = useMemo(
    () =>
      Array(cards.length)
        .fill(0)
        .map((i) => React.createRef()),
    []
  )

  const updateCurrentIndex = (val) => {
    setCurrentIndex(val)
    currentIndexRef.current = val
  }

  const canGoBack = currentIndex < cards.length - 1

  const canSwipe = currentIndex >= 0

  // set last direction and decrease current index
  const swiped = (direction, nameToDelete, index) => {
    if(index == 0 ) {
      setIsOpen(!isOpen)
    }
    console.log('index', index)
    console.log('cards',cards.length)
    setLastDirection(direction)
    updateCurrentIndex(index - 1)
  }
  console.log(isOpen,'isOpen')

  const outOfFrame = (name, idx) => {
    console.log(`${name} (${idx}) left the screen!`, currentIndexRef.current)
    // handle the case in which go back is pressed before card goes outOfFrame
    currentIndexRef.current >= idx && childRefs[idx].current.restoreCard()
    // TODO: when quickly swipe and restore multiple times the same card,
    // it happens multiple outOfFrame events are queued and the card disappear
    // during latest swipes. Only the last outOfFrame event should be considered valid
  }

  const swipe = async (dir) => {
    if (canSwipe && currentIndex < cards.length) {
      await childRefs[currentIndex].current.swipe(dir) // Swipe the card!
    }
  }

  // increase current index and show card
  const goBack = async () => {
    if (!canGoBack) return
    const newIndex = currentIndex + 1
    updateCurrentIndex(newIndex)
    await childRefs[newIndex].current.restoreCard()
  }
    function reload() {
      setIsOpen(!isOpen);
    }

  if(isOpen) {
    return (
    <div>
    <p className="tokenomics-title">Tokens</p>
    <div className='cardContainer'>
         < div  onClick={reload} className="reload"> reload <BsArrowCounterclockwise/></div>
      </div>
      </div>

    );
  }
  return (
    <div>
    <p className="tokenomics-title">Tokens</p>
    <div className='cardContainer'>
    {cards.map((token , index) =>

       <TinderCard
            //ref={childRefs[index]}
            className='swipe'
            key={token.name}
            onSwipe={(dir) => swiped(dir, token.name, index)}
            onCardLeftScreen={() => outOfFrame(token.name, index)}
          >
      <div style={{ backgroundColor: token.bg_color }} className='card'>
        <img src={token.image}  className="token_image"/>
      <h1  className ="token_name" style={{ color: token.color }}>{token.name}</h1>
            <div className = "token_address" >
           <CopyIcon  address = {token.address} color={token.color}/>
            </div>
         {token.base_url && <a  className="token_link" target="_blank" onTouchEnd={() => {window.open(token.base_url,'_blank')}} style={{ color: token.color }}>Base url</a>}
        {token.graph_url == 'uniswap' && <a  onTouchEnd={() => {window.open('https://app.uniswap.org/#/swap?chain=mainnet','_blank')}}  className="token_link" target="_blank" style={{ color: token.color }}>Uniswap</a>}
        {token.graph_url == 'pancakeswap' && <a onTouchEnd={() => {window.open('https://pancakeswap.finance/swap','_blank')}} className="token_link" target="_blank" style={{ color: token.color }}>PancakeSwap</a>}
      </div>
          </TinderCard>



    )}
    </div>
     <div className='buttons my-5'>
    {/*   <button className="" style={{ backgroundColor: !canGoBack && '#c3c4d3' }} onClick={() => goBack()}>Undo swipe!</button>
    */}
      </div>
    </div>
  )
}

export default TinderCardRender;
