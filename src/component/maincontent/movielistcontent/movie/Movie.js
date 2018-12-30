import React from 'react'

import './Movie.css'
import App from '../../../../App';

const Movie = (props) => {
    const photoLink = 'https://image.tmdb.org/t/p/w500'

    let ifLikedMovie = 'Like'

    if(App.likedMovies.has(props.movie['id'])) {
        ifLikedMovie = 'Liked'
    } 

    return (
        <div className='row Movie'>

            {/* Image & Buttons */}
            <div className="col-sm-12 col-md-4 offset-md-1">
                <div className="row">
                    <div className='col-sm-12 col-md-12'>
                        <img src={photoLink.concat(props.movie['poster_path'])} alt='photo' width="100%" style={{ maxWidth: '300px' }} className="rounded mx-auto d-block" />
                    </div>
                    <div className='col-sm-12 col-md-12 d-flex justify-content-center'>
                        <button type="button" className="btn btn-danger Operation ButtomFont" onClick={()=> props.toggleLikedMoviesHandler(props.movie['id'], props.res)}>{ifLikedMovie}</button>
                        <button type="button" className="btn btn-secondary Operation ButtomFont" onClick={() => { App.blockedMovies.push(props.title) }}>Block</button>
                    </div>
                </div>
            </div>

            {/* Title & Description */}
            <div className="col-sm-12 col-md-4 d-flex align-items-center">
                <div className="row">
                    <div className='col-12 text-center Title'>{props.movie['title']}</div>
                    <div className='col-12 text-center Font'>Release Date: {props.movie['release_date']}</div>
                    <div className='col-12 text-center'>
                        <span className='Font'>Vote Count: {props.movie['vote_count']} | </span>
                        <span className='Font'>Average Score: {props.movie['vote_average']}/10</span>
                    </div>
                    <div className='col-12 text-center Font'>{props.movie['overview']}</div>
                </div>
            </div>
        </div>
    )
}

export default Movie