import React, {useState} from 'react'
import moment from 'moment'

const Session = () => {
    const [sessionLength, setSessionLength] = useState(1500)

    const decrementSessionLength = () => {
        const newSessionLength = sessionLength - 60
        if (newSessionLength < 0){
            setSessionLength(0)
        } else {
            setSessionLength(newSessionLength)
        }
    }
    const incrementSessionLength = () => {
        setSessionLength(sessionLength + 60)
    }

    const sessionLengthInMins = moment.duration(sessionLength, 's').minutes()

    return (
        <div>
            <p id='session-label'>Session</p>
            <p id='session-length'>{sessionLengthInMins}</p>
            <button id="session-decrement" onClick={decrementSessionLength}>-</button>
            <button id="session-increment" onClick={incrementSessionLength}>+</button>
        </div>
    )
}

export default Session