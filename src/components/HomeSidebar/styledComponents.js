import {Link} from 'react-router-dom'

import styled from 'styled-components'

export const SidebarContainer = styled.li`
  display: flex;
  flex-direction: row;
  align-items: center;
  padding: 10px;
  margin: 0px;
  font-size: 17px;
  text-decoration: none;
  font-weight: 500;
  margin-bottom: 15px;
  width: 100%;
  height: 100%;
  color: ${props => (props.isDark ? ' white' : 'black')};
  color: ${props => (props.isSelected && props.isDark ? 'red' : '')};
  color: ${props => (props.isSelected && props.isDark === false ? 'red' : '')};

  background-color: ${props =>
    props.isSelected && props.isDark ? ' #383838' : ''};
  background-color: ${props =>
    props.isSelected && props.isDark === false ? '#cbd5e1' : ''};
`

export const OptionName = styled.p`
  font-size: 15px;
  font-weight: 600;
  text-decoration: none;
  padding: 0px;
  margin: 0px;
  margin-left: 20px;
  color: ${props => (props.isDark ? ' white' : 'black')};
`

export const LinkEl = styled(Link)`
  display: flex;
  align-items: flex-start;
  justify-content: center;
  text-decoration: none;
  width: 250px;
  height: 35px;
  color: black;
`
