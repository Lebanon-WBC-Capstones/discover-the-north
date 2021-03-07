import React, { useState } from 'react';
import './SingleCityPage.css';
import Map from '../../Components/Map/Map.js';
import { Card, Button } from 'antd';
import CityCarousel from '../../Components/CityCarousel/CityCarousel';
import cities from '../../MockData/cities.json';
import { PageHeader } from 'antd';
import tourGuide from './tourGuide.jpg';

export default function SingleCityPage({ city }) {
  const [isModalVisible, setIsModalVisible] = useState(false);
  const showModal = () => {
    setIsModalVisible(true);
  };
  return (
    <div className="single-city-page">
      <PageHeader
        className="site-page-header"
        onBack={() => null}
        title={<span>Back</span>}
      />
      <h1 className="single-city-title">{city.name}</h1>
      <div className="gallery-container" onClick={showModal}>
        <div className="gallery">
          <div className="gallery__item gallery__item--1">
            <img src={city.images[0]} alt="city pic" class="gallery__img" />{' '}
          </div>
          <div className="gallery__item gallery__item--2">
            <img src={city.images[1]} alt="city pic" class="gallery__img" />
          </div>
          <div className="gallery__item gallery__item--3">
            <img src={city.images[2]} alt="city pic" class="gallery__img" />
          </div>
          <div className="gallery__item gallery__item--4">
            <img src={city.images[3]} alt="city pic" class="gallery__img" />
          </div>
          <div className="gallery__item gallery__item--5">
            <img src={city.images[4]} alt="city pic" class="gallery__img" />
          </div>
        </div>
      </div>
      <div className="seemore-btn">
        <Button onClick={showModal} className="seemore-btn">
          See more
        </Button>
      </div>
      <CityCarousel
        picArray={city.images}
        isModalVisible={isModalVisible}
        setIsModalVisible={setIsModalVisible}
      />
      <div className="single-city-cards">
        <div className="card-col">
          <Card
            title={<b>Activities</b>}
            style={{ height: 400, borderRadius: 10 }}
            headStyle={{ borderBottom: 'none' }}
            className="card-item"
          >
            <span>
              <b>Activities Number : </b>
            </span>{' '}
            {city.activityNumber}
            {city.activity.map((act) => (
              <li>{act.type}</li>
            ))}
          </Card>
        </div>
        <div className="card-col">
          <Card
            title={<b>Details</b>}
            style={{ height: 400, borderRadius: 10 }}
            headStyle={{ borderBottom: 'none' }}
            className="card-item"
          >
            <div>
              <b>Description </b>
            </div>
            {city.description}
          </Card>
        </div>
        <div className="card-col">
          <Card
            title={<b>Location</b>}
            style={{ height: 400, borderRadius: 10 }}
            headStyle={{ borderBottom: 'none' }}
            className="card-item"
          >
            <Map
              width="100"
              height="40ch"
              data={cities}
              long={city.lng}
              lat={city.lat}
              zoomNb={12}
              infoType={0}
            />
          </Card>
        </div>
      </div>
      <div className="hire-box">
        <div className="hire-box-text">
          <h1 className="icon-text">
            Don't got it alone!
            <br />
            Hire an expert to craft your trip.
          </h1>
          <Button type="primary" className="seemore-btn">
            Learn more
          </Button>
        </div>
        <div className="hire-box-img">
          <img src={tourGuide} alt="this pic" className="tourGuide-image" />
        </div>
      </div>
    </div>
  );
}