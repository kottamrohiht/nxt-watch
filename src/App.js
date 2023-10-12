import {Component} from 'react'
import {Route, Switch} from 'react-router-dom'

import ReactContext from './context'

import ProtectedRoute from './components/ProtectedRoute'
import Login from './components/Login'
import Home from './components/Home'
import Trending from './components/Trending'
import SavedVideos from './components/SavedVideos'
import Gaming from './components/Gaming'
import VideoItemDetails from './components/VideoItemDetails'
import NotFound from './components/NotFound'

import './App.css'

class App extends Component {
  state = {
    darkMode: false,
    selectedOption: 'Home',
    savedVideos: [],
  }

  updateSavedVideos = videoObj => {
    const {savedVideos} = this.state
    const savedVideosLen = savedVideos.length

    if (savedVideosLen === 0) {
      this.setState({
        savedVideos: [videoObj],
      })
    } else {
      const updatedList = savedVideos.filter(each => each.id !== videoObj.id)

      this.setState({
        savedVideos: [...updatedList, videoObj],
      })
    }
  }

  toggleDarkMode = () => {
    this.setState(prevState => ({
      darkMode: !prevState.darkMode,
    }))
  }

  updateSelectedOptions = option => {
    this.setState({
      selectedOption: option,
    })
  }

  render() {
    const {darkMode, selectedOption, savedVideos} = this.state

    return (
      <ReactContext.Provider
        value={{
          darkMode,
          selectedOption,
          savedVideos,
          updateSavedVideos: this.updateSavedVideos,
          updateSelectedOptions: this.updateSelectedOptions,
          toggleDarkMode: this.toggleDarkMode,
        }}
      >
        <Switch>
          <Route exact path="/login" component={Login} />
          <ProtectedRoute exact path="/" component={Home} />
          <ProtectedRoute exact path="/trending" component={Trending} />
          <ProtectedRoute exact path="/gaming" component={Gaming} />
          <ProtectedRoute exact path="/saved-videos" component={SavedVideos} />
          <ProtectedRoute
            exact
            path="/videos/:id"
            component={VideoItemDetails}
          />
          <ProtectedRoute exact path="/not-found" component={NotFound} />
          <Route component={NotFound} />
        </Switch>
      </ReactContext.Provider>
    )
  }
}

export default App
