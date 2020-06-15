import React from 'react'
import moment from 'moment'

import {BreakSessionContainer, BreakSessionLabel, BreakSessionTime, PlusMinusButtonContainer, PlusMinusButton} from '../ui/BreakSessionUi'

const Break = ({breakLength, decrementBreakLength, incrementBreakLength}) => {

    const breakLengthInMins = moment.duration(breakLength, 's').asMinutes()

    return (
        <BreakSessionContainer>
            <BreakSessionLabel id='break-label'>Break</BreakSessionLabel>
            <BreakSessionTime id='break-length'>{breakLengthInMins}</BreakSessionTime>
            <PlusMinusButtonContainer>
                <PlusMinusButton id="break-decrement" onClick={decrementBreakLength}>-</PlusMinusButton>
                <PlusMinusButton id="break-increment" onClick={incrementBreakLength}>+</PlusMinusButton>
            </PlusMinusButtonContainer>
        </BreakSessionContainer>
    )
}

export default Break