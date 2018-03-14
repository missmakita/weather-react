import React from 'react';
import PropTypes from 'prop-types';

const WeatherExtraInfo = ({ humidity, wind }) => (
  <div className="weatherExtraInfo">
    <div>{`Humedad ${humidity}%`}</div>
    <div>{`Viento ${wind} m/s`}</div>
  </div>
)

WeatherExtraInfo.propTypes = {
  humidity: PropTypes.number.isRequired,
  wind: PropTypes.number.isRequired
}

export default WeatherExtraInfo;