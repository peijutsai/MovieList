import React, { Component } from 'react'

import App from '../../../App'
import BlockedMovie from './blockedmovie/BlockedMovie'

class MovieOfBlockedListContent extends Component {

    removeHandler = (id) => {
        if (App.blockedMovies.has(id)) {
            App.blockedMovies.delete(id)
        }
        this.setState({})
    }

    addToLikedList = (id, movie) => {
        if (!App.likedMovies.has(id)) {
            App.likedMovies.set(id, movie)
            App.blockedMovies.delete(id)
        }

        this.setState({})
    }

    render() {
        const style = {
            fontFamily: 'Charm, cursive',
            fontSize: '20px',
            textAlign: 'center'
        }

        let blockedmovie = []

        App.blockedMovies.forEach((value, key) => {
            blockedmovie.push(
                <BlockedMovie
                    key={key}
                    movie={value}
                    remove={this.removeHandler}
                    addToLikedList={this.addToLikedList} />
            )
        })

        return (
            <div>
                <div style={style}>Movie List of Blocked</div>
                <div className='row'>{blockedmovie}</div>
            </div>
        )
    }
}

export default MovieOfBlockedListContent