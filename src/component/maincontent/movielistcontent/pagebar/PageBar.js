import React from 'react'

import './PageBar.css'

import nextpageicon from '../../../../assests/nextpageicon.png'
import previouspageicon from '../../../../assests/previouspageicon.png'

const PageBar = (props) => {
    return (
        <div>
            <hr className='Hr'/>
            <div className='PageIcon'>
                <img src={previouspageicon} width='25px' className='Right' alt='previousicon' onClick={props.clickedpreviouspage}/>
                <span>{props.currentpage} / {props.totalpage}</span>
                <img src={nextpageicon} width='25px' className='Left' alt='nexticon' onClick={props.clickednextpage}/>
            </div>
            <hr className='Hr'/>
        </div >
    )
}

export default PageBar