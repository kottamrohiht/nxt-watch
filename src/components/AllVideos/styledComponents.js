import styled from 'styled-components'

export const PrimeVideosContainer = styled.div`
  width: 100%;
  height: 75%;
  display: flex;
  flex-direction: column;
  align-items: center;
`

export const SearchElementContainer = styled.div`
  display: flex;
  align-items: center;
  font-size: 20px;
  font-weight: 500;
  width: 90%;

  @media (min-width: 768px) {
    width: 50%;
  }
  margin-bottom: 10px;
  margin-top: 10px;
  background-color: ${props => (props.isDark ? 'black' : 'white')};
  color: ${props => (props.isDark ? 'white' : 'black')};
  border-color: ${props => (props.isDark ? 'white' : 'black')};
  border: 1px solid;
  border-radius: 5px;
`

export const SearchElement = styled.input`
  width: 90%;
  padding: 8px;
  font-weight: 400;
  font-family: 'Roboto';
  font-size: 15px;
  border: 1px solid black;
  border-radius: 4px;
  background-color: transparent;
  color: ${props => (props.isDark ? 'white' : 'black')};
  border: 0px;
  outline: none;
  margin-right: 5px;
  margin-top: 5px;
`

export const SearchButton = styled.button`
  display: flex;
  align-items: center;
  justify-content: center;
  border: 0px;
  background-color: transparent;
  cursor: pointer;
  font-size: 20px;
  color: ${props => (props.isDark ? 'white' : 'black')};
  margin-right: 10px;
`

export const VideoHeading = styled.p`
  color: black;
`

export const LoaderContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 30vh;
  width: 100vw;
`

export const VideoCardListContainer = styled.ul`
  list-style-type: none;
  padding: 0px;
  width: 100%;
  margin: 0px;
  display: flex;
  flex-direction: row;
  align-items: flex-start;
  justify-content: space-between;
  flex-wrap: wrap;

  @media (min-width: 768px) {
    padding-right: 5px;
  }
`

export const ApiFailureContainer = styled.div`
  margin-top: 20px;
  width: 100%;
  height: 50%;
  text-align: center;
  color: ${props => (props.isDark ? 'white' : 'black')};
`

export const NoVideosFound = styled.p``

export const FailureImg = styled.img`
  width: 40%;
`

export const FailureHeading = styled.h1`
  margin: 0px;
`

export const FailurePara = styled.p`
  margin: 0px;
`

export const RetryButton = styled.button`
  border: 0px;
  outline: none;
  cursor: pointer;
  width: 100px;
  padding: 10px;
  font-size: 15px;
  border-radius: 5px;
  margin-top: 5px;
  color: white;
  background-color: #4f46e5;
`

export const NoVideosFoundContainer = styled.div`
  margin-top: 20px;
  width: 100%;
  height: 50%;
  text-align: center;
  color: ${props => (props.isDark ? 'white' : 'black')};
`

export const NoVideosFoundImg = styled.img`
  width: 50%;

  @media (min-width: 768px) {
    width: 30%;
  }
`

export const NoVideosFoundHeading = styled.h1`
  margin: 0px;
`

export const NoVideosFoundPara = styled.p`
  margin: 0px;
`
