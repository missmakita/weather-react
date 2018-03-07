import React, { Component } from 'react';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import LocationList from './components/LocationList';
import './App.css';

const cities = [
  'Santiago,cl',
  'Buenos Aires,ar',
  'Bogotá,col',
  'Ciudad de México,mx',
  'Madrid,es',
  'Rio de Janeiro,br'
];

class App extends Component {
  handlerSelectionLocation = city => {
    console.log('handlerSelectionLocationClick');
  }

  render() {
    return (
      <MuiThemeProvider>
        <div className="App">
          <LocationList cities={cities}
            onSelectedLocation={this.handlerSelectionLocation} />
        </div>
      </MuiThemeProvider>
    );
  }
}

export default App;
