import React from 'react'

import './SortMovie.css'

import downarrow from '../../../../assests/down-arrow.png'
import uparrow from '../../../../assests/up-arrow.png'

const SortMovie = (props) => {
    return (
        <div className='SortBar'>
            <button type="button"
                className="btn btn-primary btn-sm"
                onClick={props.sortByTitle}>
                Title
                <img src={props.sortTitleStatus ? downarrow : uparrow} alt='arrow' />
            </button>
            
            <button
                type="button"
                className="btn btn-primary btn-sm"
                onClick={props.sortByVoteCount}>
                Vote Count
                <img src={props.sortVoteCountStatus ? downarrow : uparrow} alt='arrow' />
            </button>
            
            <button
                type="button"
                className="btn btn-primary btn-sm"
                onClick={props.sortByVoteAverage}>
                Vote Average
                <img src={props.sortVoteAverageStatus ? downarrow : uparrow} alt='arrow' />
            </button>
            
            <button
                type="button"
                className="btn btn-primary btn-sm"
                onClick={props.sortByReleaseDate}>
                Release Date
                <img src={props.sortDateStatus ? downarrow : uparrow} alt='arrow' />
            </button>
        </div>
    )
}

export default SortMovie