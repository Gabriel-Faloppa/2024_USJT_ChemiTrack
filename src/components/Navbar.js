import React from 'react';
import logo from'../assets/svgs/logo.svg'
import logoWhite from'../assets/svgs/logo-white.svg'
import 'bootstrap/dist/css/bootstrap.min.css'

const logoContainerStyle = {justifyContent: 'center'}

const AuthNavbar = ({colorPalette}) => {
    const navbarStyle = { backgroundColor: colorPalette.grayMedium, height: 66}
  
    return (
      <nav class='navbar' style={navbarStyle}>
        <div class='container' style={logoContainerStyle}>
          <a class='navbar-brand' href='#'>
            <img src={logo} alt='Descomplica Med' width='40'/>
          </a>
        </div>
      </nav>
    )
}

const UnauthNavbar = ({colorPalette}) => {
  const navbarStyle = { 
    background: `linear-gradient(to bottom right, ${colorPalette.primaryBlue}, ${colorPalette.secondaryBlue})`, 
    height: 66}
  
  return (
    <nav class='navbar' style={navbarStyle}>
      <div class='container' style={logoContainerStyle}>
        <a class='navbar-brand' href='#' style={{ display: 'flex', alignItems: 'center', fontWeight: 400, fontSize: 28, color: '#FFF'}}>
          <img style={{marginRight: 10}} src={logoWhite} alt='Descomplica Med' width='40'/>
          Descomplica Med
        </a>
      </div>
    </nav>
  )
}

export {AuthNavbar, UnauthNavbar};