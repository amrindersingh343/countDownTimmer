import { getByDisplayValue } from '@testing-library/react';
import React, { useEffect, useState } from 'react';
import {useSpring,animated} from 'react-spring'
import { Fragment } from 'react/cjs/react.production.min';
import classes from './App.module.css';
function CountDownTimmer(){
       const [day,setDay]=useState();
       const [hour,setHour]=useState();
       const [minute,setMinute]=useState();
       const [second,setSecond]=useState();
       const styles=useSpring({
         loop:true,
         from:{rotateX:0},
         to:{rotateX:90},
         config:{duration:1000}
       });
       let interval;
       console.log('hello1')

       const startTimer = ()=>{
        const eventDay= new Date("march 1,2022 10:00:00").getTime();
        interval=setInterval(()=>{
          const currentDay=new Date().getTime();
        const diff= eventDay-currentDay;
        const day=Math.floor(diff/(1000*60*60*24));
        const hour=Math.floor((diff%(1000*60*60*24))/(1000*60*60));
        const min=Math.floor((diff%(1000*60*60))/(1000*60));
        const sec=Math.floor((diff%(1000*60))/1000);
        if(diff<0){
          clearInterval(interval.current);
        }
        else{
          setDay(day);
          setHour(hour);
          setMinute(min);
          setSecond(sec);
        }
        });

       };
    
    // let commingSoon=    setInterval(() => {
       
    //     setTimmer({
    //         days:day,
    //         hour:hour,
    //         minute:min,
    //         sec:sec
    //     })
    // }, 1000);
    useEffect(()=>{
        console.log('hello')
    },[hour]
    );
    useEffect(()=>{
      startTimer();
    },[]);
  return(
    <Fragment>
      <div className={classes.container}>
          <span className={classes.cardday}>
              <label  >
              {day}
              </label>
              <label className={classes.label}>
              Days
              </label>
                
          </span>
          <span className={classes.cardhours}>
              <label>
              {hour}
              </label>
            <label className={classes.label}>
            Hours
            </label>
          </span>
          <span className={classes.cardminute}>
              <label>
              {minute}
              </label>
            <label className={classes.label}>
            Minutes
            </label>
          </span>
          <div className={classes.cardsec}>
              <label>
              {second}
              </label>
            <label className={classes.label}>
            Seconds
            </label>
          </div>
          {/* <animated.div className={classes.check} style={{
  width:80,
  height:80,
  
  borderRadius:16,
  
  ...styles
}}>
  {second}
 
</animated.div > */}
      </div>


    </Fragment>
    
      );
}
export default CountDownTimmer;