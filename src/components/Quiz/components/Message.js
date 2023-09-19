// Libraries
import React from 'react';

// Components
import { CopyIcon } from '../../CopyIcon';


function Message({data, publicId, goBackToInfo}) {

  return (
      <div className='py-5 grade'>


        <div className="title">{data.message}</div>
        <i class="fa-solid fa-left-long go_back" onClick={goBackToInfo}></i>

      </div>


  );
}

export default Message;
