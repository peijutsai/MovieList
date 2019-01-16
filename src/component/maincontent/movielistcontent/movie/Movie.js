import React from 'react'

import './Movie.scss'

import App from '../../../../App';

import heart from '../../../../assests/heart_movielist.png'

const Movie = (props) => {

    let ifLikedMovie = 'Like'

    if (App.likedMovies.has(props.movie['id'])) {
        ifLikedMovie = 'Liked'
    }

    return (
        <div className='row Movie'>

            {/* Image & Buttons */}
            <div className="col-sm-12 col-md-4 offset-md-1">
                <div className="row">
                    <div className='col-sm-12 col-md-12'>
                        <img src={props.movie['poster_path']} alt='main' width="100%" style={{ maxWidth: '300px' }} className="rounded mx-auto d-block" />
                    </div>
                    <div className='col-sm-12 col-md-12 d-flex justify-content-center'>
                        <button
                            type="button"
                            className="btn btn-danger Operation ButtomFont"
                            onClick={() => props.toggleLikedMoviesHandler(props.movie['id'], props.movie)}>
                            {ifLikedMovie}
                        </button>

                        <button
                            type="button"
                            className="btn btn-secondary Operation ButtomFont"
                            onClick={() => { props.addToBlockedListHandler(props.movie['id'], props.movie) }}>
                            Block
                        </button>
                    </div>
                </div>
            </div>

            {/* Title & Description */}
            <div className="col-sm-12 col-md-4 d-flex align-items-center">
                <div className="row">
                    <div
                        className='col-12 text-center Title'>
                        <img src={heart} alt='hearticon' className='Heart'/>
                        {props.movie['title']}
                    </div>
                    <div
                        className='col-12 text-center Font'>
                        Release Date: {props.movie['release_date']}
                    </div>
                    <div className='col-12 text-center'>
                        <span className='Font'>Vote Count: {props.movie['vote_count']} | </span>
                        <span className='Font'>Average Score: {props.movie['vote_average']}/10</span>
                    </div>
                    <div className='col-12 text-center Font'>
                        {props.movie['overview']}
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Movie