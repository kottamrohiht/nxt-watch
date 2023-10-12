import styled from 'styled-components'
import {Link} from 'react-router-dom'

export const VideoCardLinkElement = styled(Link)`
  text-decoration: none;
  width: 100%;
  cursor: pointer;
  margin-bottom: 10px;
  color: ${props => (props.isdark === 'ok' ? 'white' : 'black')};

  @media (min-width: 768px) {
    width: 30%;
  }
`

export const VideoCardMaincontainer = styled.li`
  padding: 0px;
  margin: 0px;
  width: 100%;
`
export const EachCardMaincontainer = styled.p``

export const ThumbnailImage = styled.img`
  width: 100%;

  @media (min-width: 768px) {
    border-radius: 5px;
  }
`

export const ProfileTitleContainer = styled.div`
  width: 100%;
  padding: 5px;
  background-color: transparent;
  margin-left: 15px;

  @media (min-width: 768px) {
  }
`

export const ProfileChannelCountContainer = styled.div`
  display: flex;
  align-items: center;
  width: 100%;
`

export const Profile = styled.img`
  width: 40px;
  height: 40px;
  margin-left: 10px;

  @media (min-width: 768px) {
    width: 30px;
    height: 30px;
  }
`

export const Tiltle = styled.p`
  font-size: 13px;
  margin: 0px;
  width: 95%;

  @media (min-width: 768px) {
    font-size: 13px;
  }
`

export const ChannelNameViewCountContainer = styled.div`
  display: flex;
  align-items: center;
  width: 70%;
  background-color: transparent;

  @media (min-width: 768px) {
    width: 90%;
  }
`

export const ChannelName = styled.p`
  font-size: 12px;
  font-weight: 500;
  font-family: 'Roboto';
`

export const HrLine = styled.hr``
