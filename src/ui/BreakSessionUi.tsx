import React from 'react'

export const BreakSessionContainer: React.FC<React.DetailedHTMLProps<React.HTMLAttributes<HTMLDivElement>, HTMLDivElement>> = ({children, ...props}) => {
    return (
        <div className="flex flex-col items-center" {...props}>
            {children}
        </div>
    )
}

export const BreakSessionLabel: React.FC<React.DetailedHTMLProps<React.HTMLAttributes<HTMLParagraphElement>, HTMLParagraphElement>> = ({children, ...props}) => {
    return (
        <p className="text-lg text-green-200" {...props}>{children}</p>
    )
}

export const BreakSessionTime: React.FC<React.DetailedHTMLProps<React.HTMLAttributes<HTMLParagraphElement>, HTMLParagraphElement>> = ({children, ...props}) => {
    return (
        <p className="text-4xl font-bold text-white" {...props}>{children}</p>
    )
}

export const PlusMinusButton: React.FC<React.DetailedHTMLProps<React.ButtonHTMLAttributes<HTMLButtonElement>, HTMLButtonElement>> = ({children, ...props}) => {
    return (
        <button {...props} className='mt-2 text-lg text-gray-800 px-4 py-2 bg-green-200 rounded'>{children}</button>
    )
}

export const PlusMinusButtonContainer: React.FC<React.DetailedHTMLProps<React.HTMLAttributes<HTMLDivElement>, HTMLDivElement>> = ({children, ...props}) => {
    return (
        <div {...props} className="grid grid-flow-col gap-2 rounded">{children}</div>
    )
}