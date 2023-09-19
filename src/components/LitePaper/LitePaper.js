// Libraries
import React , { useState } from 'react';

// Style
import './LitePaper.scss';


function LitePaper() {
  return (
    <div id="lite-paper" className="container">
      <h1 className="text-center pt-5 pb-4  LitePaper-section-title">White Paper</h1>

      <div className="row justify-content-center">
        <div className="col-md-4">
         <a className="download-file"href={process.env.PUBLIC_URL+'/TRT_WhitePaper.pdf'} download>Download TRT PDF</a>

        </div>
        </div>
    </div>
  );
}
export default LitePaper;
