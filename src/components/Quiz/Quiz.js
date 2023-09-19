// Libraries
import React , { useState, useEffect } from 'react';
import { isMobile, browserName } from "react-device-detect";

// Components
import { Spin } from '../../components/Spin';
import { MCQ } from '../../components/MCQ';
import { CircularProgressbar } from '../../components/CircularProgressbar';
import { Video } from '../../components/Video';
import  Info  from './components/Info';
import  Grade  from './components/Grade';
import  Message  from './components/Message';
import  PinCode  from './components/PinCode';
import { HeaderFix } from '../../components/HeaderFix';

// Style
import './Quiz.scss'

function Quiz() {
  const [showvideo, setShwoVideo] = useState(true);
  const [canStart, setCanStart] = useState(false);
  const [loading, setLoading] = useState(false);

  const [initialMinute, setInitialMinute] = useState(0);
  const [startTimer, setStartTimer] = useState(false);



  const [errorMessages, setErrorMessages] = useState([]);
  const [showErrors, setShowErrors] = useState(false);
  const [progress, setProgress] = useState('start');

  const [data, setData] = useState([]);
  const [publicId , setPublicId] = useState('');


  useEffect(() => {
  const unloadCallback = (event) => {
    event.preventDefault();
    event.returnValue = "";
    return "";
  };

  window.addEventListener("beforeunload", unloadCallback);
  return () => window.removeEventListener("beforeunload", unloadCallback);
}, []);

  function startQuiz(requestOptions) {

    fetch(`https://therevolutiontoken.com/backend/api/start-quiz`,requestOptions)
      .then((response) => response.json())
      .then(response => {

        console.log('response',response);
        if(response) {
          var data = response.request;

          setData(data.data);
          setPublicId(data.public_id);
        }
        else{
          let errors =[];
          errors.push("Something went wrong please try again later.");

          setShowErrors({ showErrors: true });
          setErrorMessages(errors);
        }
      }
      )
      .catch(rejected => {
      console.log('error',rejected);
      });
  }

 function firstStep() {
   setLoading(true);
    var dataBody  = {
      publicId:publicId
    };
     const requestOptions = {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(dataBody)
    };
    fetch(`https://therevolutiontoken.com/backend/api/first-step`,requestOptions)
      .then((response) => response.json())
      .then(response => {

        console.log('response',response);
        if(response) {
          var data = response.request;

          setData(data.data);
          setProgress(0)
          setStartTimer(true);
          setInitialMinute(3)
          setLoading(false);

        }
        else{
          let errors =[];
          errors.push("Something went wrong please try again later.");
          setLoading(false);

          setShowErrors({ showErrors: true });
          setErrorMessages(errors);
        }
      }
      )
      .catch(rejected => {
      console.log('error',rejected);
          let errors =[];
          errors.push("Something went wrong please try again later.");
          setLoading(false);

          setShowErrors({ showErrors: true });
          setErrorMessages(errors);
      });
 }

 function nextStep(answer_id) {
   setLoading(true);
    var dataBody  = {
      publicId:publicId,
      answer_id:answer_id
    };
     const requestOptions = {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(dataBody)
    };
    fetch(`https://therevolutiontoken.com/backend/api/next-step`,requestOptions)
      .then((response) => response.json())
      .then(response => {

        console.log('response',response);
        if(response) {
          var tmp_data = response.request;

          console.log(tmp_data.data.progress,'tmp_data')
          if(tmp_data.data.component == 'grade' || tmp_data.data.component == 'message') {

          setStartTimer(false);
          setInitialMinute(0)
          }
          setProgress(tmp_data.data.progress)
          setData(tmp_data.data);
          setLoading(false);
        }
        else{
          let errors =[];
          errors.push("Something went wrong please try again later.");
          setLoading(false);

          setShowErrors({ showErrors: true });
          setErrorMessages(errors);
        }
      }
      )
      .catch(rejected => {
      console.log('error',rejected);
          let errors =[];
          errors.push("Something went wrong please try again later.");
          setLoading(false);

          setShowErrors({ showErrors: true });
          setErrorMessages(errors);
      });
 }


  function showQuiz(){
    setShwoVideo(false);
  }

  function stopQuiz(){
    var tmp_data = {component: 'timeOut'}
    setData(tmp_data);
  }


  function renderComponents(){

    if(typeof data.component !== 'undefined') {
      var component = data.component
    console.log(component);
      switch(component) {
        case 'code':
          return <PinCode publicId = {publicId} firstStep = {firstStep}/>;

        case 'mcq':
          return <MCQ publicId = {publicId} nextStep = {nextStep} data = {data}/>;
        case 'grade':
          return <Grade publicId = {publicId} data= {data}/>;
        case 'message':
          return <Message publicId = {publicId} data= {data} goBackToInfo = {goBackToInfo}/>;
        case 'timeOut':
          return (<p className="title">time out</p>);
        default:
        return <Info  startQuiz= {startQuiz}/>;
      }
    }
    else {
      return(
        <Info  startQuiz= {startQuiz}/>
      )
    }

  }
  function goBackToInfo() {

    var tmp_data = {component: 'info'}
    setData(tmp_data);
    setPublicId('');

  }

  /**
   * Render
   */
  return (
    <div className="App" >
      <HeaderFix  initialMinute = {initialMinute} startTimer= {startTimer} stopQuiz = {stopQuiz}/>
      <CircularProgressbar progress = {progress}/>
        {!showvideo &&
          <>
          {loading
            ?<Spin/>
            :
    <div  className="mcq show_next--animation">
      <div className="container mt-sm-5 my-1">
          {renderComponents()}
      </div>
    </div>
          }
          </>
      }

    {showvideo && <Video showQuiz = {showQuiz}/>}
    </div>
  );
}

export default Quiz;
