import React from 'react'
import moment from 'moment'

const Break = ({breakLength, decrementBreakLength, incrementBreakLength}) => {
    

    const breakLengthInMins = moment.duration(breakLength, 's').minutes()

    return (
        <div>
            <p id='break-label'>Break</p>
            <p id='break-length'>{breakLengthInMins}</p>
            <button id="break-decrement" onClick={decrementBreakLength}>-</button>
            <button id="break-increment" onClick={incrementBreakLength}>+</button>
        </div>
    )
}

export default Break