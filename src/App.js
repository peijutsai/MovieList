import React, { Component } from 'react'

import Layout from './ui/layout/Layout'

class App extends Component {
  render() {
    return (
      <Layout />
    );
  }
}

App.likedMovies = new Map()
App.likedMovies.set(297802, {
  "vote_count": 996,
  "id": 297802,
  "video": false,
  "vote_average": 7,
  "title": "Aquaman",
  "popularity": 606.078,
  "poster_path": "\/i2dF9UxOeb77CAJrOflj0RpqJRF.jpg",
  "original_language": "en",
  "original_title": "Aquaman",
  "genre_ids": [
    28,
    14,
    878,
    12
  ],
  "backdrop_path": "\/5A2bMlLfJrAfX9bqAibOL2gCruF.jpg",
  "adult": false,
  "overview": "Arthur Curry learns that he is the heir to the underwater kingdom of Atlantis, and must step forward to lead his people and be a hero to the world.",
  "release_date": "2018-12-07"
})

App.likedMovies.set(424783, {
  "vote_count": 249,
  "id": 424783,
  "video": false,
  "vote_average": 6.5,
  "title": "Bumblebee",
  "popularity": 373.061,
  "poster_path": "\/fw02ONlDhrYjTSZV8XO6hhU3ds3.jpg",
  "original_language": "en",
  "original_title": "Bumblebee",
  "genre_ids": [
    28,
    12,
    878
  ],
  "backdrop_path": "\/8bZ7guF94ZyCzi7MLHzXz6E5Lv8.jpg",
  "adult": false,
  "overview": "On the run in the year 1987, Bumblebee finds refuge in a junkyard in a small Californian beach town. Charlie, on the cusp of turning 18 and trying to find her place in the world, discovers Bumblebee, battle-scarred and broken.  When Charlie revives him, she quickly learns this is no ordinary yellow VW bug.",
  "release_date": "2018-12-15"
})

App.likedMovies.set(405774, {
  "vote_count": 947,
  "id": 405774,
  "video": false,
  "vote_average": 7.5,
  "title": "Bird Box",
  "popularity": 281.594,
  "poster_path": "\/rGfGfgL2pEPCfhIvqHXieXFn7gp.jpg",
  "original_language": "en",
  "original_title": "Bird Box",
  "genre_ids": [
    53,
    18,
    878
  ],
  "backdrop_path": "\/z6m7s4w4Erxnr5k2jc1TZR1AMva.jpg",
  "adult": false,
  "overview": "When a mysterious force decimates the world’s population, only one thing is certain: if you see it, you take your life. Facing the unknown, Malorie finds love, hope and a new beginning only for it to unravel. Now she must flee with her two children down a treacherous river to the one place left that may offer sanctuary. But to survive, they'll have to undertake the perilous two-day journey blindfolded.",
  "release_date": "2018-11-12"
})

App.likedMovies.set(324857, {
  "vote_count": 441,
  "id": 324857,
  "video": false,
  "vote_average": 8.5,
  "title": "Spider-Man: Into the Spider-Verse",
  "popularity": 222.187,
  "poster_path": "\/laMM4lpQSh5z6KIBPwWogkjzBVQ.jpg",
  "original_language": "en",
  "original_title": "Spider-Man: Into the Spider-Verse",
  "genre_ids": [
    28,
    12,
    16,
    878,
    35
  ],
  "backdrop_path": "\/e7CE5vx4KqUuz0peKdHRVZB0Pn8.jpg",
  "adult": false,
  "overview": "Miles Morales is juggling his life between being a high school student and being Spider-Man. However, when Wilson \"Kingpin\" Fisk uses a super collider, another Spider-Man from another dimension, Peter Parker, accidentally winds up in Miles' dimension. As Peter trains Miles to become a better Spider-Man, they are soon joined by four other Spider-Men from across the \"Spider-Verse\". As all these clashing dimensions start to tear Brooklyn apart, Miles must help the others stop Fisk and return everyone to their own dimensions.",
  "release_date": "2018-12-07"
})

App.likedMovies.set(400650, {
  "vote_count": 213,
  "id": 400650,
  "video": false,
  "vote_average": 7.2,
  "title": "Mary Poppins Returns",
  "popularity": 203.497,
  "poster_path": "\/uTVGku4LibMGyKgQvjBtv3OYfAX.jpg",
  "original_language": "en",
  "original_title": "Mary Poppins Returns",
  "genre_ids": [
    14,
    10402,
    10751
  ],
  "backdrop_path": "\/3pvIMjJps4uJr5NOmolY0MXvTYD.jpg",
  "adult": false,
  "overview": "In Depression-era London, a now-grown Jane and Michael Banks, along with Michael's three children, are visited by the enigmatic Mary Poppins following a personal loss. Through her unique magical skills, and with the aid of her friend Jack, she helps the family rediscover the joy and wonder missing in their lives.",
  "release_date": "2018-12-19"
})

App.likedMovies.set(338952, {
  "vote_count": 2462,
  "id": 338952,
  "video": false,
  "vote_average": 7,
  "title": "Fantastic Beasts: The Crimes of Grindelwald",
  "popularity": 193.76,
  "poster_path": "\/kQKcbJ9uYkTQql2R8L4jTUz7l90.jpg",
  "original_language": "en",
  "original_title": "Fantastic Beasts: The Crimes of Grindelwald",
  "genre_ids": [
    10751,
    14,
    12
  ],
  "backdrop_path": "\/wDN3FIcQQ1HI7mz1OOKYHSQtaiE.jpg",
  "adult": false,
  "overview": "Gellert Grindelwald has escaped imprisonment and has begun gathering followers to his cause—elevating wizards above all non-magical beings. The only one capable of putting a stop to him is the wizard he once called his closest friend, Albus Dumbledore. However, Dumbledore will need to seek help from the wizard who had thwarted Grindelwald once before, his former student Newt Scamander, who agrees to help, unaware of the dangers that lie ahead. Lines are drawn as love and loyalty are tested, even among the truest friends and family, in an increasingly divided wizarding world.",
  "release_date": "2018-11-14"
})

App.likedMovies.set(335983, {
  "vote_count": 3611,
  "id": 335983,
  "video": false,
  "vote_average": 6.5,
  "title": "Venom",
  "popularity": 190.676,
  "poster_path": "\/2uNW4WbgBXL25BAbXGLnLqX71Sw.jpg",
  "original_language": "en",
  "original_title": "Venom",
  "genre_ids": [
    878
  ],
  "backdrop_path": "\/VuukZLgaCrho2Ar8Scl9HtV3yD.jpg",
  "adult": false,
  "overview": "Investigative journalist Eddie Brock attempts a comeback following a scandal, but accidentally becomes the host of an alien symbiote that gives him a violent super alter-ego: Venom. Soon, he must rely on his newfound powers to protect the world from a shadowy organization looking for a symbiote of their own.",
  "release_date": "2018-10-03"
})


App.blockedMovies = new Map()

export default App;
