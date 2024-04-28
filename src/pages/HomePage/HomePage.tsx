import { Link } from "react-router-dom";
import { Header } from "../../components/Header/Header";
import { useState } from "react";
import { Modal } from "../../components/Modal/Modal";

import './HomePage.scss';

export const HomePage = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const handleOpenLogIn = () => {
    setIsModalOpen(true);
  };

  const handleCloseLogIn = () => {
    setIsModalOpen(false);
  };


  return (

    <>
      <div className="home-page">
        <div
          className="home-page__header"
          style={{
            backgroundImage: 'url(./image/nordic-discovery.png)',
          }}
        >
          <div className="home-page__topbar">

            <Header handleOpenLogIn={handleOpenLogIn} />

            <h1 className="home-page__title">Nordic Discovery</h1>

            <p className="home-page__text">Explore Norway's majestic fjords on our guided trekking tour. Led by experts, discover breathtaking landscapes, from cascading waterfalls to serene lakes. Join us for an unforgettable adventure in Scandinavia's wilderness.</p>

            <div className="home-page__button-block">
              <button className="home-page__button-book button">Book tour</button>

              <Link
                to={`/tours/nordic-discovery`}
                className="home-page__button-learn button"
              >
                Learn more
              </Link>
            </div>

            <div className="home-page__scroll">
              <p className="home-page__scroll-text">Scroll Down</p>

              <div className="home-page__scroll-arrow" />
            </div>
          </div>
        </div>

      </div>

      {isModalOpen && <Modal handleCloseLogIn={handleCloseLogIn} />}
    </>
  );
};