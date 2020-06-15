import React from 'react'
import moment from 'moment'

import {BreakSessionContainer, BreakSessionLabel, BreakSessionTime, PlusMinusButtonContainer, PlusMinusButton} from '../ui/BreakSessionUi'

const Session = ({sessionLength, decrementSessionLength, incrementSessionLength}) => {

    const sessionLengthInMins = moment.duration(sessionLength, 's').asMinutes()

    return (
        <BreakSessionContainer>
            <BreakSessionLabel id='session-label'>Session</BreakSessionLabel>
            <BreakSessionTime id='session-length'>{sessionLengthInMins}</BreakSessionTime>
            <PlusMinusButtonContainer>
                <PlusMinusButton id="session-decrement" onClick={decrementSessionLength}>-</PlusMinusButton>
                <PlusMinusButton id="session-increment" onClick={incrementSessionLength}>+</PlusMinusButton>
            </PlusMinusButtonContainer>
        </BreakSessionContainer>
    )
}

export default Session