import React, {Component} from 'react';
import c3 from 'c3';
import './Chart.css'

class Chart extends Component{
  constructor(props){
    super(props);
    this.state = {
        column1:  ['USD', 23.25, 25.34, 33.4, 23.77, 22.3, 25.4],
        column2:  ['EUR', 25.25, 25.34, 35.4, 25.77, 25.3, 23.4]
    };
  }

  renderChart = () => {
    c3.generate({
      bindto: "#chart",
      size: {
        height: 300,
        width: 550
      },
      data: {
        columns: [
            this.state.column1,
            this.state.column2
        ],
      },
      zoom: {
        enabled: true
      },
      axis: {
        // x: {
        //     type: 'category',
        //     categories: ['cat1', 'cat2', 'cat3', 'cat4', 'cat5', 'cat6', 'cat7', 'cat8', 'cat9']
        // },
      },
      color: {
        pattern: ['#FF0000', '#FFCC00', '#33CC33']
      },
      grid: {
        x: {
            show: true
        },
        y: {
            show: true
        }
      }
   });
  }

  componentDidMount() {
    this.renderChart();
  }

  componentDidUpdate() {
    this.renderChart();
  }
  changeData = () => {
    this.setState({
      column1: ['data1', 70, 120, 30, 300, 230, 300],
    });
  }
  render(){
    return (
        <div>
            <div id="chart"></div>
            <button onClick={this.changeData}>Change</button>
      </div>
    )
  }
}

export default Chart;