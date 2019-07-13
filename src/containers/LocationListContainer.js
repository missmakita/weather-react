import React, { Component } from 'react';
import { connect } from 'react-redux';
import { setCity } from './../actions';
import LocationList from './../components/LocationList';

class LocationsListContainer extends Component {
  // Vamos a limpiar APP js para que sea libre y no depender de el.

  // Traemos el app a container

  handlerSelectionClick = (city) => {
    console.log('handlerSelectionClick', city)
    this.props.setCity(city);
  }

  render() {
    return (
      <LocationList cities={this.props.cities}
        onSelectedLocation={this.handlerSelectionClick} />
    )
  }
}

const mapDispatchPropsActions = dispatch => ({
  setCity: value => dispatch(setCity(value))
});

export default connect(null, mapDispatchPropsActions)(LocationsListContainer)