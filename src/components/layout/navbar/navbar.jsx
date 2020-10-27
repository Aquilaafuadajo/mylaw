import React, { Component } from 'react';
import './navbar.css';

//MUI STUFF
import withStyles from '@material-ui/core/styles/withStyles';
import Grid from '@material-ui/core/Grid';

const styles = {

}

function UserProfile({...props}) {
  const {name, image} = props
  return (
    <div className="user-profile">
      <div className="name">
        <p className="hello">Hello</p>
        <p>{name}</p>
      </div>
      <img style={{borderRadius: '50%'}} src={image} alt="profile img"/> 
    </div>
  )
}

const Notification = () => {
  return (
    <div className="notification">
      <img src={require('../../../assets/not.svg')} alt='notification' />
    </div>
  )
}

function MiniNav({...props}) {
  return (
    <ul className="mini-nav">
      <li className='nav-item'>Support</li>
      <li className='nav-item'>FAQ</li>
      <li className='nav-item'><Notification/></li>
      <UserProfile name='Emmanuel Afuadajo' image={require('../../../assets/profile-img.png')}/>
    </ul>
  )
}

class Navbar extends Component {
  render() {
    return (
      <div className="nav-bar">
        <Grid container>
          <Grid item xs={2} className='grid-item'>
            <img className='logo' src={require('../../../assets/mylaw.png')} alt="logo"/>
          </Grid>
          <Grid item xs={6} className='grid-item'>
            <h1>Lawyer Dashboard</h1>
          </Grid>
          <Grid item xs={4} className='grid-item'>
            <MiniNav/>
          </Grid>
        </Grid>
      </div>
    )
  }
}

export default withStyles(styles)(Navbar)
