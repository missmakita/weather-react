import React, { Component } from 'react';
import { connect } from 'react-redux'; //sirve para conectar mis componentes de React con Redux
import ForecastExtended from './../components/ForecastExtended';

class ForecastExtendedContainer extends Component {
  render() {
    return (
      this.props.city &&
      <ForecastExtended city={this.props.city}></ForecastExtended>
    )
  }
}

const mapStateToProps = ({ city }) => (
  console.log(`Este es el valor de mapStateToProps ${city}`), { city }
);

export default connect(mapStateToProps, null)(ForecastExtendedContainer);