import React from 'react'
import './BackDrop.css'

const BackDrop = (props) => {
    return (
        props.shouldOpenDrawer ? <div className='BackDrop' onClick={props.closeEventHandler}></div> : null
    )
}

export default BackDrop