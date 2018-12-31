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
App.blockedMovies = new Map()

export default App;
