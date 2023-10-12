import ReactContext from '../../context'

import {
  VideoCardMaincontainer,
  ThumbnailImage,
  VideoCardLinkElement,
  ProfileTitleContainer,
  ProfileChannelCountContainer,
  Profile,
  Tiltle,
  ChannelNameViewCountContainer,
  ChannelName,
  HrLine,
} from './styledComponents'

const VideoCard = props => {
  const {item} = props
  const {id, thumbnailUrl, title, viewCount, publishedAt} = item
  const {channel} = item
  const {profileImageUrl, name} = channel

  return (
    <ReactContext.Consumer>
      {value => {
        const {darkMode} = value
        const darkTheme = darkMode ? 'ok' : 'no'

        return (
          <VideoCardLinkElement isdark={darkTheme} to={`/videos/${id}`}>
            <VideoCardMaincontainer>
              <ThumbnailImage src={thumbnailUrl} alt="video thumbnail" />

              <ProfileChannelCountContainer>
                <Profile src={profileImageUrl} alt="channel logo" />
                <ProfileTitleContainer>
                  <Tiltle> {title} </Tiltle>
                  <ChannelNameViewCountContainer>
                    <ChannelName> {name} </ChannelName>
                    <HrLine />
                    <ChannelName> {viewCount} Views </ChannelName>
                    <HrLine />
                    <ChannelName> {publishedAt} </ChannelName>
                  </ChannelNameViewCountContainer>
                </ProfileTitleContainer>
              </ProfileChannelCountContainer>
            </VideoCardMaincontainer>
          </VideoCardLinkElement>
        )
      }}
    </ReactContext.Consumer>
  )
}

export default VideoCard
