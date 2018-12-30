import React from 'react'

import './Movie.css'

const Movie = (props) => {

    return (
        <div className='row Movie'>

            {/* Image & Buttons */}
            <div className="col-sm-12 col-md-4 offset-md-1">
                <div className="row">
                    <div className='col-sm-12 col-md-12'>
                        <img src={props.photo} alt='photo' width="100%" style={{ maxWidth: '300px' }} className="rounded mx-auto d-block" />
                    </div>
                    <div className='col-sm-12 col-md-12 d-flex justify-content-center'>
                        <button type="button" className="btn btn-danger Operation ButtomFont">Like</button>
                        <button type="button" className="btn btn-secondary Operation ButtomFont">Block</button>
                    </div>
                </div>
            </div>

            {/* Title & Description */}
            <div className="col-sm-12 col-md-4 d-flex align-items-center">
                <div className="row">
                    <div className='col-12 text-center Title'>{props.title}</div>
                    <div className='col-12 text-center Font'>Release Date: {props.date}</div>
                    <div className='col-12 text-center'>
                        <span className='Font'>Vote Count: {props.voteCount} | </span>
                        <span className='Font'>Average Score: {props.averageScore}/10</span>
                    </div>
                    <div className='col-12 text-center Font'>{props.overview}</div>
                </div>
            </div>
        </div>
    )
}

export default Movie