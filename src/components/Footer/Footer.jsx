import footerLogo from '../../assets/Footer/footer-logo.svg'
import facebook from '../../assets/Social-Logos/icon-facebook.svg'
import instagram from '../../assets/Social-Logos/icon-instagram.svg'
import pinterest from '../../assets/Social-Logos/icon-pinterest.svg'
import twitter from '../../assets/Social-Logos/icon-twitter.svg'
import youtube from '../../assets/Social-Logos/icon-youtube.svg'
import { RequestButton } from '../RequestButton/RequestButton'

import './footer.css'


export const Footer = () => {
  const socialIcons = [facebook, youtube, twitter, pinterest, instagram]
  const siteLinks = ['About Us', 'Contact', 'Blog', 'Careers', 'Support', 'Privacy Policy']

  return (
    <div className='footer-container'>
      <div className="footer-icons">
        <img id='footer-logo' src={footerLogo} alt="company-logo" />
        <div className="social-logos">
          {socialIcons.map((icon, index) => {
            return (
              <img src={icon} key={`${icon}${index}`}></img>
          )
          })}
        </div>
      </div>

      <div className="footer-body">
        {siteLinks.map((link, index) => { 
          return (
            <span key={`${index} key`}>{link}</span>
          )
        })}
      </div>
      <div className="copyright">
        <RequestButton />
        © Easybank. All Rights Reserved
      </div>
    </div>
  )
}
