import React, { Component } from 'react';
import axios from 'axios';
import './App.css';
import Spiner from './components/Spiner/Spiner.js';
import TableCurrency from './components/TableCurrency/TableCurrency.js';

class App extends Component {
	constructor(props) {
		super(props);
		this.state = {
      loading: true,
      сurrency:[],
      ukCurrency:[]
		};
	}

	componentDidMount() {
    setTimeout(() => {
		this.getСurrency();
		this.getСurrencyMain();
    }, 2000)
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
					loading: false
				});
			})
			.catch((err) => {
				console.log(err);
      });
  };
  
  ukCurrencyList = () =>{
    const сurrency = this.state.сurrency;
    const ukCurrency = сurrency.filter((el) => el.r030 === 840 || el.r030 === 978)
    this.setState({
      ukCurrency: ukCurrency
    })
    console.log(this.state.ukCurrency)
  }

	render() {
    console.log(this.state)

		return (
			<div className="App">
        {this.state.loading
          ? <Spiner />
          : <React.Fragment>
              <TableCurrency onUkCurrency={this.state.ukCurrency}/>
          </React.Fragment>
        }
			</div>
		);
	}
}

export default App;
