import {Component} from 'react'

import HomeSidebar from '../HomeSidebar'
import ReactContext from '../../context'

import {
  HomeInnercontainer,
  ItemsList,
  ListOptions,
  ContactUs,
  ContactContainer,
  ContactImg,
  ContactUsImgContainer,
} from './styledComponents'

const homeButtons = [
  {
    id: 1,
    iconImg: 'AiFillHome',
    displayText: 'Home',
    path: '/',
  },
  {
    id: 2,
    iconImg: 'HiFire',
    displayText: 'Trending',
    path: '/trending',
  },
  {
    id: 3,
    iconImg: 'SiYoutubegaming',
    displayText: 'Gaming',
    path: '/gaming',
  },
  {
    id: 4,
    iconImg: 'MdPlaylistAdd',
    displayText: 'Saved Videos',
    path: '/saved-videos',
  },
]

class Sidebar extends Component {
  render() {
    return (
      <ReactContext.Consumer>
        {value => {
          const {darkMode, selectedOption, updateSelectedOptions} = value

          const updateOption = option => {
            updateSelectedOptions(option)
          }

          return (
            <HomeInnercontainer>
              <ItemsList isDark={darkMode}>
                <ListOptions>
                  {homeButtons.map(each => (
                    <HomeSidebar
                      key={each.id}
                      item={each}
                      updateOption={updateOption}
                      selectedItem={selectedOption === each.displayText}
                    />
                  ))}
                </ListOptions>
                <ContactContainer>
                  <ContactUs title="true" isDark={darkMode}>
                    CONTACT US
                  </ContactUs>

                  <ContactUsImgContainer>
                    <ContactImg
                      src="https://assets.ccbp.in/frontend/react-js/nxt-watch-facebook-logo-img.png"
                      alt="facebook"
                    />

                    <ContactImg
                      src="https://assets.ccbp.in/frontend/react-js/nxt-watch-twitter-logo-img.png"
                      alt="facebook"
                    />

                    <ContactImg
                      src="https://assets.ccbp.in/frontend/react-js/nxt-watch-linked-in-logo-img.png"
                      alt="facebook"
                    />
                  </ContactUsImgContainer>

                  <ContactUs isDark={darkMode}>
                    Enjoy! Now to see your channels and recommendations
                  </ContactUs>
                </ContactContainer>
              </ItemsList>
            </HomeInnercontainer>
          )
        }}
      </ReactContext.Consumer>
    )
  }
}

export default Sidebar
