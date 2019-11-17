import React, { Component } from 'react';
import axios from 'axios';
import './App.css';
import Spiner from './components/Spiner/Spiner.js';

class App extends Component {
	constructor(props) {
		super(props);
		this.state = {
      loading: true,
      // spiner: true,
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
			.get('https://old.bank.gov.ua/NBUStatService/v1/statdirectory/exchange?json')
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
    // clearTimeout();
    console.log(this.state)
    const currencyList = this.state.сurrency.map((item, i) => (
			<div key={i}>
				<span>
					<h5>
          Сurrency: {item.cc}
          exchangedate: {item.exchangedate}
          rate: {item.rate}
          name: {item.txt}
					</h5>
				</span>
			</div>
    ));

		return (
			<div className="App">
        {this.state.loading
          ? <Spiner />
          : <React.Fragment>
              <button onClick={()=> this.ukCurrencyList()}>click</button>
              <div>
                {currencyList}
              </div>
          </React.Fragment>
        }
			</div>
		);
	}
}

export default App;
