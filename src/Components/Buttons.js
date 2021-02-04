import React from 'react';

function Buttons(props) {
  return (
    <div>
      {(props.status === 0) ? 
        <button className = "stopwatchButton" onClick = {props.start}>Start</button> : ''
      }
      {(props.status === 1) ? 
        <div>
        <button className = "stopwatchButton stopwatchButton-r" onClick = {props.stop}>Stop</button>
        <button className = "stopwatchButton stopwatchButton-g" onClick = {props.wait}>Wait</button>
        <button className = "stopwatchButton stopwatchButton-b" onClick = {props.reset}>Reset</button>
        </div>: ''
      }
      {(props.status === 2) ? 
        <div>
        <button className = "stopwatchButton" onClick = {props.resume}>Resume</button>
        <button className = "stopwatchButton stopwatchButton-b" onClick = {props.reset}>Reset</button>
        </div>: ''
      }  
    </div>
  );
}

export default Buttons;