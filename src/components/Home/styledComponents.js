import styled from 'styled-components'

export const HomeMaincontainer = styled.div`
  height: 100vh;
  width: 100vw;
  margin: 0px;
  background-color: ${props => (props.isDark ? '#181818' : '#f9f9f9 ')};
`

export const InnerContainer = styled.div`
  width: 100%;
  height: 94vh;
  margin: 0px;
  @media (min-width: 768px) {
    display: flex;
  }
`

export const SidebarInnerContainer = styled.div`
  display: flex;
  width: 100%;
  height: 94vh;
`

export const AllvideosMainContainer = styled.div`
  width: 100%;
  height: 100%;
  overflow-y: scroll;
  background-color: ${props => (props.isDark ? 'black' : 'white')};
`
