import React, { useEffect, useState } from 'react';

import './App.css';
function CountDownTimmer({tillTime="march 1,2022 10:00:00"}){

const [timmer,setTimmer]=useState({ days:'', hour:'', minute:'', sec:'',});

    setInterval(() => {
        const eventDay= new Date(tillTime).getTime();
        const currentDay=new Date().getTime();
        const diff= eventDay-currentDay;
        const day=Math.floor(diff/(1000*60*60*24));
        const hour=Math.floor((diff%(1000*60*60*24))/(1000*60*60));
        const min=Math.floor((diff%(1000*60*60))/(1000*60));
        const sec=Math.floor((diff%(1000*60))/1000);
        setTimmer({
            days:pad(day),
            hour:pad(hour),
            minute:pad(min),
            sec:pad(sec)
        })
    }, 1000);


  return(
      <div className='card-timer'>
      <div className='card-day'>
        <div>
          {timmer.days}
        </div>
        <div className='label'>
          Days
        </div>
      </div>
      <div className='card-hours'>
        <div>
          {timmer.hour}
        </div>
        <div className='label'>
          Hours
        </div>
      </div>
      <div className='card-minute'>
        <div>
          {timmer.minute}
       </div>
      <div className='label'>
        Minutes
      </div>
    </div>
    <div className='card-sec'>
        <div>
          {timmer.sec}
        </div>
        <div className='label'>
          Seconds
        </div>
      </div>
    </div>

  );
}

function pad(d) {
  return (d < 10) ? '0' + d.toString() : d.toString();
}
export default CountDownTimmer;