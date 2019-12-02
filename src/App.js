import React, { Component } from 'react';
import axios from 'axios';
import './App.css';
import Spiner from './components/Spiner/Spiner.js';
import TableCurrency from './components/TableCurrency/TableCurrency.js';
import Count from './components/Сount/Count.js';

class App extends Component {
	constructor(props) {
		super(props);
		this.state = {
			loading: true,
			сurrency: [],
			ukCurrency: [],
			currencyUSD: 0,
			currencyEUR: 0,
			sum: 0,
			total: 0,
			tax: 0,
			countCurrency: 1
		};
	}

	componentDidMount() {
		setTimeout(() => {
			this.getСurrency();
			this.getСurrencyMain();
		}, 2000);
	}

	getСurrency = () => {
		axios
			.get('https://old.bank.gov.ua/NBUStatService/v1/statdirectory/exchange?json')
			.then((res) => {
				this.setState({
					сurrency: res.data,
					loading: false
				});
			})
			.catch((err) => {
				console.log(err);
			});
	};

	getСurrencyMain = () => {
		axios
			.get('https://old.bank.gov.ua/NBUStatService/v1/statdirectory/exchange?date=20191118&json')
			.then((res) => {
				this.setState({
					ukCurrency: res.data.filter((el) => el.r030 === 840 || el.r030 === 978),
					loading: false,
					currencyUSD: res.data.filter((el) => el.r030 === 840)[0].rate,
					currencyEUR: res.data.filter((el) => el.r030 === 978)[0].rate
				});
			})
			.catch((err) => {
				console.log(err);
			});
	};

	ukCurrencyList = () => {
		const сurrency = this.state.сurrency;
		const ukCurrency = сurrency.filter((el) => el.r030 === 840 || el.r030 === 978);
		this.setState({
			ukCurrency: ukCurrency
		});
		console.log(this.state.ukCurrency);
	};

	// changeСurrency = (e) => {
	// 	return e.target.value === '1' ? this.state.currencyUSD : this.state.currencyEUR;
	// };

	handleSum = (e) => {
		this.setState(
			{
				sum: +e.target.value
			},
			this.getTotal
		);
	};

	handleTax = (e) => {
		this.setState(
			{
				tax: +e.target.value
			},
			this.getTotal
		);
	};

	getTotal = () => {
		const total = this.state.sum * this.state.countCurrency - (this.state.sum * this.state.countCurrency/100*this.state.tax);
		this.setState({
			total: total.toFixed(2)
		});
	};

	getTotalReset = () => {
		if (this.state.tax === '' || this.state.sum === '') {
			this.setState({
				total: 0
			});
		}
	};

	handleChangeСurrency = (e) => {
		const { currencyUSD } = this.state;
		const { currencyEUR } = this.state;
		const currency = e.target.value;
		if (currency === '1') {
			this.setState({
				countCurrency: currencyUSD
			},this.getTotal);
		}
		if (currency === '2') {
			this.setState({
				countCurrency: currencyEUR
			},this.getTotal);
		}
		if (currency === '0') {
			this.setState({
				countCurrency: 1
			},this.getTotal);
		}
	};

	render() {
		console.log(this.state);

		return (
			<div className="App">
				{this.state.loading ? (
					<Spiner />
				) : (
					<React.Fragment>
						<TableCurrency onUkCurrency={this.state.ukCurrency} />
						<Count
							onHandleChangeСurrency={this.handleChangeСurrency}
							onHandleSum={this.handleSum}
							onHandleTax={this.handleTax}
							total={this.state.total}
						/>
					</React.Fragment>
				)}
			</div>
		);
	}
}

export default App;
