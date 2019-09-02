import { Link } from "gatsby"
import React from "react"
import Topbar from './topbar'
import Logo from '../../assets/images/fakestore-logo.png';
import Nav from '../nav/nav'

const Header = ({ siteTitle }) => {

  return (
    <React.Fragment>
      <Topbar/>
      <header className='main-header full-width-container'>
        <div className='container'>
          <img className='header-logo' src={Logo}/>
          <Nav/>
        </div>
      </header>
    </React.Fragment>)

}

export default Header
