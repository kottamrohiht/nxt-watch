import {Component} from 'react'

import {formatDistanceToNow} from 'date-fns'
import Cookies from 'js-cookie'
import Loader from 'react-loader-spinner'
import {BiSearch} from 'react-icons/bi'

import ReactContext from '../../context'

import VideoCard from '../VideoCard'

import {
  PrimeVideosContainer,
  SearchElement,
  SearchElementContainer,
  LoaderContainer,
  VideoCardListContainer,
  SearchButton,
  ApiFailureContainer,
  FailureImg,
  FailureHeading,
  FailurePara,
  RetryButton,
  NoVideosFoundContainer,
  NoVideosFoundImg,
  NoVideosFoundHeading,
  NoVideosFoundPara,
} from './styledComponents'

const apiStatusConstants = {
  initial: 'INITIAL',
  sucess: 'SUCCESS',
  failure: 'FAILURE',
  loading: 'LOADING',
}

class AllVideos extends Component {
  state = {
    apiStatus: apiStatusConstants.initial,
    totalItems: [],
    userInput: '',
  }

  componentDidMount() {
    this.getData()
  }

  getData = async () => {
    this.setState({
      apiStatus: apiStatusConstants.loading,
    })

    const {userInput} = this.state
    const jwtToken = Cookies.get('jwt_token')
    const options = {
      headers: {
        Authorization: `Bearer ${jwtToken}`,
      },
      method: 'GET',
    }
    const url = `https://apis.ccbp.in/videos/all?search=${userInput}`
    const response = await fetch(url, options)

    if (response.ok) {
      const itemsList = await response.json()
      const updatedList = itemsList.videos.map(each => ({
        channel: {
          name: each.channel.name,
          profileImageUrl: each.channel.profile_image_url,
        },
        id: each.id,
        publishedAt: formatDistanceToNow(new Date(each.published_at)),
        thumbnailUrl: each.thumbnail_url,
        title: each.title,
        viewCount: each.view_count,
      }))

      this.setState({
        totalItems: updatedList,
        apiStatus: apiStatusConstants.sucess,
      })
    } else {
      this.setState({
        apiStatus: apiStatusConstants.failure,
      })
    }
  }

  onChangeuserInput = event => {
    this.setState({
      userInput: event.target.value,
    })
  }

  onKeyDown = event => {
    if (event.key === 'Enter') {
      this.getData()
    }
  }

  onClickSearchButton = () => {
    this.getData()
  }

  onClickRetry = () => {
    this.getData()
  }

  renderLoadingView = () => (
    <LoaderContainer data-testid="loader">
      <Loader type="ThreeDots" color="#0b69ff" height="50" width="50" />
    </LoaderContainer>
  )

  renderSuccessView = () => {
    const {totalItems, userInput} = this.state
    const noVidoesFound =
      'https://assets.ccbp.in/frontend/react-js/nxt-watch-no-search-results-img.png'

    return (
      <ReactContext.Consumer>
        {value => {
          const {darkMode} = value
          return (
            <PrimeVideosContainer>
              <SearchElementContainer
                data-testid="searchButton"
                isDark={darkMode}
              >
                <SearchElement
                  id="searchElement"
                  type="search"
                  value={userInput}
                  placeholder="Search"
                  onChange={this.onChangeuserInput}
                  onKeyDown={this.onKeyDown}
                  isDark={darkMode}
                />
                <SearchButton
                  isDark={darkMode}
                  type="button"
                  onClick={this.onClickSearchButton}
                >
                  <BiSearch />
                </SearchButton>
              </SearchElementContainer>

              {totalItems.length === 0 ? (
                <NoVideosFoundContainer>
                  <NoVideosFoundImg src={noVidoesFound} alt="no videos" />
                  <NoVideosFoundHeading>
                    {' '}
                    No Serch results found{' '}
                  </NoVideosFoundHeading>
                  <NoVideosFoundPara>
                    {' '}
                    Try different key words or remove search filter{' '}
                  </NoVideosFoundPara>
                  <RetryButton onClick={this.onClickRetry} type="button">
                    {' '}
                    Retry{' '}
                  </RetryButton>
                </NoVideosFoundContainer>
              ) : (
                <VideoCardListContainer isDark={darkMode}>
                  {totalItems.map(each => (
                    <VideoCard key={each.id} item={each} />
                  ))}
                </VideoCardListContainer>
              )}
            </PrimeVideosContainer>
          )
        }}
      </ReactContext.Consumer>
    )
  }

  renderFailureView = () => (
    <ReactContext.Consumer>
      {value => {
        const {darkMode} = value
        const failureImg = darkMode
          ? 'https://assets.ccbp.in/frontend/react-js/nxt-watch-failure-view-dark-theme-img.png'
          : 'https://assets.ccbp.in/frontend/react-js/nxt-watch-failure-view-light-theme-img.png'

        return (
          <ApiFailureContainer isDark={darkMode}>
            <FailureImg src={failureImg} alt="fali img" />
            <FailureHeading> Oops! Something Went Wrong </FailureHeading>
            <FailurePara>
              {' '}
              We are having some trouble to complete your request. Please try
              again{' '}
            </FailurePara>
            <RetryButton onClick={this.onClickRetry} type="button">
              {' '}
              Retry{' '}
            </RetryButton>
          </ApiFailureContainer>
        )
      }}
    </ReactContext.Consumer>
  )

  render() {
    const {apiStatus} = this.state
    switch (apiStatus) {
      case apiStatusConstants.sucess:
        return this.renderSuccessView()
      case apiStatusConstants.loading:
        return this.renderLoadingView()

      case apiStatusConstants.failure:
        return this.renderFailureView()

      default:
        return null
    }
  }
}

export default AllVideos
