import React, {useState, useEffect} from 'react';
import './App.css';

import Navbar from './components/layout/navbar/navbar';
import Select from 'react-select';
import Chart from './components/chart/chart';
import Loader from './components/loader/loader';

const options = [
  { value: 'October', label: 'October' },
  { value: 'September', label: 'September' },
  { value: 'August', label: 'August' }
];

function App(props) {
  const [selected, changeSelected] = useState(null)
  const [loading, setLoading] = useState(false)
  const [error, setError] = useState(null)
  const [data, setData] = useState(null)
  const [chartData, setChartData] = useState(null)

  useEffect(() => {
    setLoading(true)
    fetch(('https://us-central1-social-media-a01e2.cloudfunctions.net/api/data'))
    .then(res => res.json())
    .then(data => {
      if(data) {
        setData(data)
        setLoading(false) 
        setChartData(data['October'])
      }
      return 
    })
    .catch(err => setError('Something Went Wrong'))
  }, [])

  const handleChange = selected => { 
    changeSelected({ selected });
    setChartData(data[selected.value])
  };

  return loading ? <Loader/> : (
    <>
      <Navbar/>
      <div className='container'>
        <div className='section' >
          {data? data['October'].current.map(val => {
              const values = Object.entries(val)
              return (
                <div className='card' key={Object.keys(val)}>
                  <h3>{values[0][0]}</h3>
                  <h1>{values[0][1]}</h1> 
                </div>
            )}) : null
          }
        </div>
          <Select
            defaultValue={options[0]}
            label='Single select'
            onChange={handleChange}
            options={options}
            styles={{marginLeft: '10px', marginRight: 'auto'}}
          />
          <Chart height={20} width={100} data={chartData}/>
      </div>
    </>
  );
}

export default (App);
