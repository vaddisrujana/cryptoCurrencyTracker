import {Component} from 'react'
import Loader from 'react-loader-spinner'

import 'react-loader-spinner/dist/loader/css/react-spinner-loader.css'

import CryptocurrencyItem from '../CryptocurrencyItem'
import './index.css'

class CryptocurrenciesList extends Component {
  state = {isLoading: true, currencyData: []}

  componentDidMount() {
    this.getCurrencyData()
  }

  getCurrencyData = async () => {
    const response = await fetch(
      'https://apis.ccbp.in/crypto-currency-converter',
    )
    const statusCode = await response.statusCode
    console.log(statusCode)
    const data = await response.json()
    console.log(data)
    const formattedData = data.map(each => ({
      id: each.id,
      currencyLogo: each.currency_logo,
      currencyName: each.currency_name,
      euroValue: each.euro_value,
      usdValue: each.usd_value,
    }))
    console.log(formattedData)
    this.setState({currencyData: formattedData, isLoading: false})
  }

  render() {
    const {isLoading, currencyData} = this.state
    return (
      <div className="background">
        <h1 className="heading">Cryptocurrency Tracker</h1>
        {isLoading ? (
          ''
        ) : (
          <img
            src="https://assets.ccbp.in/frontend/react-js/cryptocurrency-bg.png"
            alt="cryptocurrency"
          />
        )}
        {isLoading ? (
          <div data-testid="loader">
            <Loader type="Rings" color="#ffffff" height={80} width={80} />
          </div>
        ) : (
          <ul className="back2">
            <div className="back">
              <p>Coin Type</p>
              <div className="back1">
                <p>USD</p>
                <p className="euro">EURO</p>
              </div>
            </div>
            {currencyData.map(each => (
              <CryptocurrencyItem currencyData={each} key={each.id} />
            ))}
          </ul>
        )}
      </div>
    )
  }
}

export default CryptocurrenciesList
