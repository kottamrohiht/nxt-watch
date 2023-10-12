//  import {Link} from 'react-router-dom'

import styled from 'styled-components'

export const TrendingMainContainer = styled.div`
  width: 100vw;
  height: 100vh;
  background-color: ${props => (props.isDark ? '#0f0f0f' : '#f9f9f9')};
`

export const TrendingHeaderSidebarContainer = styled.div`
  display: flex;
  width: 100vw;
  height: 94%;
`

export const TrendingSubContainer = styled.div`
  height: 100%;
`

export const LoaderContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 30vh;
  width: 100vw;
`

export const TrendingTitleContainer = styled.div`
  display: flex;
  align-items: center;
  height: 10%;
  width: 100%;
  padding: 10px;
  background-color: ${props => (props.isDark ? '' : '#cbd5e1')};
`

export const TrendingVideoCardContainer = styled.div`
  width: 100%;
  height: 100%;
  overflow-y: scroll;
`

export const TrendingLogoContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 10px;
  font-size: 30px;
  color: red;
  border-radius: 5px;
`

export const TrendingHeading = styled.p`
  font-size: 20px;
  font-weight: 700;
  font-family: 'Roboto';
  color: ${props => (props.isDark ? 'white' : 'black')};
`

export const SavedVideosMainContainer = styled.li`
  width: 100%;
  text-decoration: none;
  cursor: pointer;
`

export const SavedVideoThumbnail = styled.img`
  @media (min-width: 768px) {
    width: 30%;
  }
`
export const SavedVideoTitleContainer = styled.div``

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
  color: ${props => (props.isDark ? 'white' : 'black')};
`

export const SavedViewCountContainer = styled.div`
  display: flex;
  align-items: center;
`
export const HrLine = styled.hr``

export const SavedVideosListItems = styled.ul`
  list-style-type: none;
  width: 100%;
  padding: 0px;
  margin-bottom: 20px;

  @media (min-width: 768px) {
    display: flex;
    flex-direction: row;
    flex-wrap: wrap;
    margin-bottom: 10px;
  }
`

export const SavedVideosEmtyContainer = styled.div`
  width: 100%;
  height: 80%;
  text-align: center;
  background-color: ${props => (props.isDark ? 'black' : 'white')};
  color: ${props => (props.isDark ? 'white' : 'black')};
`

export const EmptyImg = styled.img`
  width: 40%;
`

export const NoSavedVidHeading = styled.h1``

export const NoSavedVidPara = styled.p`
  font-size: 15px;
`
