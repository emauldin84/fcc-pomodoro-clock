import React, {useState, useEffect, useRef} from 'react';
import './App.css';

import Break from './components/Break'
import Session from './components/Session'
import TimeLeft from './components/TimeLeft'

function App() {
  const audioElement = useRef(null)
  const [sessionLength, setSessionLength] = useState(1500)
  const [breakLength, setBreakLength] = useState(300)
  const [currentSessionType, setCurrentSessionType] = useState('Session') // 'Session or 'Break'
  const [intervalId, setIntervalId] = useState(null)
  const [timeLeft, setTimeLeft] = useState(sessionLength)

    useEffect(() => {
        setTimeLeft(sessionLength)
    }, [sessionLength])

    const decrementBreakLength = () => {
        const newBreakLength = breakLength - 60
        if (newBreakLength < 60){
            setBreakLength(60)
        } else {
            setBreakLength(newBreakLength)
        }
    }
    const incrementBreakLength = () => {
        setBreakLength(breakLength + 60)
    }

  const decrementSessionLength = () => {
      const newSessionLength = sessionLength - 60
      if (newSessionLength < 60){
          setSessionLength(60)
      } else {
          setSessionLength(newSessionLength)
      }
  }
  const incrementSessionLength = () => {
      setSessionLength(sessionLength + 60)
  }

  const handleResetButtonClick = () => {
    // clear timeout interval
    clearInterval(intervalId)
    // set the intervalId to null
    setIntervalId(null)
    // set the sessionType to 'Session'
    setCurrentSessionType('Session')
    // reset the session length to 25 mins
    setSessionLength(1500)
    // reset the break length to 5mins
    setBreakLength(300)
    // reset the timer to 25 mins (init session length)
    setTimeLeft(1500)
  }
  const isStarted = intervalId !== null
    const handleStartStopClick = () => {
        if (isStarted){
            clearInterval(intervalId)
            setIntervalId(null)
        } else {
            const newIntervalId = setInterval(() => {
                setTimeLeft(prevTimeLeft => {
                    const newTimeLeft = prevTimeLeft - 1
                    if (newTimeLeft >= 0){
                        return prevTimeLeft - 1
                    }
                    audioElement.current.play()
                    if (currentSessionType === 'Session'){
                        setCurrentSessionType('Break')
                        setTimeLeft(breakLength)
                    } else if (currentSessionType === 'Break'){
                        setCurrentSessionType('Session')
                        setTimeLeft(sessionLength)
                    }
                    })
            }, 100)
            setIntervalId(newIntervalId)
        }
    }
  return (
    <div className="App">
      <Break 
        breakLength={breakLength}
        decrementBreakLength={decrementBreakLength}
        incrementBreakLength={incrementBreakLength}
      />
      <TimeLeft 
        sessionLength={sessionLength}
        breakLength={breakLength}
        timerLabel={currentSessionType}
        handleStartStopClick={handleStartStopClick}
        startStopButtonLabel={isStarted ? 'stop':'start'}
        timeLeft={timeLeft}
        />
      <Session 
        sessionLength={sessionLength}
        decrementSessionLength={decrementSessionLength}
        incrementSessionLength={incrementSessionLength}
      />
      <button id='reset' onClick={handleResetButtonClick}>reset</button>
      <audio id='beep' ref={audioElement}>
        <source src='https://onlineclock.net/audio/options/default.mp3' type='audio/mpeg'/>
      </audio>
    </div>
  );
}

export default App;
