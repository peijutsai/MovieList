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
                <img src={props.sortTitleStatus ? uparrow : downarrow} alt='arrow' />
            </button>
            
            <button
                type="button"
                className="btn btn-primary btn-sm"
                onClick={props.sortByVoteCount}>
                Vote Count
                <img src={props.sortVoteCountStatus ? uparrow : downarrow} alt='arrow' />
            </button>
            
            <button
                type="button"
                className="btn btn-primary btn-sm"
                onClick={props.sortByVoteAverage}>
                Vote Average
                <img src={props.sortVoteAverageStatus ? uparrow : downarrow} alt='arrow' />
            </button>
            
            <button
                type="button"
                className="btn btn-primary btn-sm"
                onClick={props.sortByReleaseDate}>
                Release Date
                <img src={props.sortDateStatus ? uparrow : downarrow} alt='arrow' />
            </button>
        </div>
    )
}

export default SortMovie