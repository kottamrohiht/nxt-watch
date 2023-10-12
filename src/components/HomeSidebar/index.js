import {Component} from 'react'

import {AiFillHome} from 'react-icons/ai'
import {HiFire} from 'react-icons/hi'
import {SiYoutubegaming} from 'react-icons/si'
import {MdPlaylistAdd} from 'react-icons/md'

import ReactContext from '../../context'

import {SidebarContainer, OptionName, LinkEl} from './styledComponents'

class HomeSidebar extends Component {
  getIcon = item => {
    const iconName = item.displayText

    switch (iconName) {
      case 'Home':
        return <AiFillHome />

      case 'Trending':
        return <HiFire />

      case 'Gaming':
        return <SiYoutubegaming />

      case 'Saved Videos':
        return <MdPlaylistAdd />

      default:
        return null
    }
  }

  updateSelection = () => {
    const {updateOption, item} = this.props
    updateOption(item.displayText)
  }

  render() {
    const {item, selectedItem} = this.props

    return (
      <ReactContext.Consumer>
        {value => {
          const {darkMode} = value

          return (
            <LinkEl to={item.path}>
              <SidebarContainer
                onClick={this.updateSelection}
                isSelected={selectedItem}
                isDark={darkMode}
              >
                {this.getIcon(item)}
                <OptionName isDark={darkMode}> {item.displayText} </OptionName>
              </SidebarContainer>
            </LinkEl>
          )
        }}
      </ReactContext.Consumer>
    )
  }
}

export default HomeSidebar
