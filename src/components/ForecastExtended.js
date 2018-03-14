import React, { Component } from 'react';
import PropTypes from 'prop-types';
import Paper from 'material-ui/Paper';
import ForecastItem from './ForecastItem';
import transformForecast from './../services/transformForecast';
import CircularProgress from 'material-ui/CircularProgress';


const api_key = '3964db249e6c82ee05522ad1fa60775e';
const url = 'http://api.openweathermap.org/data/2.5/forecast';


class ForecastExtended extends Component {
  constructor() {
    super();
    this.state = {
      forecastData: null
    }
  }

  componentDidMount() {
    this.updateCity(this.props.city);

  }

  componentWillReceiveProps(nextProps) {
    if (nextProps.city !== this.props.city) {
      this.setState({ forecastData: null });
      this.updateCity(nextProps.city);
    }
  }

  updateCity = city => {
    const url_forecast = `${url}?q=${city}&appid=${api_key}&units=metric`;

    fetch(url_forecast).then(data => (data.json())
    ).then(weather_data => {
      console.log(weather_data)
      const forecastData = transformForecast(weather_data);

      this.setState({ forecastData })
    }

    )
  }

  renderForecastItemDays(forecastData) {
    return forecastData.map(forecast => (
      <Paper zDepth={1} key={`paper-${forecast.weekDay}${forecast.hour}`}>
        <ForecastItem
          key={`${forecast.weekDay}${forecast.hour}`}
          weekDay={forecast.weekDay}
          hour={forecast.hour}
          data={forecast.data}>
        </ForecastItem>
      </Paper>
    ));
  }

  renderProgress() {
    return (
      <div className="forecastProgress">
        <CircularProgress size={60} thickness={7} /> 
      </div>
    );
  }

  render() {
    const { city } = this.props;
    const { forecastData } = this.state
    return (
      <div className="detail">
        <h2 className="forecastTitle">Pronóstico extendido</h2>
        <p className="cityTitle">{city}</p>
        {forecastData ?
          this.renderForecastItemDays(forecastData) :
          this.renderProgress()}
      </div>
    )
  }
}

ForecastExtended.propTypes = {
  city: PropTypes.string.isRequired,
}

export default ForecastExtended;