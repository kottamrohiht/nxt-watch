import {Component} from 'react'
import Loader from 'react-loader-spinner'
import {formatDistanceToNow} from 'date-fns'

import {BiLike, BiDislike} from 'react-icons/bi'
import {MdPlaylistAdd, MdCheckCircle} from 'react-icons/md'

import ReactPlayer from 'react-player'

import Cookies from 'js-cookie'
import Header from '../Header'
import Sidebar from '../Sidebar'

import ReactContext from '../../context'

import {
  TrendingMainContainer,
  TrendingHeaderSidebarContainer,
  VideoItemCardContainer,
  VideoItemDetailsMainContainer,
  ReactPlayerContainer,
  LoaderContainer,
  VideoDetailsContainer,
  VideoTitle,
  VideoViewCount,
  VideoCountLikeMaincontainer,
  ViewCountPublishedContainer,
  HrLine,
  LikeSaveVideosContainer,
  LikeContainer,
  DislikeContainer,
  SaveContainer,
  LikeText,
  ProfileChannelNameContainer,
  ChannelImg,
  ChannelNameSubsContainer,
  ChannelNamePara,
  SubsPara,
  ApiFailureContainer,
  FailureImg,
  FailureHeading,
  FailurePara,
  RetryButton,
} from './styledComponents'

const apiStatusConstants = {
  initial: 'INITIAL',
  sucess: 'SUCCESS',
  failure: 'FAILURE',
  loading: 'LOADING',
}

class VideoItemDetails extends Component {
  state = {
    apiStatus: apiStatusConstants.initial,
    videoData: {},
    isLiked: false,
    isDisliked: false,
  }

  componentDidMount() {
    this.getData()
  }

  getData = async () => {
    this.setState({
      apiStatus: apiStatusConstants.loading,
    })

    const {match} = this.props
    const {params} = match
    const {id} = params
    const jwtToken = Cookies.get('jwt_token')
    const apiUrl = `https://apis.ccbp.in/videos/${id}`

    const options = {
      headers: {
        Authorization: `Bearer ${jwtToken}`,
      },
      method: 'GET',
    }

    const response = await fetch(apiUrl, options)

    if (response.ok) {
      const data = await response.json()
      const resObj = data.video_details
      const updatedData = {
        channel: {
          name: resObj.channel.name,
          ProfileImageUrl: resObj.channel.profile_image_url,
          SubscriberCount: resObj.channel.subscriber_count,
        },
        description: resObj.description,
        id: resObj.id,
        publishedAt: formatDistanceToNow(new Date(resObj.published_at)),
        ThumbnailUrl: resObj.thumbnail_url,
        title: resObj.title,
        VideoUrl: resObj.video_url,
        ViewCount: resObj.view_count,
      }

      this.setState({
        videoData: updatedData,
        apiStatus: apiStatusConstants.sucess,
      })
    } else {
      this.setState({
        apiStatus: apiStatusConstants.failure,
      })
    }
  }

  onClickRetry = () => {
    this.getData()
  }

  toggleIsliked = () => {
    this.setState(prevState => ({
      isLiked: !prevState.isLiked,
      isDisliked: false,
    }))
  }

  toggleDisliked = () => {
    this.setState(prevState => ({
      isDisliked: !prevState.isDisliked,
      isLiked: false,
    }))
  }

  renderLoadingView = () => (
    <LoaderContainer data-testid="loader">
      <Loader type="ThreeDots" color="#0b69ff" height="50" width="50" />
    </LoaderContainer>
  )

  renderSuccessView = () => {
    const {videoData, isLiked, isDisliked} = this.state
    const {title, ViewCount, publishedAt, VideoUrl, description} = videoData
    const {channel} = videoData
    const {name, ProfileImageUrl, SubscriberCount} = channel

    return (
      <ReactContext.Consumer>
        {value => {
          const {darkMode, updateSavedVideos, savedVideos} = value
          const playing = true
          const res = savedVideos.filter(each => each.id === videoData.id)
          const isSaved = res.length !== 0

          const onClickSaved = () => {
            updateSavedVideos(videoData)
          }

          return (
            <VideoItemDetailsMainContainer
              data-testid="videoItemDetails"
              isDark={darkMode}
            >
              <ReactPlayerContainer>
                <ReactPlayer
                  url={VideoUrl}
                  width="100%"
                  height="100%"
                  controls={playing}
                />
              </ReactPlayerContainer>

              <VideoDetailsContainer isDark={darkMode}>
                <VideoTitle>{title}</VideoTitle>
                <VideoCountLikeMaincontainer>
                  <ViewCountPublishedContainer>
                    <VideoViewCount> {ViewCount} </VideoViewCount>
                    <HrLine />
                    <VideoViewCount> {publishedAt} </VideoViewCount>
                  </ViewCountPublishedContainer>

                  <LikeSaveVideosContainer>
                    <LikeContainer
                      onClick={this.toggleIsliked}
                      isLike={isLiked}
                      isDark={darkMode}
                    >
                      <BiLike />
                      <LikeText> Like </LikeText>
                    </LikeContainer>

                    <DislikeContainer
                      onClick={this.toggleDisliked}
                      isDisliked={isDisliked}
                      isDark={darkMode}
                    >
                      <BiDislike />
                      <LikeText> Dislike </LikeText>
                    </DislikeContainer>

                    <SaveContainer
                      onClick={onClickSaved}
                      isLike={isLiked}
                      isDark={darkMode}
                      isSaved={isSaved}
                    >
                      {isSaved ? <MdCheckCircle /> : <MdPlaylistAdd />}
                      <LikeText> Save </LikeText>
                    </SaveContainer>
                  </LikeSaveVideosContainer>
                </VideoCountLikeMaincontainer>
                <HrLine width="full" isDark={darkMode} />
                <ProfileChannelNameContainer>
                  <ChannelImg src={ProfileImageUrl} alt="website logo" />
                  <ChannelNameSubsContainer>
                    <ChannelNamePara> {name} </ChannelNamePara>
                    <SubsPara> {SubscriberCount} </SubsPara>
                    <SubsPara> {description} </SubsPara>
                  </ChannelNameSubsContainer>
                </ProfileChannelNameContainer>
              </VideoDetailsContainer>
            </VideoItemDetailsMainContainer>
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
            <FailureImg src={failureImg} alt="failure view" />
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

  renderApistatusViews = () => {
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

  render() {
    return (
      <ReactContext.Consumer>
        {value => {
          const {darkMode} = value

          return (
            <TrendingMainContainer
              data-testid="videoItemDetails"
              isDark={darkMode}
            >
              <Header />
              <TrendingHeaderSidebarContainer>
                <Sidebar />
                <VideoItemCardContainer data-testid="videoItemDetails">
                  {this.renderApistatusViews()}
                </VideoItemCardContainer>
              </TrendingHeaderSidebarContainer>
            </TrendingMainContainer>
          )
        }}
      </ReactContext.Consumer>
    )
  }
}

export default VideoItemDetails
