import React from 'react'
import './BackDrop.scss'

const BackDrop = (props) => {
    return (
        props.shouldOpenDrawer ? <div className='BackDrop' onClick={props.closeEventHandler}></div> : null
    )
}

export default BackDrop