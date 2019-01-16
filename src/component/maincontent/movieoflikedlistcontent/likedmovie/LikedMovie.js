import React from 'react'

import './LikedMovie.scss'

import trashicon from '../../../../assests/trashcan.png'
import stopicon from '../../../../assests/stop.png'
import doticon from '../../../../assests/dot.png'


const LikedMovie = (props) => {

    return (
        <div className="col-sm-6 col-md-3 MovieWrapper" >
            <div className='LikedMovie'>
                <img src={props.movie['poster_path']} alt='likedphoto' width="100%" style={{ maxWidth: '250px' }} />
            </div>

            <div className='Icon'>
                <span>
                    <img src={trashicon} alt='trashicon' onClick={() => props.remove(props.movie['id'])} />
                </span>
                <span>
                    <img src={stopicon} alt='stopicon' onClick={() => props.addToBlockedList(props.movie['id'], props.movie)} />
                </span>
                <span>
                    <img src={doticon} alt='doticon' />
                </span>
            </div>
        </div>
    )
}

export default LikedMovie