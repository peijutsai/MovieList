import React from 'react'

import './LikedMovie.css'

import trashicon from '../../../../assests/trashcan.png'
import stopicon from '../../../../assests/stop.png'
import doticon from '../../../../assests/dot.png'


const LikedMovie = (props) => {
    const photoLink = 'https://image.tmdb.org/t/p/w500'

    return (
        <div className="col-sm-6 col-md-3 MovieWrapper" >
            <div className='LikedMovie'>
                <img src={photoLink.concat(props.movie['poster_path'])} width="100%" style={{ maxWidth: '250px' }} />
            </div>
            
            <div className='Icon'>
                <span><img src={trashicon} onClick={() => props.remove(props.movie['id'])}/></span>
                <span><img src={stopicon} /></span>
                <span><img src={doticon} /></span>
            </div>
        </div>
    )
}

export default LikedMovie