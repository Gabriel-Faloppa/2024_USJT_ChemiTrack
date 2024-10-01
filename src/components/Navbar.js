import React from "react";
import logo from'../assets/svgs/logo.svg'
import 'bootstrap/dist/css/bootstrap.min.css'

const AuthNavbar = ({colorPalette}) => {
    const navbarStyle = { backgroundColor: colorPalette.grayMedium}
    const logoContainerStyle = {justifyContent: 'center'}
  
    return (
      <nav class="navbar" style={navbarStyle}>
        <div class="container" style={logoContainerStyle}>
          <a class="navbar-brand" href="#">
            <img src={logo} alt="Descomplica Med" width="40"/>
          </a>
        </div>
      </nav>
    )
}

export {AuthNavbar};