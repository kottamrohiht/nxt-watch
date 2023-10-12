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
  justify-content: space-between;
  flex-wrap: wrap;
  margin-top: 20px;

  @media (min-width: 768px) {
    padding-right: 5px;
  }
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
