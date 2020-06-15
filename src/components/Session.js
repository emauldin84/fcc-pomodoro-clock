import React from 'react'
import moment from 'moment'

const Session = ({sessionLength, decrementSessionLength, incrementSessionLength}) => {

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