import React, { useState } from 'react'
import { slide as Menu } from 'react-burger-menu'
import NavButtons from './nav-buttons'
import './burger.scss'

const Burger = () => {
    const [menuOpenState, setMenuOpenState] = useState(false)

    const handleStateChange = newState => {
        setMenuOpenState(newState.isOpen)
    }

    const close = () => setMenuOpenState(false)

    return (
        <Menu right isOpen={menuOpenState} onStateChange={state => handleStateChange(state)}>
            <NavButtons close={close} />
        </Menu>
    )
}

export default Burger
