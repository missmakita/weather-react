import React from 'react';
import PropTypes from 'prop-types';
import WeatherLocation from './WeatherLocation';

/* Estático
const LocationList = ({ cities }) => (
  <div>
    <WeatherLocation city={'Santiago,scl'} />
    <WeatherLocation city={'Bogotá,col'} />
    <WeatherLocation city={'Buenos Aires,ar'} />
    <WeatherLocation city={'Rio de Janeiro,br'} />
  </div>
); */

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
    {strToComponent(cities)}
  </div>
)
}

LocationList.propTypes = {
  cities: PropTypes.array.isRequired,
}

export default LocationList;