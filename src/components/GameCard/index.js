import ReactContext from '../../context'

import {EachGameItem, ThumbnailUrl, Title, ViewCount} from './styledComponents'

const GameCard = props => {
  const {item} = props
  const {thumbnailUrl, title, viewCount} = item

  return (
    <ReactContext.Consumer>
      {value => {
        const {darkMode} = value

        return (
          <EachGameItem isDark={darkMode}>
            <ThumbnailUrl src={thumbnailUrl} alt="video thumbnail" />
            <Title> {title} </Title>
            <ViewCount> {viewCount} Watching Worldwide </ViewCount>
          </EachGameItem>
        )
      }}
    </ReactContext.Consumer>
  )
}

export default GameCard
