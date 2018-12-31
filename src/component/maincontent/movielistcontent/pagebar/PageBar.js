import React from 'react'
import { Link } from 'react-router-dom'
import './PageBar.css'

import nextpageicon from '../../../../assests/nextpageicon.png'
import previouspageicon from '../../../../assests/previouspageicon.png'

const PageBar = (props) => {
    let ifDisable = ''

    if(props.currentpage === 1 || props.currentpage === props.totalpage) {
        ifDisable ='DisableClick'
    }


    return (
        <div>
            <hr className='Hr' />
            <div className='PageIcon'>
                <Link to={'/movielist/' + (props.currentpage - 1)} className={ifDisable}>
                    <img src={previouspageicon} width='25px' className='Right' alt='previousicon' />
                </Link>
                <span>{props.currentpage} / {props.totalpage}</span>
                <Link to={'/movielist/' + (props.currentpage + 1)} className={ifDisable}>
                    <img src={nextpageicon} width='25px' className='Left' alt='nexticon' />
                </Link>
            </div>
            <hr className='Hr' />
        </div >
    )
}

export default PageBar