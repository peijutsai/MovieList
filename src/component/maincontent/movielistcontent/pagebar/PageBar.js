import React from 'react'
import { Link } from 'react-router-dom'
import './PageBar.scss'

import nextpageicon from '../../../../assests/nextpageicon.png'
import previouspageicon from '../../../../assests/previouspageicon.png'

const PageBar = (props) => {
    let previousIfDisable = ''
    let nextIfDisable = ''

    if(props.currentpage === 1) {
        previousIfDisable ='DisableClick'
    }

    if(props.currentpage === props.totalpage) {
        nextIfDisable ='DisableClick'
    }


    return (
        <div>
            <hr className='Hr' />
            <div className='PageIcon'>
                <Link to={'/movielist/' + (props.currentpage - 1)} className={previousIfDisable}>
                    <img src={previouspageicon} width='25px' className='Right' alt='previousicon' />
                </Link>
                <span>{props.currentpage} / {props.totalpage}</span>
                <Link to={'/movielist/' + (props.currentpage + 1)} className={nextIfDisable}>
                    <img src={nextpageicon} width='25px' className='Left' alt='nexticon' />
                </Link>
            </div>
            <hr className='Hr' />
        </div >
    )
}

export default PageBar