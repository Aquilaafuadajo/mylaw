import React, {useState, useEffect} from 'react';
import './App.css';

import Navbar from './components/layout/navbar/navbar';
import Grid from '@material-ui/core/Grid';
import Card from '@material-ui/core/Card';
import { withStyles } from '@material-ui/core/styles';
import Select from 'react-select';
import Chart from './components/chart/chart';
import Loader from './components/loader/loader';

const styles = {
  root: {
    padding: '0 50px',
    marginTop: '150px'
  },
  card: {
    margin: '0 20px',
    padding: '30px'
  }
};

const options = [
  { value: 'October', label: 'October' },
  { value: 'September', label: 'September' },
  { value: 'August', label: 'August' }
];

function App(props) {
  const {classes} = props
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
    <div className='container'>
      <Navbar/>
      <Grid container className={classes.root}>
        <Grid item xs={12}>
          <Grid container>
            {data? data['October'].current.map(val => {
                const values = Object.entries(val)
                return (
                <Grid key={Object.keys(val)} item xs={3}>
                  <Card className={classes.card}>
                    <h3>{values[0][0]}</h3>
                    <h1>{values[0][1]}</h1>
                  </Card>
                </Grid>
              )}) : null
            }
          </Grid>
          <Grid container>
            <Grid item xs={3}>
              <Select
                defaultValue={options[0]}
                label='Single select'
                onChange={handleChange}
                options={options}
                styles={{marginLeft: '10px'}}
              />
            </Grid>
            <Grid item xs={9}></Grid>
          </Grid>
          <Chart height={20} width={100} data={chartData}/>
        </Grid>
      </Grid>
    </div>
  );
}

export default withStyles(styles)(App);
