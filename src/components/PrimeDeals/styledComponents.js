import styled from 'styled-components'

export const PrimeDealsContaier = styled.div`
  display: flex;
  justify-content: space-around;
  align-items: flex-start;
  height: 25%;
  width: 100%;
  margin: 0px;
  padding: 20px;
  background-image: url('https://assets.ccbp.in/frontend/react-js/nxt-watch-banner-bg.png');
  background-size: cover;
  background-position: left, right;
`

export const PrimeInnerContainer = styled.div`
  width: 100%;
`

export const PrimePoster = styled.p`
  color: black;

  padding: 0px;
  font-size: 16px;
  width: 50%;
  font-weight: 500;
  font-family: 'Roboto';
`

export const PridealsImage = styled.img`
  height: 30px;
  color: black;
`

export const BuyPrime = styled.button`
  background-color: transparent;
  border: 1px solid black;
  color: black;
  padding: 5px;
  font-weight: 500;
  font-family: 'Roboto';
`

export const CancelContainer = styled.button`
  font-size: 25px;
  cursor: pointer;
  border: 0px;
  outline: none;
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: transparent;
`
