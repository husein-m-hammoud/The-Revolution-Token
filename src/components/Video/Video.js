// Libraries
import React , { useState, useEffect, useRef } from 'react';
import { Player} from "video-react";

// Components

// Style
import './Video.scss';

function Video({showQuiz}) {
 let videoPlayer = useRef();

  const [video, setVideo] = useState({});
  const [disabledStart, setDisabledStart] = useState(true);

  useEffect(() => {
    let cards_tmp = [];
    fetch(`https://therevolutiontoken.com/backend/api/getActiveVideo`)
      .then((response) => response.json())
      .then(data => {

        console.log('response',data);
        setVideo(data.video)
      }
      );

  }, []);

  function changeCurrentTime(seconds) {
    console.log(seconds)
  }
  useEffect(() => {
    // Update the document title using the browser API
  console.log(videoPlayer);
  },[videoPlayer.current]);

  const myCallback = () => (setDisabledStart(false));

  if(!video) {
    return null;
  }
  return (
    <div className="container box-shaddow" style={{ transition: "all .2s"}} >
    <Player
    ref={(player) => { videoPlayer.current = player }}
      onEnded={() => myCallback()}
      changeCurrentTime = {changeCurrentTime}
      playsInline
      poster={'https://therevolutiontoken.com/backend/Image/'+video.poster}
      src={'https://therevolutiontoken.com/backend/video/'+video.url}
      fluid = {false}
      width= {'100%'}
      height={500}
    />
      <button className="submit my-3" onClick = {() => showQuiz()}  disabled ={disabledStart} > TAKE A QUIZ</button>

    </div>
  );
}

export default Video;
