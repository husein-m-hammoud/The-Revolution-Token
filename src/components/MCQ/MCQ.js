
// Libraries
import React from 'react';

// Components

// Style
import './MCQ.scss';

function MCQ({nextStep, data}) {

  console.log(data.answers)
  return (
      <div>
          <div className="question ml-sm-5 pl-sm-5 pt-2">
              <div className="py-2 h5 text-left"><b>Q. {data.question.question}</b></div>
              <div className="ml-md-3 ml-sm-3 pl-md-2 pt-sm-0 pt-3" id="options">
                  {data.answers.map((answer) =>(
                  <label className="options">{answer.answer}
                      <input type="radio" name="radio" onClick= {() => {nextStep(answer.id) }}/>
                      <span className="checkmark"></span>
                  </label>
                  ))
                  }
              </div>
          </div>
    {/*
          <div className="d-flex align-items-center pt-3">
              <div className="ml-auto mr-sm-5">
                  <button className="submit mb-3" onClick ={nextStep}>Next</button>
              </div>
          </div>
          */}
      </div>


  );
}

export default MCQ;
