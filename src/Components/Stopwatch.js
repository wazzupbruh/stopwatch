import React, {useState} from 'react';
import Timer from './Timer';
import Buttons from './Buttons';
import '../App.css';

function Stopwatch() {
    const [time, setTime] = useState({h: 0, m: 0, s: 0, ms: 0});
    const [interv, setInterv] = useState();
    const [status, setStatus] = useState(0);
  
    const start = () => {
      run();
      setStatus(1);
      setInterv(setInterval(run, 10));
    }
    var updatedHours = time.h;
    var updatedMilliseconds = time.ms;
    var updatedSeconds = time.s;
    var updatedMinutes = time.m;
  
    const run = () => {
      if(updatedHours === 60){
        updatedHours = 0;
      }
      if(updatedMinutes === 60){
        updatedMinutes = 0;
        updatedHours++;
      }
      if(updatedSeconds === 60){
        updatedMinutes++;
        updatedSeconds = 0;
      }
      if(updatedMilliseconds === 100) {
        updatedSeconds++;
        updatedMilliseconds = 0
      }
      updatedMilliseconds++;
      return setTime({h: updatedHours, m: updatedMinutes, s: updatedSeconds, ms: updatedMilliseconds});
    }
  
    const wait = () => {
      clearInterval(interv);
      setStatus(2);
    }
    const stop = () =>{
      clearInterval(interv);
      setStatus(0);
      setTime({h: 0, m: 0, s: 0, ms: 0});
    }
    const reset = () => {
      clearInterval(interv);
      setTime({h: 0, m: 0, s: 0, ms: 0});
      start();
    }
    const resume = () => start();
  
    return (
      <div className = "main-block">
          <div className = "stopwatch">
            <h1 className = "insciription">Stopwatch</h1>
            <Timer time = {time}/>
            <Buttons status={status} resume={resume} stop={stop} reset={reset} wait={wait} start={start} />
          </div>
      </div>
    );
  }

export default Stopwatch;
