import React from 'react';
import PropTypes from 'prop-types';

const WeatherExtraInfo = ({ humidity, wind }) => (
  <div className="weatherExtraInfo">
    <span>{`Humedad ${humidity}% | `}</span>
    <span>{`Viento ${wind} m/s`}</span>
  </div>
)

WeatherExtraInfo.propTypes = {
  humidity: PropTypes.number.isRequired,
  wind: PropTypes.number.isRequired
}

export default WeatherExtraInfo;