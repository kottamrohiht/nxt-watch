import ReactContext from '../../context'

import {
  LinkElementContainer,
  SavedVideosMainContainer,
  SavedVideoThumbnail,
  SavedVideoTitleContainer,
  SavedTitle,
  SavedName,
  HrLine,
  SavedViewCountContainer,
  SavedChannelLogoContainer,
  SavedChannelLogo,
} from './styledComponents'

const SavedVideoCard = props => {
  const {video} = props
  const {channel} = video
  const {name, ProfileImageUrl} = channel
  const {ThumbnailUrl, title, ViewCount, publishedAt, id} = video
  return (
    <ReactContext.Consumer>
      {value => {
        const {darkMode} = value

        return (
          <LinkElementContainer to={`/videos/${id}`}>
            <SavedVideosMainContainer>
              <SavedVideoThumbnail src={ThumbnailUrl} alt="ThumbnailUrl" />
              <SavedChannelLogoContainer>
                <SavedChannelLogo src={ProfileImageUrl} alt="channel-logo" />
                <SavedVideoTitleContainer>
                  <SavedTitle isDark={darkMode}> {title} </SavedTitle>

                  <SavedViewCountContainer isDark={darkMode}>
                    <SavedName> {name} </SavedName>
                    <HrLine />
                    <SavedName> {ViewCount} Views </SavedName>
                    <HrLine />
                    <SavedName> {publishedAt} </SavedName>
                  </SavedViewCountContainer>
                </SavedVideoTitleContainer>
              </SavedChannelLogoContainer>
            </SavedVideosMainContainer>
          </LinkElementContainer>
        )
      }}
    </ReactContext.Consumer>
  )
}

export default SavedVideoCard
