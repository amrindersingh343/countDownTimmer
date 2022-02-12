import React, { useState } from 'react';

import './App.css';
function CountDownTimmer(){
       const [timmer,setTimmer]=useState({
           
           days:'',
           minute:'',
           sec:'',

       });
    
    let commingSoon=    setInterval(() => {
        const eventDay= new Date("march 1,2022 10:00:00").getTime();
        const currentDay=new Date().getTime();
        const diff= eventDay-currentDay;
        const day=Math.floor(diff/(1000*60*60*24));
        const hour=Math.floor((diff%(1000*60*60*24))/(1000*60*60));
        const min=Math.floor((diff%(1000*60*60))/(1000*60));
        const sec=Math.floor((diff%(1000*60))/1000);
        setTimmer({
            days:day,
            hour:hour,
            minute:min,
            sec:sec
        })
    }, 1000);
  return(
      <div className='container'>
          <span className='card-day'>
              <label  >
              {timmer.days}
              </label>
              <label className='label'>
              Days
              </label>
                
          </span>
          <span className='card-hours'>
              <label>
              {timmer.hour}
              </label>
            <label className='label'>
            Hours
            </label>
          </span>
          <span className='card-minute'>
              <label>
              {timmer.minute}
              </label>
            <label className='label'>
            Minutes
            </label>
          </span>
          <span className='card-sec'  >
              <label>
              {timmer.sec}
              </label>
            <label className='label'>
            Seconds
            </label>
          </span>
         
      </div>
     
  );
}
export default CountDownTimmer;