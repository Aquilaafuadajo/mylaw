import React from 'react'
import { Line } from '@reactchartjs/react-chart.js'
import './chart.css'

const options = {
  legend: {
    display: false
  },
  responsive: true
}

export default function Chart(props) {
  const {data} = props
  let config
  if(data)
  {const keys = Object.keys(data).slice(1, 4)

   config = {
    labels: [...data['days']],
    datasets: [{
        label: `${keys[0]} cases`,
        backgroundColor: 'rgb(255, 255, 255, 0)',
        borderColor: 'rgb(255, 99, 132)',
        data: data[keys[0]],
        pointRadius: 4,
        lineTension: 0,
        borderWidth: 1
    },
    {
      label: `${keys[1]} cases`,
      backgroundColor: 'rgb(255, 255, 255, 0)',
      borderColor: '#0B7FEB',
      data: data[keys[1]],
      pointRadius: 4,
      lineTension: 0,
      borderWidth: 1
    },
    {
      label: `${keys[2]} cases`,
      backgroundColor: 'rgb(255, 255, 255, 0)',
      borderColor: '#925b08',
      data: data[keys[2]],
      pointRadius: 4,
      lineTension: 0,
      borderWidth: 1
    }
  ]
  }}
  const media = window.matchMedia("(max-width: 900px)")
  if(media.matches) console.log('Yasssss! it matched')
  return (
    <div className="chart">
      <Line height={media.matches ? 100 : 60} data={config} options={options}/>
      <span className="legend">
      <h3 className='active'>Active cases</h3>
      <h3 className='closed'>Closed cases</h3>
      <h3 className='new'>New cases</h3>
      </span>
    </div>
  )
}