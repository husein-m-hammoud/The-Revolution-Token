import React from 'react'
import { useState, useEffect } from 'react';

import './Timer.scss';

const Timer = (props:any) => {
    const {initialMinute = 0,initialSeconds = 0, startTimer ,stopQuiz} = props;
  console.log(initialMinute,'initialMinute');
    const [ minutes, setMinutes ] = useState(initialMinute);
    const [seconds, setSeconds ] =  useState(initialSeconds);

  useEffect(() => {
    setMinutes(initialMinute);
    setSeconds(0);
    console.log('time CHANGE ', initialMinute)
}, [initialMinute]);
    useEffect(()=>{
    let myInterval = setInterval(() => {
            if (seconds > 0) {
                setSeconds(seconds - 1);
            }
            if (seconds === 0) {
                if (minutes === 0) {
                  if(startTimer) {
  console.log(initialMinute,'initialMinute');
                    stopQuiz();
                  }
                    clearInterval(myInterval)
                } else {
                    setMinutes(minutes - 1);
                    setSeconds(59);
                }
            }
        }, 1000)

        return ()=> {
            clearInterval(myInterval);
          };
    });


    return (
        <div className ="timer">
       { minutes === 0 && seconds === 0
            ? <h1> 3:00</h1>
            : <h1> {minutes}:{seconds < 10 ?  `0${seconds}` : seconds}</h1>
        }
        </div>
    )
}

export default Timer;
