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

export const NotFoundMaincontainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  width: 100%;
`

export const NotHeading = styled.h1`
  font-family: 'Roboto';
  font-size: 27px;
`

export const NotFoundPara = styled.h1`
  font-family: 'Roboto';
  font-size: 15px;
  margin: 0px;
  text-align: center;
`

export const NotFoundImg = styled.img`
  width: 40%;
`
