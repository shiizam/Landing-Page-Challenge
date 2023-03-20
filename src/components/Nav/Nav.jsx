import { useContext } from 'react'
import { Context } from '../../App'

import logo from '../../assets/Nav/logo.svg'
import hamburgerIcon from '../../assets/Nav/icon-hamburger.svg'
import closeIcon from '../../assets/Nav/icon-close.svg'
import './nav.css'
import { RequestButton } from '../RequestButton/RequestButton'

export const Nav = () => {
  const {isOpen, setIsOpen} = useContext(Context)
  const navOptions = ['Home', 'About', 'Contact', 'Blog', 'Careers']
  

  const toggleNavDropdown = () => {
    {isOpen ? setIsOpen(false) : setIsOpen(true)}
  }

  return (
    <nav className='nav-bar'>
      <img className='company-logo' src={logo} alt="company-logo" />
      <div className="nav-desktop-links">
          {navOptions.map(x => (
            <ul key={x} >{x}</ul>
            )
          )}
      </div>
      <div className='nav-request-btn'>
        <RequestButton />
      </div>
      <button className='nav-btn' onClick={toggleNavDropdown}>
        <img id='mobile-nav-btn' src={isOpen ? closeIcon : hamburgerIcon} alt="nav-icon" />
      </button>
      {isOpen ? (
        <div className="nav-links">
          {navOptions.map(x => (
            <ul key={x} >{x}</ul>
            )
          )}
        </div>
      ) : null
      }
    </nav>
  )
}
