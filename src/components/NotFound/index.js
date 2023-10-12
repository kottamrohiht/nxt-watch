import ReactContext from '../../context'

import Header from '../Header'
import Sidebar from '../Sidebar'

import {
  TrendingMainContainer,
  TrendingHeaderSidebarContainer,
  NotFoundMaincontainer,
  NotHeading,
  NotFoundImg,
  NotFoundPara,
} from './styledcomponents'

const NotFound = () => (
  <ReactContext.Consumer>
    {value => {
      const {darkMode} = value
      const nfImg = darkMode
        ? 'https://assets.ccbp.in/frontend/react-js/nxt-watch-not-found-dark-theme-img.png'
        : 'https://assets.ccbp.in/frontend/react-js/nxt-watch-not-found-light-theme-img.png'

      return (
        <TrendingMainContainer isDark={darkMode}>
          <Header />
          <TrendingHeaderSidebarContainer>
            <Sidebar />
            <NotFoundMaincontainer isDark={darkMode}>
              <NotFoundImg src={nfImg} alt="not found" />
              <NotHeading> Page Not Found</NotHeading>
              <NotFoundPara>
                {' '}
                We are sorry,the page you requested could not be found.{' '}
              </NotFoundPara>
            </NotFoundMaincontainer>
          </TrendingHeaderSidebarContainer>
        </TrendingMainContainer>
      )
    }}
  </ReactContext.Consumer>
)

export default NotFound
