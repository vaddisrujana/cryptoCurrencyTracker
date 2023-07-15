import './index.css'

const CryptocurrencyItem = props => {
  const {currencyData} = props
  console.log(currencyData)
  const {currencyName, currencyLogo, euroValue, usdValue} = currencyData
  return (
    <li className="list">
      <div className="back4">
        <div className="back3">
          <img
            src={currencyLogo}
            className="currency-image"
            alt={currencyName}
          />
          <p>{currencyName}</p>
        </div>
        <div className="back1">
          <p>{usdValue}</p>
          <p className="euro">{euroValue}</p>
        </div>
      </div>
    </li>
  )
}
export default CryptocurrencyItem
