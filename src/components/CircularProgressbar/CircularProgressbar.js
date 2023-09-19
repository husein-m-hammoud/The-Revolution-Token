// Libraries
import React from 'react';
import { CircularProgressbar, buildStyles } from 'react-circular-progressbar';

// Components

// Style
import './CircularProgressbar.scss';
import 'react-circular-progressbar/dist/styles.css';

function CircularProgress({progress}) {

  console.log(progress,'progress')
  return (
    <div className="progress_bar--container">
    <CircularProgressbar
      value={progress == 'start' ? 0 : progress}
      text={ progress == 'start' ? 'start' : `${progress}%`}
      styles={buildStyles({
        strokeLinecap: 'butt',
        textSize: '22px',
        pathTransitionDuration: 0.5,
        pathColor: 'rgb(182 50 50)',
        textColor: 'rgb(182 50 50)',
        trailColor: '#eee',
        backgroundColor: '#fff'
      })}
    />
    </div>
  );
}

export default CircularProgress;
