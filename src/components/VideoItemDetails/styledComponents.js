import styled from 'styled-components'

export const TrendingMainContainer = styled.div`
  width: 100vw;
  height: 100vh;
  background-color: ${props => (props.isDark ? '#0f0f0f' : '#f9f9f9')};
  color: ${props => (props.isDark ? 'white' : 'black')};
`

export const TrendingHeaderSidebarContainer = styled.div`
  display: flex;
  width: 100vw;
  height: 94%;
`

export const VideoItemCardContainer = styled.div`
  width: 100%;
  height: 100%;

  @media (min-width: 768px) {
    padding-left: 50px;
    padding-right: 50px;
  }
`

export const VideoItemDetailsMainContainer = styled.div`
  width: 100%;
  overflow-y: scroll;
`

export const ReactPlayerContainer = styled.div`
  height: 30vh;
  @media (min-width: 768px) {
    height: 60vh;
  }
`

export const LoaderContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 30vh;
  width: 100vw;
`

export const VideoDetailsContainer = styled.div`
  width: 100%;
  padding: 10px;
`

export const VideoTitle = styled.h1`
  font-size: 15px;
  font-family: 'Roboto';
  font-weight: 500;
`

export const VideoViewCount = styled.p`
  font-size: 14px;
  font-family: 'Roboto';
  margin: 0px;
`

export const VideoCountLikeMaincontainer = styled.div`
  width: 100%;

  @media (min-width: 768px) {
    display: flex;
    align-items: center;
    justify-content: space-between;
  }
`

export const ViewCountPublishedContainer = styled.div`
  display: flex;
  align-items: center;
  width: 40%;

  @media (min-width: 768px) {
    width: 15%;
  }
`

export const HrLine = styled.hr`
  height: ${props => (props.width === 'full' ? '1px' : '4px')};
  width: ${props => (props.width === 'full' ? '100%' : '4px')};
  background-color: ${props => (props.isDark ? '#f9f9f9' : '#0f0f0f')};
  border: 0px;
  border-radius: 2px;
`

export const LikeSaveVideosContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  width: 60%;

  @media (min-width: 768px) {
    width: 23%;
  }
`

const handleColor = color => {
  switch (color) {
    case true:
      return 'white'
    case false:
      return 'black'

    default:
      return ''
  }
}

export const LikeContainer = styled.button`
  display: flex;
  align-items: center;
  outline: none;
  border: 0px;
  background-color: transparent;
  font-size: 15px;
  color: ${props => (props.isLike ? '#2563eb' : handleColor(props.isDark))};
  cursor: pointer;
`

export const DislikeContainer = styled.div`
  display: flex;
  align-items: center;
  font-size: 15px;
  outline: none;
  background-color: transparent;
  color: ${props => (props.isDisliked ? '#2563eb' : handleColor(props.isDark))};
  cursor: pointer;
`

export const SaveContainer = styled.div`
  display: flex;
  align-items: center;
  font-size: 15px;
  outline: none;
  border: 0px;
  background-color: transparent;

  color: ${props => (props.isSaved ? '#2563eb' : 'black')};
  cursor: pointer;
`

export const LikeText = styled.p`
  margin-left: 5px;
`

export const ProfileChannelNameContainer = styled.div`
  display: flex;
  width: 100%;
  margin-top: 10px;
`

export const ChannelImg = styled.img`
  height: 50px;
  width: 50px;
`
export const ChannelNameSubsContainer = styled.div`
  margin-left: 12px;
`

export const ChannelNamePara = styled.h1`
  font-size: 14px;
  font-family: 'Roboto';
`

export const SubsPara = styled.p`
  font-size: 14px;
  font-family: 'Roboto';
`

export const ApiFailureContainer = styled.div`
  margin-top: 20px;
  width: 100%;
  height: 50%;
  text-align: center;
  color: ${props => (props.isDark ? 'white' : 'black')};
`

export const FailureImg = styled.img`
  width: 40%;
`

export const FailureHeading = styled.h1`
  margin: 0px;
`

export const FailurePara = styled.p`
  margin: 0px;
`

export const RetryButton = styled.button`
  border: 0px;
  outline: none;
  cursor: pointer;
  width: 100px;
  padding: 10px;
  font-size: 15px;
  border-radius: 5px;
  margin-top: 5px;
  color: white;
  background-color: #4f46e5;
`
