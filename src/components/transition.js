import React, { useState, useEffect } from 'react'

const Transition = ({ children }) => {
    const [inView, setInView] = useState(false)

    const setInViewSoon = () => {
        setTimeout(() => setInView(true), 5000)
    }

    useEffect(() => {
        setInViewSoon()
    }, [])

    return (
        <div
            style={{
                transition: 'opacity 0.5s ease',
                opacity: inView ? 1 : 0,
            }}
        >
            {children}
        </div>
    )
}

export default Transition
