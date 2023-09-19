// Libraries
import React , { useState } from 'react';

// Style
import './Founders.scss';


function Founders() {
  return (

     <div className="team-grid" id="founders">
     <div className="container">
         <div className="intro">
             <h2 className="text-center pt-5 Founders-section-title">Meet the FOUNDERS</h2>
         </div>
         <div className="row people d-flex justify-content-center">
             <div className="col-md-4  item">
                 <div className="box bg_founder_2" >
                     <div className="cover">
                         <h3 className="name">Zach</h3>
                         <p className="title">Zach came to be known in the defi space by hosting a community-crypto show on YouTube, where he has created a loyal and loving community that respect him. At 38 years old he has a wide professional background centering around sales and marketing, and is now a stay-at-home dad.</p>
                         <div className="social"><a href="https://twitter.com/moonwalkcoins?t=0w2-wJoVHKR2dtre14rHSw&s=08" target="_blank">@moonwalkcoins</a></div>
                     </div>
                 </div>
             </div>
             <div className="col-md-4  item">
                 <div className="box bg_founder_3">
                     <div className="cover">
                         <h3 className="name">Faysal</h3>
                         <p className="title">Faysal (32) is our technical expert and a successful Computer and Communications Engineer. He is extremely capable technically and is responsible for creating one of the most innovative utilities. He enjoys spending as much time as he can with his wife and playing basketball on the weekends. When he isn't doing that, he is cheering on Manchester United; his favorite team.</p>
                         <div className="social"><a href="https://twitter.com/FaysalHatoum89?t=ADi2vxiSlweRom7hQyiwlQ&s=08" target="_blank">@FaysalHatoum89</a></div>
                     </div>
                 </div>
             </div>
             </div>
         </div>
     </div>

  );
}
export default Founders;
