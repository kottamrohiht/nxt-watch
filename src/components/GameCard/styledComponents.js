import styled from 'styled-components'

export const EachGameItem = styled.li`
  text-decoration: none;
  width: 40%;
  margin-bottom: 10px;
  color: ${props => (props.isDark === 'ok' ? 'white' : 'black')};

  @media (min-width: 768px) {
    width: 30%;
  }
`

export const ThumbnailUrl = styled.img`
  width: 100%;
`

export const Title = styled.h1`
  font-size: 15px;
`

export const ViewCount = styled.p`
  font-size: 10px;
`
