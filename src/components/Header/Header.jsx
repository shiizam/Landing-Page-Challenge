import { RequestButton } from '../RequestButton/RequestButton'
import { useContext } from 'react'
import { Context } from '../../App'
import mobileBackground from '../../assets/Header/bg-intro-mobile.svg'
import Background from '../../assets/Header/bg-intro-desktop.svg'
import phones from '../../assets/Header/image-mockups.png'
import './header.css'

export const Header = () => {
  const {isOpen} = useContext(Context)

  const headerOverlay = {
    background: 'linear-gradient(to bottom, rgba(45, 49, 77, 0.8), rgba(243, 244, 246, 0.8))',
  }

  const setStyle = () => {
    if (isOpen) {
      return headerOverlay
    } else {
      null
    }
  }

  return (
    <header style={setStyle()}>
      <div className="wrapper">
        <div className="head-images" >
          {isOpen 
            ? null
            : <img className='phone-mockup' src={phones} alt="phones-mockup" />
          }
          <img id='mobile-background' src={mobileBackground} alt="background-mobile" />
        </div>
          
        <div className="head-container">
          <h1>Next generation digital banking</h1>
          <p>
            Take  your financial life online. Your Easybank account will be a one-stop-shop
            for spending, saving, budgeting, investing, and much more.
          </p>
          <RequestButton/>
        </div>
      </div>
    </header>
  )
}
