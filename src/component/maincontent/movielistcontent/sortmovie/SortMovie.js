import React from 'react'

import './SortMovie.css'

const SortMovie = (props) => {
    return (
        <div className='SortBar'>
            <button type="button"
                className="btn btn-primary btn-sm"
                onClick={props.sortByTitle}>Title</button>
            <button
                type="button"
                className="btn btn-primary btn-sm"
                onClick={props.sortByVoteCount}>Vote Count</button>
            <button
                type="button"
                className="btn btn-primary btn-sm"
                onClick={props.sortByVoteAverage}>Vote Average</button>
            <button
                type="button"
                className="btn btn-primary btn-sm"
                onClick={props.sortByReleaseDate}>Release Date</button>
        </div>
    )
}

export default SortMovie