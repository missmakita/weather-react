import React from 'react';
import PropTypes from 'prop-types';

/*
const Location = () => (
  <div>
    <h1>Santiago, CL</h1>
  </div>
); */

const Location = ({city}) => (
  // const city = props.city; // const {city} = props; *es lo mismo
  <div className="locationCont">
    <h2>
      {city}
    </h2>
  </div>
);

Location.propTypes = {
  city: PropTypes.string.isRequired
}

export default Location;