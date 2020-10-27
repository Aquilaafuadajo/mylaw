import React, {useState} from 'react';
import './App.css';

import Navbar from './components/layout/navbar/navbar';
import Grid from '@material-ui/core/Grid';
import Card from '@material-ui/core/Card';
import { withStyles } from '@material-ui/core/styles';
import Select from 'react-select';

const styles = {
  root: {
    padding: '0 50px',
    marginTop: '180px'
  },
  card: {
    margin: '0 20px',
    padding: '30px'
  }
};

const dummyData = {
  'August': {
    'days': [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23, 24, 25, 26, 27, 28, 29, 30, 31],
    'active': [15, 5, 20, 20, 15, 1, 15, 15, 3, 5, 20, 0, 0, 9, 10, 15, 25, 15, 5, 15, 15, 5, 0, 17, 5, 5, 20, 5, 10, 10, 10],
    'closed': [17, 15, 20, 20, 0, 15, 10, 0, 3, 5, 15, 5, 15, 9, 5, 20, 5, 15, 15, 25, 5, 5, 15, 10, 15, 5, 20, 0, 1, 10, 10],
    'new': [15, 17, 5, 5, 1, 0, 10, 3, 10, 20, 15, 25, 9, 10, 20, 15, 10, 15, 5, 5, 15, 15, 5, 20, 5, 15, 0, 20, 5, 15, 0],
    'closed cases': 237
  }, 
  'September': {
    'days': [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23, 24, 25, 26, 27, 28, 29, 30],
    'active': [0, 5, 10, 15, 20, 15, 5, 5, 10, 15, 15, 10, 0, 5, 5, 15, 20, 15, 20, 15, 5, 0, 15, 20, 10, 25, 17, 9, 5, 3],
    'closed': [25, 15, 0, 5, 3, 10, 20, 5, 15, 15, 1, 20, 15, 17, 5, 15, 20, 0, 20, 5, 5, 9, 10, 15, 10, 5, 15, 0, 15, 5],
    'new': [20, 3, 5, 25, 9, 5, 10, 10, 0, 5, 5, 15, 15, 15, 15, 0, 5, 10, 15, 15, 20, 0, 20, 15, 5, 17, 10, 15, 5, 1],
    'closed cases': 237
  }, 
  'October': {
    'days': [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23, 24, 25, 26, 27],
    'active': [5, 15, 0, 20, 20, 5, 15, 17, 25, 5, 10, 10, 0, 15, 5, 5, 15, 0, 15, 10, 20, 15, 10, 15, 15, 5, 20],
    'closed': [5, 0, 15, 20, 15, 15, 20, 15, 10, 20, 17, 5, 5, 15, 5, 25, 5, 15, 15, 10, 0, 10, 15, 5, 10, 20, 0],
    'new': [20, 5, 15, 0, 5, 10, 17, 5, 0, 20, 5, 10, 15, 15, 5, 10, 20, 15, 15, 0, 25, 15, 15, 5, 15, 10, 20],
    current: [
      {'Request in progress': 17},
      {'Lawyers available': 15},
      {'New cases today': 5},
      {'Total cases': 22}
    ]
  }
}

const options = [
  { value: 'October', label: 'October' },
  { value: 'September', label: 'September' },
  { value: 'August', label: 'August' }
];

function App(props) {
  const {classes} = props
  const [data, setData] = useState(dummyData)

  return (
    <div className='container'>
      <Navbar/>
      <Grid container className={classes.root}>
        <Grid item xs={12}>
          <Grid container>
            {
              data['October'].current.map(val => {
                const values = Object.entries(val)
                return (
                <Grid key={Object.keys(val)} item xs={3}>
                  <Card className={classes.card}>
                    <h3>{values[0][0]}</h3>
                    <h1>{values[0][1]}</h1>
                  </Card>
                </Grid>
              )})
            }
          </Grid>
          <Grid container>
            <Grid item xs={3}>
              
            </Grid>
            <Grid item xs={9}></Grid>
          </Grid>
          
        </Grid>
      </Grid>
    </div>
  );
}

export default withStyles(styles)(App);
