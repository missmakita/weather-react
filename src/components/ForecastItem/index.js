import React from 'react';
import PropTypes from 'prop-types';
import WeatherData from './../WeatherLocation/WeatherData';
import './forecastItem.css';

// const data = {
//   temperature: 10,
//   humidity: 10,
//   weatherState: 'normal',
//   wind: 'normal'
// }

const ForecastItem = ({ weekDay, hour, data }) => (
  <div className="forecastItem">
    <div className="weekDay">{weekDay} - {hour} hr</div>
    <WeatherData data={data}></WeatherData>
  </div>
)


ForecastItem.propTypes = {
  weekDay: PropTypes.string.isRequired,
  hour: PropTypes.number.isRequired,
  data: PropTypes.shape({
    temperature: PropTypes.number.isRequired,
    weatherState: PropTypes.string.isRequired,
    humidity: PropTypes.number.isRequired,
    wind: PropTypes.number.isRequired,
  }),
};


export default ForecastItem;