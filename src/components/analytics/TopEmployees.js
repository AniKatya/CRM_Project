import React, { Component } from 'react';
import { BarChart, Bar, XAxis, YAxis, Tooltip, CartesianGrid } from 'recharts';

class TopEmployees extends Component {
    render() {
        const allData = [...this.props.data]
        const dataSoldTrue = allData.filter(d => d.sold === true).map(d => d)
        const owners = {}
        const ownersCounter = []
        dataSoldTrue.forEach(d => {
            if (owners[d.owner]) {
                owners[d.owner]++
            } else {
                owners[d.owner] = 1
            }
        })

        for (let i in owners) {
            ownersCounter.push({ owner: i.split(" ")[0], sales: owners[i] })
        }

        ownersCounter.sort((a, b) => { return b.sales - a.sales })

        const data = ownersCounter.splice(0, 3)

        return (
            <div id="top-employees-box">
                <h3 className="chart-header">TOP EMPLOYEES:</h3>
                <div id="top-employees-chart">
                    <BarChart width={450} height={250} data={data}>
                        <XAxis dataKey="owner" stroke="#474044" />
                        <YAxis />
                        <Tooltip wrapperStyle={{ width: "fit-contect", backgroundColor: '#ccc' }} />
                        <CartesianGrid stroke="#ccc" strokeDasharray="5 5" />
                        <Bar type="monotone" dataKey="sales" fill="#254654" barSize={50} />
                    </BarChart>
                </div>
            </div>
        )
    }
}

export default TopEmployees;