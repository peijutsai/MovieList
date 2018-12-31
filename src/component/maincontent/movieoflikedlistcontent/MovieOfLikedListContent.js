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

    addToBlockedList = (id, movie) => {
        if (!App.blockedMovies.has(id)) {
            App.blockedMovies.set(id, movie)
            App.likedMovies.delete(id)
        }
        this.setState({})
    }

    render() {
        const style = {
            fontFamily: 'Charm, cursive',
            fontSize: '20px',
            textAlign: 'center'
        }
        let likedMovie = []

        App.likedMovies.forEach((value, key) => {
            likedMovie.push(
                <LikedMovie
                    key={key}
                    movie={value}
                    remove={this.removeHandler}
                    addToBlockedList={this.addToBlockedList} />
            )
        })

        return (
            <div>
                <div style={style}>Movie List of Liked</div>
                <div className="row">{likedMovie}</div>
            </div>
        )
    }
}

export default MovieOflikedListContent