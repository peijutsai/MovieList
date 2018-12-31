import React, { Component } from 'react'

import App from '../../../App';
import LikedMovie from './likedmovie/LikedMovie'

class MovieOflikedListContent extends Component {

    removeHandler = (id) => {
        if (App.likedMovies.has(id)) {
            App.likedMovies.delete(id)
        }
        this.setState({})

    }

    render() {
        let likedMovie = []
        App.likedMovies.forEach((value, key) => {
            likedMovie.push(<LikedMovie movie={value} key={key}  remove={this.removeHandler}/>)
        })

        return (
            <div>
                <div className='Title'>Movie List of Liked</div>
                <div className="row">{likedMovie}</div>
            </div>
        )
    }
}

export default MovieOflikedListContent