import React, { Component } from 'react';
import './navbar.css';

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

function MiniNav({...props}) {
  return (
    <ul className="mini-nav">
      <li className='nav-item'>Support</li>
      <li className='nav-item'>FAQ</li>
      <UserProfile name='Emmanuel Afuadajo' image={require('../../../assets/profile-img.png')}/>
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
        <MiniNav/>
      </div>
    )
  }
}

export default (Navbar)
