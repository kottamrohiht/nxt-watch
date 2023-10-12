import {Component} from 'react'

import {GrFormClose} from 'react-icons/gr'

import {
  PrimeDealsContaier,
  PrimePoster,
  BuyPrime,
  PridealsImage,
  CancelContainer,
  PrimeInnerContainer,
} from './styledComponents'

class PrimeDeals extends Component {
  onClickCancel = () => {
    const {showHidePrimeDeals} = this.props
    showHidePrimeDeals()
  }

  render() {
    return (
      <PrimeDealsContaier>
        <PrimeInnerContainer>
          <PridealsImage
            src="https://assets.ccbp.in/frontend/react-js/nxt-watch-logo-light-theme-img.png"
            alt="company logo"
          />
          <PrimePoster>
            Buy Nxt Watch Premium prepaid plans with UPI
          </PrimePoster>
          <BuyPrime> GET IT NOW </BuyPrime>
        </PrimeInnerContainer>

        <CancelContainer
          data-testid="close"
          type="button"
          onClick={this.onClickCancel}
        >
          <GrFormClose />
        </CancelContainer>
      </PrimeDealsContaier>
    )
  }
}

export default PrimeDeals
