import React, { Component } from 'react';
import { BarChart, Bar, XAxis, YAxis, Tooltip, CartesianGrid, ResponsiveContainer } from 'recharts';


class SalesByCountry extends Component {
  constructor() {
    super()
    this.state = {
      key: 'country'
    }
  }
    handleInputChange = (e) => {
      const value = e.target.value;
      this.setState({
        key: value
      });
  }
  render() {
    const allData = [...this.props.data]
    const countries = {}
    const countryCounter = []
    allData.forEach(d => {
      if (countries[d.country]) {
        countries[d.country]++
      } else {
        countries[d.country] = 1
      }
    })

    for (let i in countries) {
      countryCounter.push({ country: i, sales: countries[i] })
    }

    countryCounter.sort((a, b) => { return b.sales - a.sales })

    const data = countryCounter.splice(0, 5)
    return (
      <div id="sales-by-country">
        <h3 className="chart-header">SALES BY COUNTRY:</h3>
        {/* <div className="salesBy-select"><span>Sales by : </span>
          <select onChange={this.handleInputChange}>
            <option value="email">email</option>
            <option value="month">month</option>
            <option value="owner">owner</option>
            <option value="country">country</option>
          </select> */}
        <div className="chart">
          <ResponsiveContainer width={700} height={250}>
            <BarChart data={data}>
              <XAxis dataKey={this.state.key} stroke="#474044" />
              <YAxis />
              <Tooltip wrapperStyle={{ width: "fit-contect", backgroundColor: '#ccc', color: "#FFAE00" }} />
              <CartesianGrid stroke="#ccc" strokeDasharray="5 5" />
              <Bar type="monotone" dataKey="sales" fill="#e96f4c" barSize={50} />
            </BarChart>
          </ResponsiveContainer>
        </div>
        </div>
    )
  }
}
export default SalesByCountry;
