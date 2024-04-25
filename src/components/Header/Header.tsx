import { Link } from 'react-router-dom';
import { Navbar } from '../Navbar/Navbar';


import './Header.scss';

export const Header = () => {
  return (
    <div 
      className="header" 
      style={{
        backgroundImage: 'url(./image/nordic-discovery.png)',
      }}
    >
      <div className="header__container">

        <div className="header__topbar">
          <div className="header__logo logo" />

          <div className="header__content">
            <Navbar />

            <div className="header__user-icon icon" />
          </div>
        </div>

        <div className="header__tour">
          <h1 className="header__title">Nordic Discovery</h1>

          <p className="header__text">Explore Norway's majestic fjords on our guided trekking tour. Led by experts, discover breathtaking landscapes, from cascading waterfalls to serene lakes. Join us for an unforgettable adventure in Scandinavia's wilderness.</p>

          <div className="header__button-block">
            <button className="header__button-book button">Book tour</button>
            <Link to={`/tours/nordic-discovery`} className="header__button-learn button">Learn more</Link>
          </div>
        </div>

        <div className="header__scroll">
          <p className="header__scroll-text">Scroll Down</p>

          <div className="header__scroll-arrow" />
        </div>
      </div>
    </div>
  )
}