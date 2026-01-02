import React from 'react'
import {assets} from '../assets/assets/frontend_assets/assets'
import { NavLink } from 'react-router-dom'

const Navbar = () => {
  console.log('Navbar component rendered')
  return (
    <div style={{display: 'flex', justifyContent: 'space-between', alignItems: 'center', padding: '20px', borderBottom: '1px solid #ccc'}}>
      {assets.logo ? (
        <img src={assets.logo} style={{width: '144px'}} alt="logo" />
      ) : (
        <div style={{width: '144px', backgroundColor: '#ccc', padding: '10px'}}>Logo</div>
      )}
      <ul style={{display: 'flex', gap: '20px', listStyle: 'none', margin: 0, padding: 0}}>
        <li><NavLink to='/' style={{textDecoration: 'none', color: '#555'}}>Home</NavLink></li>
        <li><NavLink to='/collection' style={{textDecoration: 'none', color: '#555'}}>Collection</NavLink></li>
        <li><NavLink to='/about' style={{textDecoration: 'none', color: '#555'}}>About</NavLink></li>
        <li><NavLink to='/contact' style={{textDecoration: 'none', color: '#555'}}>Contact</NavLink></li>
      </ul>
      <div style={{display: 'flex', gap: '20px', alignItems: 'center'}}>
        {assets.search_icon ? (
          <img src={assets.search_icon} style={{width: '20px', cursor: 'pointer'}} alt="search" />
        ) : (
          <span>🔍</span>
        )}
        <NavLink to='/login' style={{padding: '8px 16px', border: '1px solid #555', textDecoration: 'none', color: '#555'}}>
          Login
        </NavLink>
      </div>
    </div>
  )
}

export default Navbar
