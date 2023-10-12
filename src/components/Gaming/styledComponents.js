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

export const VideoCardListContainer = styled.ul`
  list-style-type: none;
  padding: 0px;
  width: 100%;
  margin: 0px;
  display: flex;
  flex-direction: row;
  align-items: flex-start;
  justify-content: space-around;
  flex-wrap: wrap;
  margin-top: 20px;

  @media (min-width: 768px) {
    padding-right: 5px;
  }
`
