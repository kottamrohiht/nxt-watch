import styled from 'styled-components'

export const HomeInnercontainer = styled.div`
  display: none;

  @media (min-width: 768px) {
    display: flex;
    align-items: center;
    justify-content: space-between;
    height: 94vh;
    margin: 0px;
    width: 250px;
  }
`

export const ItemsList = styled.div`
  display: none;
  @media (min-width: 768px) {
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    list-style-type: none;
    background-color: ${props => (props.isDark ? 'black' : 'white')};
    width: 250px;
    padding: 0px;
    margin: 0px;
    height: 100%;
  }
`

export const ListOptions = styled.ul`
  padding: 0px;
  margin: 0px;
  list-style-type: none;
`

export const ContactContainer = styled.div`
  background-color: transparent;
  width: 100%;
  margin-top: auto;
  margin-bottom: 40px;
  padding-left: 10px;
`

export const ContactUs = styled.p`
  color: ${props => (props.isDark ? 'white' : 'black')};
  font-weight: 500;
  font-family: 'Roboto';
  font-size: ${props => (props.title ? '20px' : '13px')};
  margin: 0px;
`
export const ContactImg = styled.img`
  width: 30px;
  margin-right: 10px;
`

export const ContactUsImgContainer = styled.div`
  display: flex;
  width: 100%;
  margin-top: 15px;
  margin-bottom: 15px;
`
