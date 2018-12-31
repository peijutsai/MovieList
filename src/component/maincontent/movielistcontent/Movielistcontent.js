import React, { Component, Fragment } from 'react'

import axios from '../../../axios'

import App from '../../../App'
import Movie from '../movielistcontent/movie/Movie'
import PageBar from './pagebar/PageBar'
import Spinner from '../../../ui/spinner/Spinner'
import SortBar from './sortmovie/SortMovie'

class MovieListContent extends Component {

    constructor(props) {
        super(props)
        this.state = {
            data: [],
            currentPage: +this.props.match.params.id,
            totalPage: null,
            sortTitle: false,
            sortVoteCount: false,
            sortVoteAverage: false,
            sortDate: false
        }

        this.movieCahce = {}
    }

    // Call at the first time
    componentDidMount() {
        this.fetchDataHandler(+this.props.match.params.id)
    }

    // Call everytime when url has changed
    componentDidUpdate() {
        let page = +this.props.match.params.id

        if (this.state.currentPage !== page) {
            if (page in this.movieCahce) {
                let val = this.movieCahce[page]
                this.setState({
                    data: val,
                    currentPage: page
                })
            } else {
                this.fetchDataHandler(page)
            }
        }
    }

    fetchDataHandler = (page) => {
        axios.get('movie/popular?api_key=4bef8838c2fd078bd13d7127d8dedcd4&language=en-US&page=' + page)
            .then(Response => {
                this.movieCahce[page] = Response['data']['results']

                this.setState({
                    data: Response['data']['results'],
                    totalPage: Response['data']['total_pages'],
                    currentPage: page
                })
            })
    }

    toggleLikedMoviesHandler = (id, movie) => {
        if (App.likedMovies.has(id)) {
            App.likedMovies.delete(id)
        } else {
            App.likedMovies.set(id, movie)
        }
        this.setState({})
    }

    addToBlockedListHandler = (id, movie) => {
        if (!App.blockedMovies.has(id)) {
            App.blockedMovies.set(id, movie)
        }
        this.setState({})
    }

    sortByTitle = () => {
        if (this.state.sortTitle) {
            this.state.data.sort(function (movie1, movie2) {

                if (movie1['title'] > movie2['title']) {
                    return 1

                } else if (movie1['title'] < movie2['title']) {
                    return -1

                } else {
                    return 0
                }
            })

        } else {
            this.state.data.sort(function (movie1, movie2) {

                if (movie1['title'] > movie2['title']) {
                    return -1

                } else if (movie1['title'] < movie2['title']) {
                    return 1

                } else {
                    return 0
                }
            })
        }

        this.setState(prevState => ({
            sortTitle: !prevState.sortTitle,
            data: this.state.data
        }))
    }

    sortByVoteCount = () => {
        if (this.state.sortVoteCount) {
            this.state.data.sort(function (movie1, movie2) {

                if (movie1['vote_count'] > movie2['vote_count']) {
                    return 1

                } else if (movie1['vote_count'] < movie2['vote_count']) {
                    return -1

                } else {
                    return 0
                }
            })

        } else {
            this.state.data.sort(function (movie1, movie2) {

                if (movie1['vote_count'] > movie2['vote_count']) {
                    return -1

                } else if (movie1['vote_count'] < movie2['vote_count']) {
                    return 1

                } else {
                    return 0
                }
            })
        }

        this.setState(prevState => ({
            sortVoteCount: !prevState.sortVoteCount,
            data: this.state.data
        }))
    }

    sortByVoteAverage = () => {
        if (this.state.sortVoteAverage) {
            this.state.data.sort(function (movie1, movie2) {

                if (movie1['vote_average'] > movie2['vote_average']) {
                    return 1

                } else if (movie1['vote_average'] < movie2['vote_average']) {
                    return -1

                } else {
                    return 0
                }
            })

        } else {
            this.state.data.sort(function (movie1, movie2) {

                if (movie1['vote_average'] > movie2['vote_average']) {
                    return -1

                } else if (movie1['vote_average'] < movie2['vote_average']) {
                    return 1

                } else {
                    return 0
                }
            })
        }

        this.setState(prevState => ({
            sortVoteAverage: !prevState.sortVoteAverage,
            data: this.state.data
        }))

    }

    sortByReleaseDate = () => {
        if (this.state.sortDate) {
            this.state.data.sort(function (movie1, movie2) {

                if (movie1['title'] > movie2['title']) {
                    return 1

                } else if (movie1['title'] < movie2['title']) {
                    return -1

                } else {
                    return 0
                }
            })

        } else {
            this.state.data.sort(function (movie1, movie2) {

                if (movie1['release_date'] > movie2['release_date']) {
                    return -1

                } else if (movie1['release_date'] < movie2['release_date']) {
                    return 1

                } else {
                    return 0
                }
            })
        }

        this.setState(prevState => ({
            sortDate: !prevState.sortDate,
            data: this.state.data
        }))

    }

    render() {
        let movies = <Spinner />

        let filteredData = []
        if (this.state.data.length !== 0) {
            this.state.data.forEach(movie => {
                if (!App.blockedMovies.has(movie.id)) {
                    filteredData.push(movie)
                }
            })

            movies = filteredData.map(res => {

                return (
                    <Movie
                        key={res['id']}
                        movie={res}
                        toggleLikedMoviesHandler={this.toggleLikedMoviesHandler}
                        addToBlockedListHandler={this.addToBlockedListHandler}
                    />
                )
            })
        }

        return (
            <Fragment>
                <SortBar
                    sortTitleStatus={this.state.sortTitle}
                    sortVoteCountStatus={this.state.sortVoteCount}
                    sortVoteAverageStatus={this.state.sortVoteAverage}
                    sortDateStatus={this.state.sortDate}
                    sortByTitle={this.sortByTitle}
                    sortByVoteCount={this.sortByVoteCount}
                    sortByVoteAverage={this.sortByVoteAverage}
                    sortByReleaseDate={this.sortByReleaseDate} />

                <PageBar
                    currentpage={this.state.currentPage}
                    totalpage={this.state.totalPage} />

                <div>{movies}</div>

            </Fragment>


        )
    }
}

export default MovieListContent