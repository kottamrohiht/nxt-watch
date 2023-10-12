import {Link} from 'react-router-dom'
import styled from 'styled-components'

export const HeaderContainer = styled.div`
  width: 100vw;
  margin: 0px;
  height: 6vh;
`

export const HeaderInnerContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  background-color: ${props => (props.isDark ? 'black' : 'white')};
  width: 100%;
  padding: 10px;
`

export const HeaderButton = styled.button`
  border: 0px;
  background-color: transparent;
  cursor: pointer;
  width: 25%;
  @media (min-width: 768px) {
    width: 7%;
    margin-left: 20px;
  }
`

export const HeaderImg = styled.img`
  width: 100%;
`

export const IconContainer = styled.div`
  width: 38%;
  display: flex;
  align-items: center;
  justify-content: space-between;
  font-size: 28px;
  @media (min-width: 768px) {
    display: none;
  }
  color: ${props => (props.isDark ? 'white' : 'black')};
`

export const LargerDeviceIconContainer = styled.div`
  display: none;

  @media (min-width: 768px) {
    width: 15%;
    display: flex;
    align-items: center;
    justify-content: space-between;
    font-size: 20px;
    color: ${props => (props.isDark ? 'white' : 'black')};
    margin-right: 20px;
  }
`

export const IconButton = styled.button`
  background-color: transparent;
  cursor: pointer;
  border: 0px;
  font-size: 20px;
  @media (min-width: 768px) {
    font-size: 23px;
  }
  text-align: center;
  font-weight: 600;
  display: flex;
  align-items: center;
  justify-content: center;
  color: ${props => (props.isDark ? 'white' : 'black')};
`

export const SmallDevicePopupContainer = styled.div`
  @media (min-width: 768px) {
    display: none;
  }
`

export const TriggerButton = styled.button`
  background-color: transparent;
  cursor: pointer;
  border: 0px;
  font-size: 20px;
  text-align: center;
  font-weight: 600;
  display: flex;
  align-items: center;
  justify-content: center;
  color: ${props => (props.isDark ? 'white' : 'black')};
`

export const NavBar = styled.nav`
  position: fixed;
  left: 30px;
  top: 40px;
  cursor: pointer;
  background-color: transparent;
  border: none;
`

export const UnOrderList = styled.div`
  border-radius: 5px;
  height: 150px;
  width: 300px;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: space-around;
  padding-top: 10px;
  padding-bottom: 10px;
  padding-left: 20px;
  background-color: white;
  font-size: 20px;

  @media (min-width: 768px) {
    display: none;
  }
`

export const AnchorTag = styled(Link)`
  color: black;
  font-family: 'Roboto';
  font-size: 17px;
  font-weight: 500;
  text-decoration: none;
  cursor: pointer;
  text-decoration: none;
`

export const Profile = styled.img`
  width: 23px;
`

export const LogoutButtonSmall = styled.button`
  background-color: transparent;
  border: 1px solid ${props => (props.isDark ? 'white' : 'black')};
  cursor: pointer;
  padding: 5px;
  padding-left: 10px;
  padding-right: 10px;
  border-radius: 5px;
  font-size: 12px;
  text-align: center;
  font-weight: 500;
  display: flex;
  align-items: center;
  justify-content: center;
  color: ${props => (props.isDark ? 'white' : 'black')};
`

export const LogoutButton = styled.button`
  background-color: transparent;
  border: 1px solid ${props => (props.isDark ? 'white' : '#3b82f6')};
  cursor: pointer;
  padding: 5px;
  padding-left: 10px;
  padding-right: 10px;
  border-radius: 5px;
  font-size: 12px;
  text-align: center;
  font-weight: 500;
  display: flex;
  align-items: center;
  justify-content: center;
  color: ${props => (props.isDark ? 'white' : '#3b82f6')};
`

export const PopupContentContainer = styled.div`
    display : inline-flex:
    flex-direction : column;
    align-items : center;
    justify-content : center;
    flex-wrap : wrap;
    background-color: ${props => (props.isDark ? 'black' : 'white')};
    color: ${props => (props.isDark ? 'white' : 'black')};
    border-radius : 10px;
    height : 150px;
    width : 300px;
    

`

export const LogoutPara = styled.p`
  font-size: 15px;
`

export const PopupInnerContainer = styled.div`
    display : flex:
    align-items : center;
`

export const CancelButton = styled.button`
  background-color: transparent;
  border: 1px solid #94a3b8;
  cursor: pointer;
  padding: 10px;
  border-radius: 5px;
  margin-right: 17px;
  text-align: center;
  font-weight: 500;
  display: flex;
  align-items: center;
  justify-content: center;
  color: ${props => (props.isDark ? 'white' : '#94a3b8')};
`

export const ConfirmButton = styled.button`
  background-color: #3b82f6;
  border: 0px;
  cursor: pointer;
  padding: 10px;
  border-radius: 5px;
  font-size: 15px;
  text-align: center;
  font-weight: 500;
  display: flex;
  align-items: center;
  justify-content: center;
  color: white;
`
