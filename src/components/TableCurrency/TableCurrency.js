import React, { Component } from 'react';
import './TableCurrency.css';

class TableCurrency extends Component {
	render() {
        const { onUkCurrency } = this.props;
        const dateCurrency = onUkCurrency[0] && onUkCurrency[0].exchangedate;
        const currencyList = onUkCurrency.map((item, i) => (
			<div key={i}>
                <div className="tableRateName">
                    <div>{item.cc}</div>
                </div>
                <div>
                    <div>{item.rate}</div>
                </div>
			</div>
        ));
		return (
			<React.Fragment>
              <div className="tableRate">
                  <div className="tableRateTitle">
                        <div>{dateCurrency}</div>
                        <div>Sale</div>
                  </div>
                  {currencyList}
              </div>
			</React.Fragment>
		);
	}
}

export default TableCurrency;