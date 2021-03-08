import React from 'react';
import CityCardItem from '../../Components/CityCardItem/CityCardItem.js';
import './CitiesPage.css';
import { Link } from 'react-router-dom';

export default function CitiesPage({ data }) {
  // console.log(data);
  return (
    <div className="cityPage">
      <div className="cityList">
        {data.map((city, i) => {
          return (
            <div key={i} className="cityLs">
              <Link to={`/cities/${city.id}`}>
                <CityCardItem
                  imgsrc={city.image}
                  name={city.name}
                  info={city.description}
                  activityNumber={city['activity-number']}
                />
              </Link>
            </div>
          );
        })}
      </div>
    </div>
  );
}
