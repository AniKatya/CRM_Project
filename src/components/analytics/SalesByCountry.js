import React, { Component } from 'react';
import { BarChart, Bar, XAxis, YAxis, Tooltip, CartesianGrid, ResponsiveContainer } from 'recharts';


class SalesByCountry extends Component {
//   handleInputChange = (e) => {
//     const value = e.target.value;
//     this.props.filterBy(value);
// }
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
         <div id="sales-by-country-titles">
          <h3>Sales By Country:</h3>
        </div>
        <div className="salesBy-select"><span>Sales by : </span>
          <select onChange={this.handleInputChange}>
            <option value="email">email</option>
            <option value="month">month</option>
            <option value="owner">owner</option>
            <option value="country">country</option>
          </select>
        </div>
        <div id="sales-by-country-chart">
          <ResponsiveContainer width={800} height={200}>
            <BarChart data={data}>
              <XAxis dataKey="country" stroke="#474044" />
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
