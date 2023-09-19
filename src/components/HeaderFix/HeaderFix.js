// Libraries
import React from 'react';

// Components
import { Timer } from '../../components/Timer';

// Style
import './HeaderFix.scss';

function HeaderFix({initialMinute , stopQuiz, startTimer}) {


  function stopHeaderQuiz() {
    stopQuiz();
  }
  return (
    <div id="header_fix">
          <a href="/">
        <img src={process.env.PUBLIC_URL+'/img/trt_new_logo.svg'} className="header_fix_logo" alt="logo" />
          </a>
        <Timer  initialMinute = {initialMinute} stopQuiz = {stopHeaderQuiz} startTimer = {startTimer}/>

    </div>

  );
}

export default HeaderFix;
