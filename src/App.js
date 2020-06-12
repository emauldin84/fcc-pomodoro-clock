import React, {useState} from 'react';
import './App.css';

import useInterval from './utils/useInterval'

function App() {

  const [breakLength, setBreakLength] = useState(5)
  const [sessionLength, setSessionLength] = useState(25)
  const [inSession, setInSession] = useState(true)
  // const [seconds, setSeconds] = useState(1500)
  const [timerRunning, setTimerRunning] = useState(false)
  const [timer, setTimer] = useState(null)
  
  // const [displayMins, setDisplayMins] = useState(25)
  // const [displaySecs, setDisplaySecs] = useState(0)
  
  const useAsyncState = (initValue) => {
    const [value, setValue] = useState(initValue)
    const setter = x => 
      new Promise(resolve => {
        setValue(x)
        resolve(x)
      })
      return [value, setter]
  }
  const [seconds, setSeconds] = useAsyncState(1500)
  const [displayMins, setDisplayMins] = useAsyncState(25)
  const [displaySecs, setDisplaySecs] = useAsyncState(0)

  const displayCount = () => {
    // if (inSession) setSeconds(sessionLength * 60)
    // if (!inSession) setSeconds(breakLength * 60)
    // setSeconds(seconds - 1)
    // setDisplayMins(Math.floor(((seconds - 1) % 3600)/60))
    // setDisplaySecs(Math.floor((seconds - 1) % 60))
    
    setSeconds(seconds - 1)
      .then(seconds => {
        console.log(seconds)
        setDisplayMins(Math.floor((seconds % 3600)/60))
        setDisplaySecs(Math.floor(seconds % 60))

      })
  }

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
    if (!timerRunning){
      setTimerRunning(true)
      // setTimer(setInterval(() => {
      //   setSeconds(seconds - 1)
      //     .then(seconds => {
      //       console.log(seconds)
      //       setDisplayMins(Math.floor((seconds % 3600)/60))
      //       setDisplaySecs(Math.floor(seconds % 60))
      // })
      // }, 1000)
      // )
      while (seconds > 0) {
        setTimer(setInterval(() => {
            setSeconds(seconds - 1)
              .then(seconds => {
                console.log(seconds)
                setDisplayMins(Math.floor((seconds % 3600)/60))
                setDisplaySecs(Math.floor(seconds % 60))
          })
          }, 1000)
        )
    }}

    if (timerRunning){
      setTimerRunning(false)
      setTimer(clearTimeout(timer))
    }

}



  // let minsDisplay = inSession ? sessionLength : breakLength

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
        <p id='time-left'>{displayMins <= 9 ? '0' : null}{displayMins}:{displaySecs <= 9 ? '0' : null}{displaySecs}</p>
        <p id='start_stop' onClick={handleStartStopTimer}>{timerRunning ? 'stop':'start'}</p>
        <p id='reset'>reset</p>  {/*When I click the element with the id of reset, any running timer should be stopped, the value within id="break-length" should return to 5, the value within id="session-length" should return to 25, and the element with id="time-left" should reset to it's default state.*/}
      </div>
      
    </div>
  );
}

export default App;
