// Libraries
import React from 'react';

// Components
import { CopyIcon } from '../../CopyIcon';


function Grade({data, publicId}) {

  let grade_color;
  if(data.grade < 50) {
      grade_color = "red";
  }
  else {
    grade_color = "green";
  }
  return (
      <div className='py-5 grade'>

        <div className="title">your grade</div>
        <div className={`${grade_color} title-grade`} >{data.grade}/100</div>
        <div className="sub-title">your ID :</div>
        <CopyIcon place="left"  address = {publicId} color={'#fff'} key_id={'publicId'}/>
        <div className="connect_us">please copy your id and send it to <a href="mailto:rewards@trtl2e.com">rewards@trtl2e.com</a> with your address</div>

      </div>


  );
}

export default Grade;
