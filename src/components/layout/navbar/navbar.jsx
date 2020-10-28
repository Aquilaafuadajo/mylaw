import React, { Component } from 'react';
import './navbar.css';

function User({...props}) {
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

function AsideNav({...props}) {
  return (
    <ul className="mini-nav">
      <li className='nav-item'><a href="#">Support</a></li>
      <li className='nav-item'><a href="#">FAQ</a></li>
      <User name='Emmanuel Afuadajo' image={require('../../../assets/profile-img.png')}/>
    </ul>
  )
}

class Navbar extends Component {
  render() {
    return (
      <div className="nav-bar">
        <div className="logo">
          <img src={require('../../../assets/mylaw.png')} alt="logo"/>
        </div>
        <h2 className='nav-title'>Lawyer Dashboard</h2>
        <AsideNav/>
      </div>
    )
  }
}

export default (Navbar)
