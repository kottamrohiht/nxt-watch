import {Component} from 'react'

import ReactContext from '../../context'

import Header from '../Header'
import Sidebar from '../Sidebar'
import PrimeDeals from '../PrimeDeals'
import AllVideos from '../AllVideos'

import {
  HomeMaincontainer,
  InnerContainer,
  AllvideosMainContainer,
  SidebarInnerContainer,
} from './styledComponents'

class Home extends Component {
  state = {
    showPrimeDeals: true,
  }

  showHidePrimeDeals = () => {
    this.setState({
      showPrimeDeals: false,
    })
  }

  render() {
    const {showPrimeDeals} = this.state
    return (
      <ReactContext.Consumer>
        {value => {
          const {darkMode} = value

          return (
            <HomeMaincontainer isDark={darkMode} data-testid="home">
              <Header />
              <SidebarInnerContainer>
                <Sidebar />
                <InnerContainer>
                  <AllvideosMainContainer isDark={darkMode}>
                    {showPrimeDeals && (
                      <PrimeDeals
                        showHidePrimeDeals={this.showHidePrimeDeals}
                      />
                    )}
                    <AllVideos />
                  </AllvideosMainContainer>
                </InnerContainer>
              </SidebarInnerContainer>
            </HomeMaincontainer>
          )
        }}
      </ReactContext.Consumer>
    )
  }
}

export default Home
