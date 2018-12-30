import React from 'react'
import { Route, Switch } from 'react-router-dom'

import HomePageContent from '../../component/maincontent/homepagecontent/HomePageContent'
import MovieListContent from '../../component/maincontent/movielistcontent/Movielistcontent'
import MovieListOfLikedContent from '../../component/maincontent/movieoflikedlistcontent/MovieOfLikedListContent'
import MovieListOfBlockedContent from '../../component/maincontent/movieofblockedlistcontent/MovieOfBlockedListContent'


const MainContentBlock = () => {
    
    return (
        <Switch>
            <Route path='/homepage' exact component={HomePageContent} />
            <Route path='/movielist' exact component={MovieListContent} />
            <Route path='/movielistofliked' exact component={MovieListOfLikedContent} />
            <Route path='/movielistofblocked' exact component={MovieListOfBlockedContent} />
        </Switch>
    )
}

export default MainContentBlock