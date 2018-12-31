import React from 'react'

import './BlockedMovie.css'

import trashicon from '../../../../assests/trashcan.png'
import hearticon from '../../../../assests/hearticon.png'
import doticon from '../../../../assests/dot.png'

const BlockedMovie = (props) => {
    const photoLink = 'https://image.tmdb.org/t/p/w500'

    return (
        <div className="col-sm-6 col-md-3 BlockedMovieWrapper" >
            <div className='BlockedMovie'>
                <img src={photoLink.concat(props.movie['poster_path'])} alt='blockedPhoto' width="100%" style={{ maxWidth: '250px' }} />
            </div>

            <div className='BlockedIcon'>
                <span>
                    <img src={trashicon} alt='trachicon' onClick={() => { props.remove(props.movie['id']) }} />
                </span>
                <span>
                    <img src={hearticon} alt='hearticon' onClick={() => { props.addToLikedList(props.movie['id'], props.movie) }} />
                </span>
                <span>
                    <img src={doticon} alt='doticon' />
                </span>
            </div>
        </div>
    )
}

export default BlockedMovie