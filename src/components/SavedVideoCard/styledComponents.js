import {Link} from 'react-router-dom'

import styled from 'styled-components'

export const LoaderContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 30vh;
  width: 100vw;
`

export const LinkElementContainer = styled(Link)`
  display: inline-block;
  width: 100%;
  padding: 0px;
  text-decoration: none;
  cursor: pointer;
  margin-bottom: 10px;

  @media (min-width: 768px) {
    width: 31%;
    margin: 10px;
  }
`

export const SavedVideosMainContainer = styled.li`
  width: 100%;
`

export const SavedVideoThumbnail = styled.img`
  width: 100%;
`
export const SavedVideoTitleContainer = styled.div`
  width: 100%;
`

export const SavedTitle = styled.h1`
  font-size: 15px;
  font-weight: 700;
  font-family: 'Roboto';
  color: ${props => (props.isDark ? 'white' : 'black')};
`

export const SavedName = styled.h1`
  font-size: 13px;
  font-weight: 500;
  font-family: 'Roboto';
  margin: 0px;
`

export const SavedViewCountContainer = styled.div`
  display: flex;
  align-items: center;
  width: 90%;
  color: ${props => (props.isDark ? 'white' : 'black')};
`
export const HrLine = styled.hr``

export const SavedChannelLogoContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: flex-start;
  padding: 5px;
  width: 100%;
`

export const SavedChannelLogo = styled.img`
  width: 40px;
  margin-right: 10px;

  @media (min-width: 568px) {
    display: none;
  }
`
