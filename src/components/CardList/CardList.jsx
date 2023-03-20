import plane from '../../assets/Latest-Articles/plane.jpg'
import money from '../../assets/Latest-Articles/money.jpg'
import restaurant from '../../assets/Latest-Articles/restaurant.jpg'
import confetti from '../../assets/Latest-Articles/confetti.jpg'
import './card-list.css'


export const CardList = () => {

  return (
    <div className='card-list'>
      <div className='card' id='money-card'>
        <img className='card-img' src={money} alt="money-image" />
        <div className="card-body">
          <p className="author-name">By Claire Robinson</p>
          <h3>Recieve money in any currency with no fees</h3>
          <p className='article-synopsis'>
            The world is getting smaller and we're becoming more mobile. So why
            should you be forced to only receive money in a single ...
          </p>    
        </div>
      </div>

      <div className='card' id='restaurant-card'>
        <img className='card-img' src={restaurant} alt="restaurant-image" />
        <div className="card-body">
          <p className="author-name">By Wilson Hutton</p>
          <h3>Treat yourself without worrying about money</h3>
          <p className='article-synopsis'>
            Our simple budgeting feature allows you to separate out your spending
            and set realistic limits each month. That means you ...
          </p>    
        </div>
      </div>

      <div className='card' id='plane-card'>
        <img className='card-img' src={plane} alt="plane-image" />
        <div className="card-body">
          <p className="author-name">By Wilson Hutton</p>
          <h3>Take your Easybank card wherever you go</h3>
          <p className='article-synopsis'> 
            We want you to enjoy your travels. This is why we don't charge any fees
            on purchases while you're abroad. We'll even show you ...
          </p>    
        </div>
      </div>

      <div className='card' id='confetti-card'>
        <img className='card-img' src={confetti} alt="confetti-image" />
        <div className="card-body">
          <p className="author-name">By Claire Robinson</p>
          <h3>Our invite-only Beta accounts are now live!</h3>
          <p className='article-synopsis'>
            After a lot of hard work by the whole team, we're excited to launch our closed
            beta. It's easy to request an invite through the site ...
          </p>    
        </div>
      </div>
    </div>
  )
}
