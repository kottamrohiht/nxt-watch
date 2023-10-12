import {Component} from 'react'

import {HiFire} from 'react-icons/hi'

import ReactContext from '../../context'

import Header from '../Header'
import Sidebar from '../Sidebar'
import SavedVideoCard from '../SavedVideoCard'

import {
  TrendingMainContainer,
  TrendingHeaderSidebarContainer,
  TrendingTitleContainer,
  TrendingVideoCardContainer,
  TrendingLogoContainer,
  TrendingHeading,
  SavedVideosListItems,
  SavedVideosEmtyContainer,
  EmptyImg,
  NoSavedVidHeading,
  NoSavedVidPara,
} from './styledComponents'

class SavedVideos extends Component {
  renderEmptyView = () => (
    <ReactContext.Consumer>
      {value => {
        const {darkMode} = value
        const emtyImg =
          'https://assets.ccbp.in/frontend/react-js/nxt-watch-no-saved-videos-img.png'

        return (
          <SavedVideosEmtyContainer isDark={darkMode}>
            <EmptyImg src={emtyImg} alt="no saved videos" />
            <NoSavedVidHeading> No saved videos found </NoSavedVidHeading>
            <NoSavedVidPara>
              {' '}
              You can see your videos while watching them{' '}
            </NoSavedVidPara>
          </SavedVideosEmtyContainer>
        )
      }}
    </ReactContext.Consumer>
  )

  render() {
    return (
      <ReactContext.Consumer>
        {value => {
          const {darkMode, savedVideos} = value

          return (
            <TrendingMainContainer data-testid="savedVideos" isDark={darkMode}>
              <Header />
              <TrendingHeaderSidebarContainer>
                <Sidebar />

                <TrendingVideoCardContainer>
                  <TrendingTitleContainer
                    data-testid="banner"
                    isDark={darkMode}
                  >
                    <TrendingLogoContainer>
                      <HiFire />
                    </TrendingLogoContainer>
                    <TrendingHeading isDark={darkMode}>
                      Saved Videos
                    </TrendingHeading>
                  </TrendingTitleContainer>

                  {savedVideos.length < 1 ? (
                    this.renderEmptyView()
                  ) : (
                    <SavedVideosListItems>
                      {savedVideos.map(each => (
                        <SavedVideoCard key={each.id} video={each} />
                      ))}
                    </SavedVideosListItems>
                  )}
                </TrendingVideoCardContainer>
              </TrendingHeaderSidebarContainer>
            </TrendingMainContainer>
          )
        }}
      </ReactContext.Consumer>
    )
  }
}

export default SavedVideos
