import React, {useState} from 'react';
import './App.css';

function App() {

  const [breakLength, setBreakLength] = useState(5)
  const [sessionLength, setSessionLength] = useState(25)
  const [inSession, setInSession] = useState(true)

  const handleBreakIncrememnt = () => {
    if (breakLength <= 59){
      setBreakLength(prevState => prevState += 1)

    }
  }
  const handleBreakDecrement = () => {
    if (breakLength >= 1){
      setBreakLength(prevState => prevState -= 1)
    }
  }
  const handleSessionIncrememnt = () => {
    if (sessionLength <= 59){
      setSessionLength(prevState => prevState += 1)

    }
  }
  const handleSessionDecrement = () => {
    if (sessionLength >= 1){
      setSessionLength(prevState => prevState -= 1)
    }
  }

  const handleStartStopTimer = () => {
      let timer = setInterval(handleSessionDecrement, 1000)

  }

  return (
    <div className="App">
      {/* Break Settings */}
      <div className='break-container'>
        <p id="break-increment" onClick={handleBreakIncrememnt}>increment</p>
        <p id='break-label'>Break Length</p>
        <p id="break-length">{breakLength}</p>
        <p id="break-decrement" onClick={handleBreakDecrement}>decrement</p>

      </div>
      {/* Session Settings */}
      <div className='session-container'>
        <p id="session-increment" onClick={handleSessionIncrememnt}>increment</p>
        <p id='session-label'>Session Length</p>
        <p id="session-length">{sessionLength}</p>
        <p id="session-decrement" onClick={handleSessionDecrement}>decrement</p>
      </div>
      {/* Timer Display */}
      <div className='timer-container'>
        <p id='timer-label'>Session</p>
        <p id='time-left'>mm:ss</p>
        <p id='start-stop' onClick={handleStartStopTimer}>start/stop</p>
        <p id='reset'>reset</p>  {/*When I click the element with the id of reset, any running timer should be stopped, the value within id="break-length" should return to 5, the value within id="session-length" should return to 25, and the element with id="time-left" should reset to it's default state.*/}
      </div>
      
    </div>
  );
}

export default App;
