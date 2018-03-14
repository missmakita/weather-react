import React from 'react';
import PropTypes from 'prop-types';
import WeatherLocation from './WeatherLocation';

const LocationList = ({ cities, onSelectedLocation }) => {
  const handleWeatherLocationClick = city => {
    console.log('handleWeatherLocationClick');
    onSelectedLocation(city);
  }

  const strToComponent = cities => (
    cities.map(city => (<WeatherLocation
      key={city}
      city={city}
      onWeatherLocationClick={() =>
        handleWeatherLocationClick(city)} />))
  )

return (
  <div>
    <h2 className="weatherState">Estado del clima</h2>
    {strToComponent(cities)}
  </div>
)
}

LocationList.propTypes = {
  cities: PropTypes.array.isRequired,
}

export default LocationList;