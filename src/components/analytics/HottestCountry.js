import React, { Component } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faGlobeEurope } from '@fortawesome/free-solid-svg-icons'
// import '../styles/hottestcountry.css'
const groupArray = require('group-array');

class HottestCountry extends Component {
  render() {
    const data = this.props.data
    const countries = {}
    data.forEach(c => {
      if (countries[c.country]) {
          countries[c.country]++
      } else {
          countries[c.country] = 1
      }
    })
    const sortedCountries = Object.keys(countries).sort(function(a,b){return countries[b]-countries[a]})
    const hottestCountry = sortedCountries[0]

    return (
      <div className="badge-container" >
        <FontAwesomeIcon className="badge-icon" id="hottest-country-badge" icon={faGlobeEurope} />
        <div className="badge-data">{hottestCountry}</div>
        <div className="badge-comment"> Hottest Country</div>
        </div>
    );
  }
}
export default HottestCountry;