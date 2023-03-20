import online from '../../assets/Why-Section/icon-online.svg'
import budgeting from '../../assets/Why-Section/icon-budgeting.svg'
import onboarding from '../../assets/Why-Section/icon-onboarding.svg'
import api from '../../assets/Why-Section/icon-api.svg'

import './why.css'

export const WhySection = () => {
  return (
    <div className='why-container'>
      <div className="why-heading">
        <h1>Why choose Easybank?</h1>
        <p>
          We leverage Open Banking to turn your bank account into your financial hub.
          Control your finances like never before.
        </p>
      </div>
      

      <div className="sub-sections">
        <div id="online-banking">
          <img id='online-bank-img' src={online} alt="online-banking-icon" />
          <h2>Online Banking</h2>
          <p>
            Our modern web and mobile4 applications allow you to keep track of
            your finances wherever you are in the world.
          </p>
        </div>
        <div id="budgeting">
          <img id='budget-img' src={budgeting} alt="budgeting-icon" />
          <h2>Simple Budgeting</h2>
          <p>
            See exactly where your money goes each month. Receive notifications
            when you're close to your hitting limits
          </p>
        </div>
        <div id="onboarding">
          <img id='onboarding-img' src={onboarding} alt="onboarding-icon" />
          <h2>Fast Onboarding</h2>
          <p>
            We don't do branches. Open your account in minutes online and 
            start taking control of your finances right away.
          </p>
        </div>
        <div id="api">
          <img src={api} alt="api-icon" />
          <h2>Open Api</h2>
          <p>
            Manage your savings, investments, pension, and much more 
            from one account. tracking your money has never been easier
          </p>
        </div>

      </div>

    </div>
  )
}
